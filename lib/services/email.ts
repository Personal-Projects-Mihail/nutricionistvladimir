import nodemailer from 'nodemailer';

export interface BookingEmailData {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  consultationType: string;
  primaryGoal?: string;
  ageRange?: string;
  gender?: string;
  medicalConditions?: string;
  allergies?: string;
  lifestyleLevel?: string;
  message?: string;
  consentData: boolean;
  consentEmail: boolean;
}

/**
 * Creates a nodemailer transporter instance
 * Supports both Gmail and generic SMTP configurations
 */
export function createEmailTransporter() {
  const emailService = process.env.EMAIL_SERVICE || 'gmail';
  
  if (emailService === 'gmail') {
    // Gmail configuration using App Password
    // Remove spaces from app password if present (Gmail app passwords are 16 chars without spaces)
    const appPassword = process.env.EMAIL_APP_PASSWORD?.replace(/\s+/g, '') || '';
    
    if (!appPassword) {
      throw new Error('EMAIL_APP_PASSWORD is not set or is empty');
    }
    
    if (!process.env.EMAIL_USER) {
      throw new Error('EMAIL_USER is not set');
    }
    
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: appPassword, // Gmail App Password (spaces removed)
      },
    });
  } else {
    // Generic SMTP configuration
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }
}

/**
 * Generates HTML email content for the nutritionist
 */
function generateNutritionistEmailHTML(data: BookingEmailData): string {
  const consultationTypeLabels: Record<string, string> = {
    weightLoss: 'Weight Loss / Намалување на тежина',
    gutHealth: 'Gut Health / Здравје на цревата',
    hormonalBalance: 'Hormonal Balance / Хормонален баланс',
    sportsNutrition: 'Sports Nutrition / Спортска исхрана',
    familyNutrition: 'Family Nutrition / Семејна исхрана',
    chronicConditions: 'Chronic Conditions / Хронични состојби',
    general: 'General Consultation / Општа консултација',
  };

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Booking Request</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #A8DF8E;
      color: #1a1a1a;
      padding: 20px;
      border-radius: 8px 8px 0 0;
      margin: -30px -30px 30px -30px;
    }
    h1 {
      margin: 0;
      font-size: 24px;
    }
    .section {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #e0e0e0;
    }
    .section:last-child {
      border-bottom: none;
    }
    .label {
      font-weight: 600;
      color: #666;
      font-size: 12px;
      text-transform: uppercase;
      margin-bottom: 5px;
    }
    .value {
      font-size: 16px;
      color: #1a1a1a;
      margin-bottom: 15px;
    }
    .highlight {
      background-color: #fff9e6;
      padding: 15px;
      border-left: 4px solid #A8DF8E;
      margin: 20px 0;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
      font-size: 12px;
      color: #999;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🗓️ New Consultation Booking Request</h1>
    </div>

    <div class="highlight">
      <div class="label">Preferred Date & Time</div>
      <div class="value" style="font-size: 18px; font-weight: 600;">
        📅 ${data.preferredDate} at ${data.preferredTime}
      </div>
    </div>

    <div class="section">
      <h2 style="margin-top: 0;">Client Information</h2>
      
      <div class="label">Full Name</div>
      <div class="value">${data.fullName}</div>

      <div class="label">Email</div>
      <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>

      <div class="label">Phone</div>
      <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
    </div>

    <div class="section">
      <h2>Consultation Details</h2>
      
      <div class="label">Type of Consultation</div>
      <div class="value">${consultationTypeLabels[data.consultationType] || data.consultationType}</div>

      ${data.primaryGoal ? `
      <div class="label">Primary Goal</div>
      <div class="value">${data.primaryGoal}</div>
      ` : ''}
    </div>

    ${data.ageRange || data.gender || data.lifestyleLevel ? `
    <div class="section">
      <h2>Client Profile</h2>
      
      ${data.ageRange ? `
      <div class="label">Age Range</div>
      <div class="value">${data.ageRange}</div>
      ` : ''}

      ${data.gender ? `
      <div class="label">Gender</div>
      <div class="value">${data.gender}</div>
      ` : ''}

      ${data.lifestyleLevel ? `
      <div class="label">Activity Level</div>
      <div class="value">${data.lifestyleLevel}</div>
      ` : ''}
    </div>
    ` : ''}

    ${data.medicalConditions || data.allergies ? `
    <div class="section">
      <h2>Health Information</h2>
      
      ${data.medicalConditions ? `
      <div class="label">Medical Conditions</div>
      <div class="value">${data.medicalConditions}</div>
      ` : ''}

      ${data.allergies ? `
      <div class="label">Allergies / Food Intolerances</div>
      <div class="value">${data.allergies}</div>
      ` : ''}
    </div>
    ` : ''}

    ${data.message ? `
    <div class="section">
      <h2>Message from Client</h2>
      <div class="value">${data.message}</div>
    </div>
    ` : ''}

    <div class="section">
      <h2>Consent</h2>
      <div class="value">
        ✅ Data Processing: ${data.consentData ? 'Yes' : 'No'}<br>
        ${data.consentEmail ? '✅ Email Notifications: Yes' : '❌ Email Notifications: No'}
      </div>
    </div>

    <div class="footer">
      <p>This booking request was submitted via nutricionistvladimir.com</p>
      <p>Timestamp: ${new Date().toLocaleString('en-US', { timeZone: 'Europe/Skopje' })} (Europe/Skopje)</p>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Generates HTML email content for the client confirmation
 */
function generateClientEmailHTML(data: BookingEmailData): string {
  const consultationTypeLabels: Record<string, string> = {
    weightLoss: 'Weight Loss / Намалување на тежина',
    gutHealth: 'Gut Health / Здравје на цревата',
    hormonalBalance: 'Hormonal Balance / Хормонален баланс',
    sportsNutrition: 'Sports Nutrition / Спортска исхрана',
    familyNutrition: 'Family Nutrition / Семејна исхрана',
    chronicConditions: 'Chronic Conditions / Хронични состојби',
    general: 'General Consultation / Општа консултација',
  };

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Confirmation</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #A8DF8E;
      color: #1a1a1a;
      padding: 20px;
      border-radius: 8px 8px 0 0;
      margin: -30px -30px 30px -30px;
      text-align: center;
    }
    h1 {
      margin: 0;
      font-size: 24px;
    }
    .highlight {
      background-color: #f0fbe8;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      text-align: center;
    }
    .highlight-large {
      font-size: 20px;
      font-weight: 600;
      color: #2d5016;
      margin: 10px 0;
    }
    .content {
      margin: 20px 0;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
      font-size: 14px;
      color: #666;
    }
    .contact-info {
      background-color: #f9f9f9;
      padding: 15px;
      border-radius: 8px;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✅ Booking Request Received!</h1>
      <p style="margin: 10px 0 0 0;">Вашето барање е примено!</p>
    </div>

    <div class="content">
      <p>Dear ${data.fullName},</p>
      
      <p>Thank you for your interest in scheduling a consultation. We have received your booking request and will get back to you shortly to confirm your appointment.</p>
      
      <p style="font-style: italic;">Ви благодариме за вашиот интерес. Примено е вашето барање и наскоро ќе ве контактираме за да го потврдиме терминот.</p>
    </div>

    <div class="highlight">
      <div style="color: #666; font-size: 14px; margin-bottom: 5px;">REQUESTED DATE & TIME</div>
      <div class="highlight-large">📅 ${data.preferredDate}</div>
      <div class="highlight-large">🕐 ${data.preferredTime}</div>
    </div>

    <div class="content">
      <p><strong>Consultation Type:</strong> ${consultationTypeLabels[data.consultationType] || data.consultationType}</p>
    </div>

    <div class="contact-info">
      <p style="margin: 0 0 10px 0;"><strong>What happens next?</strong></p>
      <ul style="margin: 0; padding-left: 20px;">
        <li>We will review your request within 24 hours</li>
        <li>You will receive a confirmation email with appointment details</li>
        <li>If you have any questions, feel free to contact us</li>
      </ul>
    </div>

    <div class="footer">
      <p><strong>Contact Information:</strong></p>
      <p>
        📧 Email: nutricionistvladimir@gmail.com<br>
        🌐 Website: nutricionistvladimir.com
      </p>
      <p style="margin-top: 20px; font-size: 12px; color: #999;">
        If you did not make this request, please ignore this email.
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Sends booking notification email to the nutritionist
 */
export async function sendBookingNotificationToNutritionist(data: BookingEmailData): Promise<void> {
  try {
    const transporter = createEmailTransporter();
    
    const mailOptions = {
      from: `"Nutritionist Website" <${process.env.EMAIL_USER}>`,
      to: process.env.NUTRITIONIST_EMAIL || 'nutricionistvladimir@gmail.com',
      subject: `🗓️ New Booking Request - ${data.fullName} (${data.preferredDate})`,
      html: generateNutritionistEmailHTML(data),
      text: `
New Consultation Booking Request

Client: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}

Preferred Date: ${data.preferredDate}
Preferred Time: ${data.preferredTime}

Consultation Type: ${data.consultationType}
${data.primaryGoal ? `Primary Goal: ${data.primaryGoal}` : ''}
${data.medicalConditions ? `Medical Conditions: ${data.medicalConditions}` : ''}
${data.allergies ? `Allergies: ${data.allergies}` : ''}
${data.message ? `Message: ${data.message}` : ''}

Submitted: ${new Date().toLocaleString()}
      `.trim(),
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', result.messageId);
  } catch (error: any) {
    console.error('❌ Failed to send notification email:', error);
    // Re-throw with more context
    throw new Error(`Failed to send email to nutritionist: ${error.message || error}`);
  }
}

/**
 * Sends confirmation email to the client
 */
export async function sendBookingConfirmationToClient(data: BookingEmailData): Promise<void> {
  if (!data.consentEmail) {
    // Client opted out of email notifications
    return;
  }

  try {
    const transporter = createEmailTransporter();
    
    const mailOptions = {
      from: `"Vladimir - Nutritionist" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: 'Booking Request Received - Примено барање за термин',
      html: generateClientEmailHTML(data),
      text: `
Dear ${data.fullName},

Thank you for your interest in scheduling a consultation. We have received your booking request and will get back to you shortly to confirm your appointment.

Requested Date & Time: ${data.preferredDate} at ${data.preferredTime}
Consultation Type: ${data.consultationType}

What happens next?
- We will review your request within 24 hours
- You will receive a confirmation email with appointment details
- If you have any questions, feel free to contact us

Contact: nutricionistvladimir@gmail.com
Website: nutricionistvladimir.com

---

Ви благодариме за вашиот интерес. Примено е вашето барање и наскоро ќе ве контактираме за да го потврдиме терминот.
      `.trim(),
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Confirmation email sent successfully:', result.messageId);
  } catch (error: any) {
    console.error('❌ Failed to send confirmation email:', error);
    // Re-throw with more context
    throw new Error(`Failed to send confirmation email to client: ${error.message || error}`);
  }
}

/**
 * Interface for intake form data
 */
export interface IntakeFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  lang?: 'mk' | 'en';
}

/**
 * Generates HTML email content for intake form submission
 */
function generateIntakeFormEmailHTML(data: IntakeFormData): string {
  const fullName = `${data.firstName} ${data.lastName}`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #A8DF8E;
      color: #1a1a1a;
      padding: 20px;
      border-radius: 8px 8px 0 0;
      margin: -30px -30px 30px -30px;
    }
    h1 {
      margin: 0;
      font-size: 24px;
    }
    .section {
      margin-bottom: 20px;
    }
    .label {
      font-weight: 600;
      color: #666;
      font-size: 12px;
      text-transform: uppercase;
      margin-bottom: 5px;
    }
    .value {
      font-size: 16px;
      color: #1a1a1a;
      margin-bottom: 15px;
    }
    .highlight {
      background-color: #fff9e6;
      padding: 15px;
      border-left: 4px solid #A8DF8E;
      margin: 20px 0;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
      font-size: 12px;
      color: #999;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📋 New Contact Form Submission</h1>
    </div>

    <div class="highlight">
      <div class="label">Requested Date & Time / Датум и време</div>
      <div class="value" style="font-size: 18px; font-weight: 600;">
        📅 ${data.date} at ${data.time}
      </div>
    </div>

    <div class="section">
      <h2 style="margin-top: 0;">Contact Information</h2>

      <div class="label">First Name / Име</div>
      <div class="value">${data.firstName}</div>

      <div class="label">Last Name / Презиме</div>
      <div class="value">${data.lastName}</div>

      <div class="label">Email / Е-маил</div>
      <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>

      <div class="label">Phone / Телефон</div>
      <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
    </div>

    <div class="footer">
      <p>This form was submitted via nutricionistvladimir.com</p>
      <p>Timestamp: ${new Date().toLocaleString('en-US', { timeZone: 'Europe/Skopje' })} (Europe/Skopje)</p>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Sends intake form notification email to the nutritionist
 */
export async function sendIntakeFormEmail(data: IntakeFormData): Promise<void> {
  try {
    const transporter = createEmailTransporter();
    const fullName = `${data.firstName} ${data.lastName}`;

    const mailOptions = {
      from: `"Nutritionist Website" <${process.env.EMAIL_USER}>`,
      to: process.env.NUTRITIONIST_EMAIL || 'nutricionistvladimir@gmail.com',
      subject: `📋 New Contact - ${fullName} (${data.date})`,
      html: generateIntakeFormEmailHTML(data),
      text: `
New Contact Form Submission

Requested Date & Time: ${data.date} at ${data.time}

First Name: ${data.firstName}
Last Name: ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}

Submitted: ${new Date().toLocaleString()}
      `.trim(),
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Contact form email sent successfully:', result.messageId);
  } catch (error: any) {
    console.error('❌ Failed to send contact form email:', error);
    throw new Error(`Failed to send contact form email: ${error.message || error}`);
  }
}

/**
 * Generates HTML email content for intake form confirmation to client
 */
function generateIntakeFormConfirmationEmailHTML(data: IntakeFormData, lang: 'mk' | 'en'): string {
  const isMacedonian = lang === 'mk';
  const fullName = `${data.firstName} ${data.lastName}`;

  return `
<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${isMacedonian ? 'Примено барање' : 'Form Submission Received'}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #A8DF8E;
      color: #1a1a1a;
      padding: 20px;
      border-radius: 8px 8px 0 0;
      margin: -30px -30px 30px -30px;
      text-align: center;
    }
    h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      margin: 20px 0;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
      font-size: 14px;
      color: #666;
    }
    .contact-info {
      background-color: #f9f9f9;
      padding: 15px;
      border-radius: 8px;
      margin: 20px 0;
    }
    .highlight {
      background-color: #f0fbe8;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      text-align: center;
    }
    .highlight-large {
      font-size: 20px;
      font-weight: 600;
      color: #2d5016;
      margin: 10px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${isMacedonian ? '✅ Вашите информации се примени!' : '✅ Your Information Has Been Received!'}</h1>
    </div>

    <div class="content">
      <p>${isMacedonian ? `Почитуван/а ${fullName},` : `Dear ${fullName},`}</p>

      <p>${isMacedonian
        ? 'Благодариме! Вашите информации се примени. Ќе ве контактираме наскоро.'
        : 'Thank you! Your information has been received. We will contact you soon.'}</p>
    </div>

    <div class="highlight">
      <div style="color: #666; font-size: 14px; margin-bottom: 5px;">${isMacedonian ? 'ДАТУМ И ВРЕМЕ НА ТЕРМИНОТ' : 'REQUESTED DATE & TIME'}</div>
      <div class="highlight-large">📅 ${data.date}</div>
      <div class="highlight-large">🕐 ${data.time}</div>
    </div>

    <div class="contact-info">
      <p style="margin: 0 0 10px 0;"><strong>${isMacedonian ? 'Што се случува потоа?' : 'What happens next?'}</strong></p>
      <ul style="margin: 0; padding-left: 20px;">
        <li>${isMacedonian ? 'Ќе ве контактираме во рок од 24 часа' : 'We will contact you within 24 hours'}</li>
        <li>${isMacedonian ? 'Ќе разговараме за вашите цели и потреби' : 'We will discuss your goals and needs'}</li>
        <li>${isMacedonian ? 'Ако имате прашања, слободно контактирајте нè' : 'If you have any questions, feel free to contact us'}</li>
      </ul>
    </div>

    <div class="footer">
      <p><strong>${isMacedonian ? 'Контакт информации:' : 'Contact Information:'}</strong></p>
      <p>
        📧 Email: nutricionistvladimir@gmail.com<br>
        📱 ${isMacedonian ? 'Телефон:' : 'Phone:'} +389 75 453 434<br>
        🌐 Website: nutricionistvladimir.com
      </p>
      <p style="margin-top: 20px; font-size: 12px; color: #999;">
        ${isMacedonian ? 'Ако не го направивте ова барање, ве молиме занемарајте го овој емаил.' : 'If you did not make this request, please ignore this email.'}
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Sends confirmation email to the client for intake form submission
 */
export async function sendIntakeFormConfirmationToClient(data: IntakeFormData, lang: 'mk' | 'en' = 'en'): Promise<void> {
  try {
    const transporter = createEmailTransporter();
    const isMacedonian = lang === 'mk';
    const fullName = `${data.firstName} ${data.lastName}`;

    const mailOptions = {
      from: `"Vladimir - Nutritionist" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: isMacedonian
        ? 'Вашите информации се примени - Your Information Has Been Received'
        : 'Your Information Has Been Received - Вашите информации се примени',
      html: generateIntakeFormConfirmationEmailHTML(data, lang),
      text: `
${isMacedonian ? `Почитуван/а ${fullName},` : `Dear ${fullName},`}

${isMacedonian
  ? 'Благодариме! Вашите информации се примени. Ќе ве контактираме наскоро.'
  : 'Thank you! Your information has been received. We will contact you soon.'}

${isMacedonian ? 'Датум и време на терминот:' : 'Requested Date & Time:'} ${data.date} at ${data.time}

${isMacedonian ? 'Што се случува потоа?' : 'What happens next?'}
- ${isMacedonian ? 'Ќе ве контактираме во рок од 24 часа' : 'We will contact you within 24 hours'}
- ${isMacedonian ? 'Ќе разговараме за вашите цели и потреби' : 'We will discuss your goals and needs'}
- ${isMacedonian ? 'Ако имате прашања, слободно контактирајте нè' : 'If you have any questions, feel free to contact us'}

${isMacedonian ? 'Контакт информации:' : 'Contact Information:'}
Email: nutricionistvladimir@gmail.com
${isMacedonian ? 'Телефон:' : 'Phone:'} +389 75 453 434
Website: nutricionistvladimir.com
      `.trim(),
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Confirmation email sent successfully:', result.messageId);
  } catch (error: any) {
    console.error('❌ Failed to send confirmation email:', error);
    console.warn('⚠️ Continuing despite confirmation email failure');
  }
}
