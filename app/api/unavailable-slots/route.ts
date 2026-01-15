import { NextRequest, NextResponse } from 'next/server';
import { getUnavailableTimeSlots } from '@/lib/services/calendar';

/**
 * GET /api/unavailable-slots?date=YYYY-MM-DD
 * Returns all unavailable time slots for a given date
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const date = searchParams.get('date');

    if (!date) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Date parameter is required' 
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

    // Check if calendar is configured
    const isCalendarConfigured = process.env.GOOGLE_CLIENT_ID && 
                                 process.env.GOOGLE_CLIENT_SECRET && 
                                 process.env.GOOGLE_REFRESH_TOKEN;

    if (!isCalendarConfigured) {
      return NextResponse.json({
        success: true,
        unavailableSlots: [],
        message: 'Calendar not configured - assuming all slots available',
      });
    }

    // Get unavailable slots
    const unavailableSlots = await getUnavailableTimeSlots(date);

    return NextResponse.json({
      success: true,
      unavailableSlots,
      date,
    });

  } catch (error: any) {
    console.error('❌ Unavailable slots error:', error);
    
    // Fail open - assume all slots available if check fails
    return NextResponse.json({
      success: true,
      unavailableSlots: [],
      message: 'Failed to get unavailable slots - assuming all available',
      error: process.env.NODE_ENV === 'development' ? error?.message : undefined,
    });
  }
}
