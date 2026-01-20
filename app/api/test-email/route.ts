import { NextRequest, NextResponse } from 'next/server';
import { sendIntakeFormEmail } from '@/lib/services/email';

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

    // Sample test data matching IntakeFormData interface
    const testData = {
      firstName: 'Test',
      lastName: 'User',
      phone: '+38970123456',
      email: 'mihailtalevtest@gmail.com',
      lang, // Use the selected language
    };

    let emailSent = false;

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

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully',
      testData,
      emailSent,
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
