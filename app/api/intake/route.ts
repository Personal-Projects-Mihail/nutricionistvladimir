import { NextRequest, NextResponse } from 'next/server';
import { sendIntakeFormEmail, sendIntakeFormConfirmationToClient, type IntakeFormData } from '@/lib/services/email';
import { addIntakeFormToCalendar, checkAvailability } from '@/lib/services/calendar';

/**
 * POST /api/intake
 * Handles contact form submissions
 * - Validates form data
 * - Sends email notification to nutritionist
 * - Sends confirmation email to client
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'phone', 'email', 'date', 'time'];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          {
            success: false,
            error: `Missing required field: ${field}`
          },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email address'
        },
        { status: 400 }
      );
    }

    // Validate date format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(body.date)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid date format. Use YYYY-MM-DD'
        },
        { status: 400 }
      );
    }

    // Validate time format
    const timeRegex = /^\d{2}:\d{2}$/;
    if (!timeRegex.test(body.time)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid time format. Use HH:MM'
        },
        { status: 400 }
      );
    }

    const intakeData: IntakeFormData = {
      firstName: body.firstName,
      lastName: body.lastName,
      phone: body.phone,
      email: body.email,
      date: body.date,
      time: body.time,
      lang: body.lang || 'en',
    };

    // Check if calendar is configured
    const isCalendarConfigured = process.env.GOOGLE_CLIENT_ID && 
                                 process.env.GOOGLE_CLIENT_SECRET && 
                                 process.env.GOOGLE_REFRESH_TOKEN;

    let calendarLink = '';
    let availabilityChecked = false;

    // Check calendar availability if configured
    if (isCalendarConfigured && process.env.CHECK_AVAILABILITY === 'true') {
      try {
        const isAvailable = await checkAvailability(
          body.date, 
          body.time,
          45 // 45-minute duration for intake form appointments
        );
        
        availabilityChecked = true;
        
        if (!isAvailable) {
          return NextResponse.json(
            { 
              success: false, 
              error: 'The requested time slot is not available. Please choose a different time.',
              code: 'SLOT_UNAVAILABLE'
            },
            { status: 409 }
          );
        }
      } catch (error) {
        console.error('Availability check failed:', error);
        // Continue with booking even if availability check fails
      }
    }

    // Add to Google Calendar if configured
    if (isCalendarConfigured) {
      try {
        calendarLink = await addIntakeFormToCalendar({
          fullName: `${body.firstName} ${body.lastName}`,
          email: body.email,
          phone: body.phone,
          preferredDate: body.date,
          preferredTime: body.time,
        });
        console.log('✅ Intake form event added to Google Calendar');
      } catch (error: any) {
        console.error('❌ Failed to add intake form event to calendar:', error);
        // Continue even if calendar creation fails
      }
    }

    // Check if email is configured
    const isEmailConfigured = process.env.EMAIL_USER &&
                              (process.env.EMAIL_APP_PASSWORD || process.env.SMTP_PASSWORD);

    if (isEmailConfigured) {
      try {
        await sendIntakeFormEmail(intakeData);
        console.log('✅ Contact form email sent to nutritionist');

        // Send confirmation email to client
        try {
          const clientLang = intakeData.lang || 'en';
          await sendIntakeFormConfirmationToClient(intakeData, clientLang);
          console.log('✅ Confirmation email sent to client');
        } catch (confirmationError: any) {
          console.error('❌ Failed to send confirmation email to client:', confirmationError);
        }
      } catch (error: any) {
        console.error('❌ Failed to send contact form email:', error);

        return NextResponse.json(
          {
            success: false,
            error: error?.message || 'Failed to send email notification. Please try again or contact us directly.',
          },
          { status: 500 }
        );
      }
    } else {
      console.warn('⚠️ Email not configured. Contact form notification not sent.');

      return NextResponse.json(
        {
          success: false,
          error: 'Contact form system not configured. Please contact us directly.'
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      emailSent: true,
      calendarEventCreated: !!calendarLink,
      calendarLink: calendarLink || undefined,
      availabilityChecked,
    });

  } catch (error: any) {
    console.error('❌ Contact form API error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again later.'
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/intake
 * Health check endpoint
 */
export async function GET() {
  const isEmailConfigured = !!(process.env.EMAIL_USER &&
                               (process.env.EMAIL_APP_PASSWORD || process.env.SMTP_PASSWORD));

  return NextResponse.json({
    status: 'ok',
    services: {
      email: isEmailConfigured ? 'configured' : 'not configured',
    },
    timestamp: new Date().toISOString(),
  });
}
