import { NextRequest, NextResponse } from 'next/server';
import { 
  sendBookingNotificationToNutritionist, 
  sendBookingConfirmationToClient,
  type BookingEmailData 
} from '@/lib/services/email';
import { addBookingToCalendar, checkAvailability } from '@/lib/services/calendar';

/**
 * POST /api/booking
 * Handles consultation booking submissions
 * - Validates form data
 * - Checks calendar availability (optional)
 * - Sends email notifications
 * - Adds event to Google Calendar
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = [
      'fullName',
      'email',
      'phone',
      'preferredDate',
      'preferredTime',
      'consultationType',
      'consentData',
    ];
    
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

    // Validate date is not in the past
    const requestedDate = new Date(body.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (requestedDate < today) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Cannot book appointments in the past' 
        },
        { status: 400 }
      );
    }

    const bookingData: BookingEmailData = {
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      preferredDate: body.preferredDate,
      preferredTime: body.preferredTime,
      consultationType: body.consultationType,
      primaryGoal: body.primaryGoal || '',
      ageRange: body.ageRange || '',
      gender: body.gender || '',
      medicalConditions: body.medicalConditions || '',
      allergies: body.allergies || '',
      lifestyleLevel: body.lifestyleLevel || '',
      message: body.message || '',
      consentData: body.consentData,
      consentEmail: body.consentEmail || false,
    };

    // Check if required environment variables are set
    const isEmailConfigured = process.env.EMAIL_USER && 
                              (process.env.EMAIL_APP_PASSWORD || process.env.SMTP_PASSWORD);
    const isCalendarConfigured = process.env.GOOGLE_CLIENT_ID && 
                                 process.env.GOOGLE_CLIENT_SECRET && 
                                 process.env.GOOGLE_REFRESH_TOKEN;

    let calendarLink = '';
    let availabilityChecked = false;

    // Optional: Check calendar availability if configured
    if (isCalendarConfigured && process.env.CHECK_AVAILABILITY === 'true') {
      try {
        const isAvailable = await checkAvailability(
          bookingData.preferredDate, 
          bookingData.preferredTime
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
        calendarLink = await addBookingToCalendar(bookingData);
        console.log('✅ Calendar event created:', calendarLink);
      } catch (error) {
        console.error('❌ Failed to add to calendar:', error);
        // Don't fail the entire request if calendar fails
        // The email will still be sent
      }
    } else {
      console.warn('⚠️ Google Calendar not configured. Event not added to calendar.');
    }

    // Send email notifications if configured
    if (isEmailConfigured) {
      try {
        // Send notification to nutritionist
        await sendBookingNotificationToNutritionist(bookingData);
        console.log('✅ Notification email sent to nutritionist');

        // Send confirmation to client (if they opted in)
        if (bookingData.consentEmail) {
          await sendBookingConfirmationToClient(bookingData);
          console.log('✅ Confirmation email sent to client');
        }
      } catch (error: any) {
        console.error('❌ Failed to send emails:', error);
        console.error('Error details:', {
          message: error?.message,
          stack: error?.stack,
          code: error?.code,
          response: error?.response,
        });
        
        // If calendar was created but email failed, still return success
        // but note the email failure
        if (calendarLink) {
          return NextResponse.json({
            success: true,
            message: 'Booking created in calendar but email notification failed',
            calendarLink,
            emailSent: false,
            error: error?.message || 'Email sending failed',
          });
        }
        
        // If both failed, return error with details
        return NextResponse.json(
          { 
            success: false, 
            error: error?.message || 'Failed to send email notifications. Please try again or contact us directly.',
            details: process.env.NODE_ENV === 'development' ? error?.stack : undefined,
          },
          { status: 500 }
        );
      }
    } else {
      console.warn('⚠️ Email not configured. Notifications not sent.');
      
      // If email is not configured but calendar is, still return success
      if (calendarLink) {
        return NextResponse.json({
          success: true,
          message: 'Booking created in calendar (email not configured)',
          calendarLink,
          emailSent: false,
        });
      }
      
      // If nothing is configured, return error
      return NextResponse.json(
        { 
          success: false, 
          error: 'Booking system not configured. Please contact us directly.' 
        },
        { status: 503 }
      );
    }

    // Success response
    return NextResponse.json({
      success: true,
      message: 'Booking request received successfully',
      calendarLink,
      emailSent: true,
      availabilityChecked,
    });

  } catch (error) {
    console.error('❌ Booking API error:', error);
    
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
 * GET /api/booking
 * Health check endpoint
 */
export async function GET() {
  const isEmailConfigured = !!(process.env.EMAIL_USER && 
                               (process.env.EMAIL_APP_PASSWORD || process.env.SMTP_PASSWORD));
  const isCalendarConfigured = !!(process.env.GOOGLE_CLIENT_ID && 
                                  process.env.GOOGLE_CLIENT_SECRET && 
                                  process.env.GOOGLE_REFRESH_TOKEN);

  return NextResponse.json({
    status: 'ok',
    services: {
      email: isEmailConfigured ? 'configured' : 'not configured',
      calendar: isCalendarConfigured ? 'configured' : 'not configured',
    },
    timestamp: new Date().toISOString(),
  });
}
