import { google } from 'googleapis';
import type { BookingEmailData, IntakeFormData } from './email';

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
 * Creates an event description for intake form data
 */
function createIntakeEventDescription(data: IntakeFormData): string {
  const goalLabels: Record<string, string> = {
    weightLoss: 'Weight Loss / Намалување на телесна тежина',
    weightGain: 'Weight Gain / Зголемување на телесна тежина',
    muscleGain: 'Muscle Mass Increase / Зголемување мускулна маса',
    weightMaintenance: 'Weight Maintenance / Одржување на телесна тежина',
    healthImprovement: 'Health Improvement / Подобрување на здравје',
    nutritionForCondition: 'Nutrition for Illness/Condition / Исхрана при болест/состојба',
    other: 'Other / Друго',
  };

  let description = `CLIENT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${data.fullName}
Age: ${data.age}
Height: ${data.height} cm
Weight: ${data.currentWeight} kg
Gender: ${data.gender}
Contact: ${data.contact}

MAIN GOALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.mainGoals.map(goal => goalLabels[goal] || goal).join(', ')}
${data.otherGoal ? `Other Goal: ${data.otherGoal}` : ''}
`;

  if (data.healthConditions || data.medications) {
    description += `\nHEALTH INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
    if (data.healthConditions) description += `Medical Conditions: ${data.healthConditions}\n`;
    if (data.medications) description += `Medications: ${data.medications}\n`;
  }

  if (data.mealsPerDay || data.eatingTime || data.foodRestrictions || data.preferredFoods) {
    description += `\nNUTRITION HABITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
    if (data.mealsPerDay) description += `Meals Per Day: ${data.mealsPerDay === 'other' ? data.mealsPerDayOther : data.mealsPerDay}\n`;
    if (data.eatingTime) description += `Eating Time: ${data.eatingTime}\n`;
    if (data.foodRestrictions) description += `Food Restrictions: ${data.foodRestrictions}\n`;
    if (data.preferredFoods) description += `Preferred Foods: ${data.preferredFoods}\n`;
  }

  if (data.physicalActivity || data.waterIntake) {
    description += `\nLIFESTYLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
    if (data.physicalActivity) description += `Physical Activity: ${data.physicalActivity === 'other' ? data.physicalActivityOther : data.physicalActivity}\n`;
    if (data.waterIntake) description += `Water Intake: ${data.waterIntake === 'other' ? data.waterIntakeOther : data.waterIntake}\n`;
  }

  if (data.startDate || data.hasLabResults) {
    description += `\nADDITIONAL INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
    if (data.startDate) description += `Preferred Start Date: ${data.startDate}\n`;
    if (data.hasLabResults) description += `Has Lab Results: ${data.hasLabResults}\n`;
  }

  description += `\nAPPOINTMENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: ${data.preferredDate}
Time: ${data.preferredTime}
Duration: ${data.appointmentDuration} minutes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Intake form submitted: ${new Date().toLocaleString('en-US', { timeZone: 'Europe/Skopje' })}
Via: nutricionistvladimir.com`;

  return description;
}

/**
 * Adds an intake form consultation to Google Calendar
 */
export async function addIntakeFormToCalendar(data: IntakeFormData): Promise<string> {
  const calendar = createCalendarClient();
  
  // Parse the date and time
  const [year, month, day] = data.preferredDate.split('-').map(Number);
  const [hours, minutes] = data.preferredTime.split(':').map(Number);
  
  // Create start date/time in Europe/Skopje timezone
  const startDateTime = new Date(year, month - 1, day, hours, minutes);
  
  // Use selected appointment duration (default to 30 minutes if not provided)
  const duration = parseInt(data.appointmentDuration || '30', 10);
  const endDateTime = new Date(startDateTime);
  endDateTime.setMinutes(endDateTime.getMinutes() + duration);

  // Extract email from contact if it's an email, otherwise use contact as display name
  const contactEmail = data.contact.includes('@') ? data.contact : undefined;
  const contactName = contactEmail ? data.fullName : data.contact;

  const event = {
    summary: `Consultation (${duration} min) - ${data.fullName}`,
    location: 'To be confirmed / Ќе биде потврдено',
    description: createIntakeEventDescription(data),
    start: {
      dateTime: startDateTime.toISOString(),
      timeZone: 'Europe/Skopje',
    },
    end: {
      dateTime: endDateTime.toISOString(),
      timeZone: 'Europe/Skopje',
    },
    attendees: contactEmail ? [
      { email: contactEmail, displayName: data.fullName },
    ] : [],
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
    console.error('Error adding intake form event to calendar:', error);
    throw new Error('Failed to add event to Google Calendar');
  }
}
