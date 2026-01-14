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
  
  // Create start date/time in Europe/Skopje timezone
  const startDateTime = new Date(year, month - 1, day, hours, minutes);
  
  // Default consultation duration: 60 minutes
  const endDateTime = new Date(startDateTime);
  endDateTime.setMinutes(endDateTime.getMinutes() + 60);
  
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
      dateTime: startDateTime.toISOString(),
      timeZone: 'Europe/Skopje',
    },
    end: {
      dateTime: endDateTime.toISOString(),
      timeZone: 'Europe/Skopje',
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
 * Checks if a time slot is available in the calendar
 * Returns true if the slot is free, false if there's a conflict
 */
export async function checkAvailability(date: string, time: string): Promise<boolean> {
  const calendar = createCalendarClient();
  
  // Parse the date and time
  const [year, month, day] = date.split('-').map(Number);
  const [hours, minutes] = time.split(':').map(Number);
  
  const requestedDateTime = new Date(year, month - 1, day, hours, minutes);
  const timeMin = new Date(requestedDateTime);
  timeMin.setMinutes(timeMin.getMinutes() - 30); // Check 30 min before
  
  const timeMax = new Date(requestedDateTime);
  timeMax.setMinutes(timeMax.getMinutes() + 90); // Check 90 min after (60 min consultation + 30 min buffer)

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
