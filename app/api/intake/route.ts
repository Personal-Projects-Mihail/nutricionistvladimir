import { NextRequest, NextResponse } from 'next/server';
import { sendIntakeFormEmail, sendIntakeFormConfirmationToClient, type IntakeFormData } from '@/lib/services/email';

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
    const requiredFields = ['firstName', 'lastName', 'phone', 'email'];

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

    const intakeData: IntakeFormData = {
      firstName: body.firstName,
      lastName: body.lastName,
      phone: body.phone,
      email: body.email,
      lang: body.lang || 'en',
    };

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
