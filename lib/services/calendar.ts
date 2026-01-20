import { google } from 'googleapis';
import type { BookingEmailData } from './email';

/**
 * Creates and configures Google Calendar API client
 */
export function createCalendarClient() {
  const OAuth2 = google.auth.OAuth2;
  
  const oauth2Client = new OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI || 'https://developers.google.com/oauthplayground'
  );

  // Set credentials using refresh token
  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  return google.calendar({ version: 'v3', auth: oauth2Client });
}

/**
 * Creates a consultation event description with all client details
 */
function createEventDescription(data: BookingEmailData): string {
  const consultationTypeLabels: Record<string, string> = {
    weightLoss: 'Weight Loss / Намалување на тежина',
    gutHealth: 'Gut Health / Здравје на цревата',
    hormonalBalance: 'Hormonal Balance / Хормонален баланс',
    sportsNutrition: 'Sports Nutrition / Спортска исхрана',
    familyNutrition: 'Family Nutrition / Семејна исхрана',
    chronicConditions: 'Chronic Conditions / Хронични состојби',
    general: 'General Consultation / Општа консултација',
  };

  let description = `CLIENT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}

CONSULTATION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Type: ${consultationTypeLabels[data.consultationType] || data.consultationType}
`;

  if (data.primaryGoal) {
    description += `Primary Goal: ${data.primaryGoal}\n`;
  }

  if (data.ageRange || data.gender || data.lifestyleLevel) {
    description += `\nCLIENT PROFILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
    if (data.ageRange) description += `Age Range: ${data.ageRange}\n`;
    if (data.gender) description += `Gender: ${data.gender}\n`;
    if (data.lifestyleLevel) description += `Activity Level: ${data.lifestyleLevel}\n`;
  }

  if (data.medicalConditions || data.allergies) {
    description += `\nHEALTH INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
    if (data.medicalConditions) description += `Medical Conditions: ${data.medicalConditions}\n`;
    if (data.allergies) description += `Allergies/Intolerances: ${data.allergies}\n`;
  }

  if (data.message) {
    description += `\nCLIENT MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.message}\n`;
  }

  description += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Booking submitted: ${new Date().toLocaleString('en-US', { timeZone: 'Europe/Skopje' })}
Via: nutricionistvladimir.com`;

  return description;
}

/**
 * Adds a consultation booking to Google Calendar
 */
export async function addBookingToCalendar(data: BookingEmailData): Promise<string> {
  const calendar = createCalendarClient();
  
  // Parse the date and time
  const [year, month, day] = data.preferredDate.split('-').map(Number);
  const [hours, minutes] = data.preferredTime.split(':').map(Number);
  
  // Format start date/time as ISO string in Europe/Skopje timezone
  const startDateTimeStr = formatDateTimeForTimezone(year, month, day, hours, minutes);
  
  // Default consultation duration: 60 minutes
  const startDate = new Date(year, month - 1, day, hours, minutes);
  const endDate = new Date(startDate);
  endDate.setMinutes(endDate.getMinutes() + 60);
  
  // Format end date/time
  const endDateTimeStr = formatDateTimeForTimezone(
    endDate.getFullYear(),
    endDate.getMonth() + 1,
    endDate.getDate(),
    endDate.getHours(),
    endDate.getMinutes()
  );
  
  const consultationTypeLabels: Record<string, string> = {
    weightLoss: 'Weight Loss',
    gutHealth: 'Gut Health',
    hormonalBalance: 'Hormonal Balance',
    sportsNutrition: 'Sports Nutrition',
    familyNutrition: 'Family Nutrition',
    chronicConditions: 'Chronic Conditions',
    general: 'General Consultation',
  };

  const event = {
    summary: `${consultationTypeLabels[data.consultationType] || data.consultationType} - ${data.fullName}`,
    location: 'To be confirmed / Ќе биде потврдено',
    description: createEventDescription(data),
    start: {
      dateTime: startDateTimeStr,
      // Removed timeZone - using UTC with Z suffix instead
    },
    end: {
      dateTime: endDateTimeStr,
      // Removed timeZone - using UTC with Z suffix instead
    },
    attendees: [
      { email: data.email, displayName: data.fullName },
    ],
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 }, // 1 day before
        { method: 'popup', minutes: 60 },      // 1 hour before
      ],
    },
    colorId: '10', // Green color for nutrition consultations
    status: 'tentative', // Mark as tentative until confirmed
  };

  try {
    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
      requestBody: event,
      sendUpdates: 'none', // Don't send automatic Google invites (we're sending custom emails)
    });

    return response.data.htmlLink || '';
  } catch (error) {
    console.error('Error adding event to calendar:', error);
    throw new Error('Failed to add event to Google Calendar');
  }
}

/**
 * Gets all unavailable time slots for a given date
 * Returns an array of time strings (HH:MM) that are blocked
 */
export async function getUnavailableTimeSlots(date: string): Promise<string[]> {
  const calendar = createCalendarClient();
  
  // Parse the date
  const [year, month, day] = date.split('-').map(Number);
  
  // Get all events for the entire day (00:00 to 23:59)
  const dayStart = new Date(year, month - 1, day, 0, 0, 0);
  const dayEnd = new Date(year, month - 1, day, 23, 59, 59);

  try {
    const response = await calendar.events.list({
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
      timeMin: dayStart.toISOString(),
      timeMax: dayEnd.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

    const unavailableSlots = new Set<string>();
    const events = response.data.items || [];

    // For each event, mark all 15-minute slots that overlap with it as unavailable
    for (const event of events) {
      if (!event.start?.dateTime || !event.end?.dateTime) continue;

      const eventStart = new Date(event.start.dateTime);
      const eventEnd = new Date(event.end.dateTime);

      // Generate all 15-minute slots from 09:00 to 17:00
      for (let hour = 9; hour <= 17; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
          if (hour === 17 && minute > 0) break; // Stop at 17:00

          const slotStart = new Date(year, month - 1, day, hour, minute);
          const slotEnd = new Date(slotStart);
          slotEnd.setMinutes(slotEnd.getMinutes() + 15);

          // Check if this 15-minute slot overlaps with the event
          // A slot is unavailable if it starts before the event ends AND ends after the event starts
          if (slotStart < eventEnd && slotEnd > eventStart) {
            const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            unavailableSlots.add(timeString);
          }
        }
      }
    }

    return Array.from(unavailableSlots).sort();
  } catch (error) {
    console.error('Error getting unavailable time slots:', error);
    // In case of error, return empty array (fail open - assume all slots available)
    return [];
  }
}

/**
 * Checks if a time slot is available in the calendar
 * Returns true if the slot is free, false if there's a conflict
 */
export async function checkAvailability(date: string, time: string, duration: number = 60): Promise<boolean> {
  const calendar = createCalendarClient();
  
  // Parse the date and time
  const [year, month, day] = date.split('-').map(Number);
  const [hours, minutes] = time.split(':').map(Number);
  
  const requestedDateTime = new Date(year, month - 1, day, hours, minutes);
  const timeMin = new Date(requestedDateTime);
  timeMin.setMinutes(timeMin.getMinutes() - 15); // Check 15 min before
  
  const timeMax = new Date(requestedDateTime);
  timeMax.setMinutes(timeMax.getMinutes() + duration + 15); // Check duration + 15 min buffer

  try {
    const response = await calendar.events.list({
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
      timeMin: timeMin.toISOString(),
      timeMax: timeMax.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

    // If there are any events in this time window, the slot is not available
    return (response.data.items?.length || 0) === 0;
  } catch (error) {
    console.error('Error checking calendar availability:', error);
    // In case of error, assume slot is available (fail open)
    return true;
  }
}


/**
 * Formats a date and time as an ISO string in UTC that represents
 * the given local time in Europe/Skopje timezone
 * 
 * This ensures the time shown in Google Calendar matches the selected time
 * by converting the Skopje local time to UTC
 */
function formatDateTimeForTimezone(
  year: number,
  month: number,
  day: number,
  hours: number,
  minutes: number
): string {
  // We need to find what UTC time corresponds to this local time in Skopje
  // Method: Create a date string, parse it as if it's in Skopje, get UTC equivalent
  
  // Create a date string in ISO format (this will be parsed as local server time)
  // But we need it parsed as Skopje time. We'll use a workaround:
  // Create the date in UTC, then adjust based on Skopje's offset
  
  // Step 1: Create a date representing this time in UTC
  const utcDate = new Date(Date.UTC(year, month - 1, day, hours, minutes, 0));
  
  // Step 2: Get what this UTC time appears as in Skopje timezone
  const skopjeTimeStr = utcDate.toLocaleString('en-US', {
    timeZone: 'Europe/Skopje',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  
  // Parse the Skopje time (format: "MM/DD/YYYY, HH:MM")
  const [datePart, timePart] = skopjeTimeStr.split(', ');
  const [skopjeMonth, skopjeDay, skopjeYear] = datePart.split('/');
  const [skopjeHour, skopjeMinute] = timePart.split(':');
  
  // Step 3: Calculate the offset
  // If UTC 14:00 = Skopje 15:00, then Skopje is UTC+1
  // So if we want Skopje 14:00, we need UTC 13:00
  const skopjeHourNum = parseInt(skopjeHour);
  const offsetHours = skopjeHourNum - hours;
  
  // Step 4: Calculate the UTC time that corresponds to the desired Skopje local time
  // If we want Skopje 14:00 and offset is +1, then UTC = 14:00 - 1 = 13:00
  const utcHours = hours - offsetHours;
  const utcDateCorrected = new Date(Date.UTC(year, month - 1, day, utcHours, minutes, 0));
  
  // Step 5: Format as UTC ISO string (with Z suffix)
  const monthStr = (month).toString().padStart(2, '0');
  const dayStr = day.toString().padStart(2, '0');
  const hoursStr = utcHours.toString().padStart(2, '0');
  const minutesStr = minutes.toString().padStart(2, '0');
  
  return `${year}-${monthStr}-${dayStr}T${hoursStr}:${minutesStr}:00Z`;
}

