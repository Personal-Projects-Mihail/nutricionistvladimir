import { NextRequest, NextResponse } from 'next/server';
import { sendIntakeFormEmail } from '@/lib/services/email';
import { addIntakeFormToCalendar } from '@/lib/services/calendar';

/**
 * POST /api/test-email
 * Sends a test email with sample intake form data
 * Useful for testing email functionality without filling out the form
 */
export async function POST(request: NextRequest) {
  try {
    // Check if email is configured
    const isEmailConfigured = process.env.EMAIL_USER && 
                              (process.env.EMAIL_APP_PASSWORD || process.env.SMTP_PASSWORD);

    if (!isEmailConfigured) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email not configured. Please set EMAIL_USER and EMAIL_APP_PASSWORD in .env.local' 
        },
        { status: 503 }
      );
    }

    // Get language from query parameter, default to 'en'
    const url = new URL(request.url);
    const queryLang = url.searchParams.get('lang');
    const lang = (queryLang || 'en') as 'mk' | 'en';
    
    // Validate lang is either 'mk' or 'en'
    if (lang !== 'mk' && lang !== 'en') {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid language. Use "mk" for Macedonian or "en" for English.' 
        },
        { status: 400 }
      );
    }

    // Sample test data
    const testData = {
      fullName: 'Test User',
      age: '30',
      height: '175',
      currentWeight: '75',
      gender: 'male',
      phone: '+38970123456',
      email: 'mihailtalevtest@gmail.com',
      mainGoals: ['weightLoss', 'healthImprovement'],
      preferredDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 7 days from now
      preferredTime: '14:00',
      appointmentDuration: '30',
      lang, // Use the selected language
      healthConditions: 'None',
      medications: 'None',
      mealsPerDay: '3',
      mealsPerDayOther: '',
      eatingTime: 'Regular meal times',
      foodRestrictions: 'None',
      preferredFoods: 'Mediterranean cuisine',
      physicalActivity: 'moderatelyActive',
      physicalActivityOther: '',
      waterIntake: '2',
      waterIntakeOther: '',
      startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      hasLabResults: 'yes',
      otherGoal: '',
    };

    // Check if calendar is configured
    const isCalendarConfigured = process.env.GOOGLE_CLIENT_ID && 
                                 process.env.GOOGLE_CLIENT_SECRET && 
                                 process.env.GOOGLE_REFRESH_TOKEN;

    let calendarLink = '';
    let emailSent = false;
    let calendarCreated = false;

    // Send test email
    try {
      await sendIntakeFormEmail(testData);
      emailSent = true;
      console.log('✅ Test email sent successfully');
    } catch (error: any) {
      console.error('❌ Failed to send test email:', error);
      return NextResponse.json(
        { 
          success: false, 
          error: `Failed to send test email: ${error?.message || 'Unknown error'}`,
          details: process.env.NODE_ENV === 'development' ? error?.stack : undefined,
        },
        { status: 500 }
      );
    }

    // Add to Google Calendar if configured
    if (isCalendarConfigured) {
      try {
        calendarLink = await addIntakeFormToCalendar(testData);
        calendarCreated = true;
        console.log('✅ Test calendar event created:', calendarLink);
      } catch (error: any) {
        console.error('❌ Failed to add test event to calendar:', error);
        // Don't fail the entire request if calendar fails
        // Email was already sent
      }
    } else {
      console.warn('⚠️ Google Calendar not configured. Test event not added to calendar.');
    }

    return NextResponse.json({
      success: true,
      message: emailSent && calendarCreated 
        ? 'Test email sent and calendar event created successfully'
        : emailSent 
        ? 'Test email sent successfully (calendar not configured)'
        : 'Test email sent successfully',
      testData,
      emailSent,
      calendarCreated,
      calendarLink: calendarLink || null,
    });

  } catch (error: any) {
    console.error('❌ Failed to send test email:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: error?.message || 'Failed to send test email',
        details: process.env.NODE_ENV === 'development' ? error?.stack : undefined,
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/test-email
 * Returns information about the test email endpoint
 */
export async function GET() {
  const isEmailConfigured = !!(process.env.EMAIL_USER && 
                               (process.env.EMAIL_APP_PASSWORD || process.env.SMTP_PASSWORD));

  return NextResponse.json({
    message: 'Test Email Endpoint',
    description: 'POST to this endpoint to send a test email with sample data',
    emailConfigured: isEmailConfigured,
    usage: {
      method: 'POST',
      endpoint: '/api/test-email',
      description: 'Sends a test email with sample intake form data',
    },
  });
}
