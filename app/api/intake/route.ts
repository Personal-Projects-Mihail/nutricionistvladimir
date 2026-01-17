import { NextRequest, NextResponse } from 'next/server';
import { sendIntakeFormEmail, sendIntakeFormConfirmationToClient, type IntakeFormData } from '@/lib/services/email';
import { addIntakeFormToCalendar, checkAvailability } from '@/lib/services/calendar';

/**
 * POST /api/intake
 * Handles intake form submissions
 * - Validates form data
 * - Sends email notification to nutritionist
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = [
      'fullName',
      'age',
      'height',
      'currentWeight',
      'gender',
      'phone',
      'email',
      'mainGoals',
      'preferredDate',
      'preferredTime',
      'appointmentDuration',
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

    // Validate mainGoals is an array with at least one item
    if (!Array.isArray(body.mainGoals) || body.mainGoals.length === 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'At least one main goal must be selected' 
        },
        { status: 400 }
      );
    }

    // Validate appointment duration is valid (15, 30, or 45)
    const validDurations = ['15', '30', '45'];
    if (body.appointmentDuration && !validDurations.includes(body.appointmentDuration)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid appointment duration. Must be 15, 30, or 45 minutes.' 
        },
        { status: 400 }
      );
    }

    // Validate date is not in the past (only if preferredDate is provided)
    if (body.preferredDate) {
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
    }

    // Debug: Log received data
    console.log('📥 Received form data:', {
      preferredDate: body.preferredDate,
      preferredTime: body.preferredTime,
      appointmentDuration: body.appointmentDuration,
    });

    const intakeData: IntakeFormData = {
      fullName: body.fullName,
      age: body.age,
      height: body.height,
      currentWeight: body.currentWeight,
      gender: body.gender,
      phone: body.phone,
      email: body.email,
      mainGoals: body.mainGoals,
      preferredDate: body.preferredDate || '',
      preferredTime: body.preferredTime || '',
      appointmentDuration: body.appointmentDuration || '30',
      lang: body.lang || 'en', // Default to English if not provided
      healthConditions: body.healthConditions || '',
      medications: body.medications || '',
      mealsPerDay: body.mealsPerDay || '',
      mealsPerDayOther: body.mealsPerDayOther || '',
      eatingTime: body.eatingTime || '',
      foodRestrictions: body.foodRestrictions || '',
      preferredFoods: body.preferredFoods || '',
      physicalActivity: body.physicalActivity || '',
      physicalActivityOther: body.physicalActivityOther || '',
      waterIntake: body.waterIntake || '',
      waterIntakeOther: body.waterIntakeOther || '',
      startDate: body.startDate || '',
      hasLabResults: body.hasLabResults || '',
      otherGoal: body.otherGoal || '',
    };

    // Check if required environment variables are set
    const isEmailConfigured = process.env.EMAIL_USER && 
                              (process.env.EMAIL_APP_PASSWORD || process.env.SMTP_PASSWORD);
    const isCalendarConfigured = process.env.GOOGLE_CLIENT_ID && 
                                 process.env.GOOGLE_CLIENT_SECRET && 
                                 process.env.GOOGLE_REFRESH_TOKEN;

    let calendarLink = '';
    let availabilityChecked = false;

    // Note: Availability is checked in real-time in the UI
    // We still check here as a final validation, but don't block if CHECK_AVAILABILITY is false
    // since the user has already seen the availability status
    if (isCalendarConfigured && process.env.CHECK_AVAILABILITY === 'true' && intakeData.preferredDate && intakeData.preferredTime) {
      try {
        const durationMinutes = parseInt(intakeData.appointmentDuration || '30', 10);
        const isAvailable = await checkAvailability(
          intakeData.preferredDate, 
          intakeData.preferredTime,
          durationMinutes
        );
        
        availabilityChecked = true;
        
        // Only block if slot became unavailable between UI check and submission
        // (rare race condition)
        if (!isAvailable) {
          return NextResponse.json(
            { 
              success: false, 
              error: 'The requested time slot is no longer available. Please choose a different time.',
              code: 'SLOT_UNAVAILABLE'
            },
            { status: 409 }
          );
        }
      } catch (error) {
        console.error('Final availability check failed:', error);
        // Continue with booking even if final check fails
        // User has already seen availability in UI
      }
    }

    // Add to Google Calendar if configured and date/time are provided
    if (isCalendarConfigured && intakeData.preferredDate && intakeData.preferredTime) {
      try {
        calendarLink = await addIntakeFormToCalendar(intakeData);
        console.log('✅ Calendar event created:', calendarLink);
      } catch (error) {
        console.error('❌ Failed to add to calendar:', error);
        // Don't fail the entire request if calendar fails
        // The email will still be sent
      }
    } else {
      if (!intakeData.preferredDate || !intakeData.preferredTime) {
        console.warn('⚠️ Preferred date or time not provided. Event not added to calendar.');
      } else {
        console.warn('⚠️ Google Calendar not configured. Event not added to calendar.');
      }
    }

    // Send email notification if configured
    if (isEmailConfigured) {
      try {
        await sendIntakeFormEmail(intakeData);
        console.log('✅ Intake form email sent to nutritionist');
        
        // Send confirmation email to client (don't block on failure)
        try {
          const clientLang = intakeData.lang || 'en';
          await sendIntakeFormConfirmationToClient(intakeData, clientLang);
          console.log('✅ Confirmation email sent to client');
        } catch (confirmationError: any) {
          console.error('❌ Failed to send confirmation email to client:', confirmationError);
          // Continue even if confirmation email fails
        }
      } catch (error: any) {
        console.error('❌ Failed to send intake form email:', error);
        console.error('Error details:', {
          message: error?.message,
          stack: error?.stack,
          code: error?.code,
          response: error?.response,
        });
        
        return NextResponse.json(
          { 
            success: false, 
            error: error?.message || 'Failed to send email notification. Please try again or contact us directly.',
            details: process.env.NODE_ENV === 'development' ? error?.stack : undefined,
          },
          { status: 500 }
        );
      }
    } else {
      console.warn('⚠️ Email not configured. Intake form notification not sent.');
      
      return NextResponse.json(
        { 
          success: false, 
          error: 'Intake form system not configured. Please contact us directly.' 
        },
        { status: 503 }
      );
    }

    // Success response
    return NextResponse.json({
      success: true,
      message: 'Intake form submitted successfully',
      emailSent: true,
    });

  } catch (error: any) {
    console.error('❌ Intake form API error:', error);
    
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
