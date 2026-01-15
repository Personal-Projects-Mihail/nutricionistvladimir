import { NextRequest, NextResponse } from 'next/server';
import { checkAvailability } from '@/lib/services/calendar';

/**
 * GET /api/availability?date=YYYY-MM-DD&time=HH:MM
 * Checks if a specific time slot is available
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const date = searchParams.get('date');
    const time = searchParams.get('time');
    const duration = searchParams.get('duration') || '30'; // Default to 30 minutes

    if (!date || !time) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Date and time parameters are required' 
        },
        { status: 400 }
      );
    }

    // Validate date format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
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
    if (!timeRegex.test(time)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid time format. Use HH:MM' 
        },
        { status: 400 }
      );
    }

    // Check if calendar is configured
    const isCalendarConfigured = process.env.GOOGLE_CLIENT_ID && 
                                 process.env.GOOGLE_CLIENT_SECRET && 
                                 process.env.GOOGLE_REFRESH_TOKEN;

    if (!isCalendarConfigured) {
      return NextResponse.json({
        success: true,
        available: true,
        message: 'Calendar not configured - assuming available',
      });
    }

    // Check availability with duration
    const durationMinutes = parseInt(duration, 10);
    const available = await checkAvailability(date, time, durationMinutes);

    return NextResponse.json({
      success: true,
      available,
      date,
      time,
      duration: durationMinutes,
    });

  } catch (error: any) {
    console.error('❌ Availability check error:', error);
    
    // Fail open - assume available if check fails
    return NextResponse.json({
      success: true,
      available: true,
      message: 'Availability check failed - assuming available',
      error: process.env.NODE_ENV === 'development' ? error?.message : undefined,
    });
  }
}
