# 📧📅 Booking System Setup Guide

This guide will walk you through setting up the complete booking system with **email notifications** and **Google Calendar integration** for nutricionistvladimir@gmail.com.

---

## 🎯 Overview

The booking system consists of two main components:

1. **Email Notifications** - Sends booking details to the nutritionist and confirmation to clients
2. **Google Calendar Integration** - Automatically adds appointments to Google Calendar

---

## ✅ Prerequisites

- Access to the Gmail account: `nutricionistvladimir@gmail.com`
- Access to Google Cloud Console (free)
- Basic command line knowledge

---

## 📧 Part 1: Email Configuration (Gmail)

### Step 1: Enable 2-Factor Authentication

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Sign in with `nutricionistvladimir@gmail.com`
3. Under "Signing in to Google", click on **2-Step Verification**
4. Follow the prompts to enable 2FA (you'll need your phone)

### Step 2: Generate App Password

1. Go back to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click on **2-Step Verification**
3. Scroll to the bottom and click on **App passwords**
4. You may need to sign in again
5. In the "Select app" dropdown, choose **Mail**
6. In the "Select device" dropdown, choose **Other (Custom name)**
7. Enter: `Nutritionist Website Booking`
8. Click **Generate**
9. **IMPORTANT**: Copy the 16-character password that appears
   - It will look like: `abcd efgh ijkl mnop` (with spaces)
   - **Save this securely** - you can't view it again!

---

## 📅 Part 2: Google Calendar API Setup

### Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with `nutricionistvladimir@gmail.com`
3. Click on the project dropdown at the top
4. Click **New Project**
5. Project name: `Nutritionist Booking System`
6. Click **Create**
7. Wait for the project to be created (notification will appear)

### Step 2: Enable Google Calendar API

1. Make sure your new project is selected (check dropdown at top)
2. Go to [Google Calendar API](https://console.cloud.google.com/apis/library/calendar-json.googleapis.com)
3. Click **Enable**
4. Wait for it to enable (you'll see a success message)

### Step 3: Configure OAuth Consent Screen

1. Go to [OAuth Consent Screen](https://console.cloud.google.com/apis/credentials/consent)
2. Select **External** (unless you have Google Workspace)
3. Click **Create**

**Fill in the form:**
- **App name**: `Nutritionist Booking System`
- **User support email**: `nutricionistvladimir@gmail.com`
- **App logo**: (optional, can skip)
- **Application home page**: `https://nutricionistvladimir.com`
- **Authorized domains**: `nutricionistvladimir.com`
- **Developer contact email**: `nutricionistvladimir@gmail.com`

4. Click **Save and Continue**

**Scopes page:**
5. Click **Add or Remove Scopes**
6. Find and check: `https://www.googleapis.com/auth/calendar.events`
7. Click **Update**
8. Click **Save and Continue**

**Test users page:**
9. Click **Add Users**
10. Enter: `nutricionistvladimir@gmail.com`
11. Click **Add**
12. Click **Save and Continue**

### Step 4: Create OAuth2 Credentials

1. Go to [Credentials](https://console.cloud.google.com/apis/credentials)
2. Click **Create Credentials** → **OAuth client ID**
3. Application type: **Web application**
4. Name: `Nutritionist Calendar Integration`

**Authorized redirect URIs:**
5. Click **Add URI**
6. Enter: `https://developers.google.com/oauthplayground`
7. Click **Create**

8. **IMPORTANT**: A popup will show your credentials
   - **Client ID**: Copy this (looks like: `123456789-abc123.apps.googleusercontent.com`)
   - **Client Secret**: Copy this (looks like: `GOCSPX-abc123xyz789`)
   - **Save both securely!**

9. Click **OK**

### Step 5: Get Refresh Token

1. Go to [OAuth 2.0 Playground](https://developers.google.com/oauthplayground)
2. Click the **⚙️ gear icon** (top right)
3. Check ✅ **Use your own OAuth credentials**
4. Enter your **OAuth Client ID** (from Step 4)
5. Enter your **OAuth Client secret** (from Step 4)
6. Click **Close**

**Authorize APIs:**
7. In the left panel, scroll down to **Calendar API v3**
8. Expand it and check: `https://www.googleapis.com/auth/calendar.events`
9. Click **Authorize APIs**
10. Select the `nutricionistvladimir@gmail.com` account
11. Click **Continue** (you may see a warning - click "Continue" or "Go to [app name]")
12. Click **Allow** to grant permissions

**Exchange authorization code:**
13. You'll be redirected back to the playground
14. Click **Exchange authorization code for tokens**
15. **IMPORTANT**: Copy the **Refresh token** that appears
    - It will look like: `1//0gABC123xyz...` (long string)
    - **Save this securely!**

---

## 🔧 Part 3: Configure Environment Variables

### Option A: Local Development (.env.local)

1. Navigate to your project directory
2. Copy the example file:
   ```bash
   cp .env.example .env.local
   ```

3. Edit `.env.local` with your values:

```bash
# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=nutricionistvladimir@gmail.com
EMAIL_APP_PASSWORD=abcd efgh ijkl mnop
NUTRITIONIST_EMAIL=nutricionistvladimir@gmail.com

# Google Calendar Configuration
GOOGLE_CLIENT_ID=123456789-abc123.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-abc123xyz789
GOOGLE_REFRESH_TOKEN=1//0gABC123xyz...
GOOGLE_CALENDAR_ID=primary

# Optional Features
CHECK_AVAILABILITY=false
```

4. Save the file

### Option B: Production (Vercel/Netlify)

#### For Vercel:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add each variable:
   - `EMAIL_SERVICE` = `gmail`
   - `EMAIL_USER` = `nutricionistvladimir@gmail.com`
   - `EMAIL_APP_PASSWORD` = `your_app_password`
   - `NUTRITIONIST_EMAIL` = `nutricionistvladimir@gmail.com`
   - `GOOGLE_CLIENT_ID` = `your_client_id`
   - `GOOGLE_CLIENT_SECRET` = `your_client_secret`
   - `GOOGLE_REFRESH_TOKEN` = `your_refresh_token`
   - `GOOGLE_CALENDAR_ID` = `primary`
   - `CHECK_AVAILABILITY` = `false`

5. Redeploy your application

#### For Netlify:

1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Select your site
3. Go to **Site settings** → **Environment variables**
4. Click **Add a variable** and add each one (same as Vercel list above)
5. Click **Save**
6. Trigger a new deploy

---

## 🧪 Testing the Setup

### Test 1: Check API Health

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open in browser: `http://localhost:3000/api/booking`

3. You should see:
   ```json
   {
     "status": "ok",
     "services": {
       "email": "configured",
       "calendar": "configured"
     },
     "timestamp": "2024-01-12T..."
   }
   ```

4. If you see "not configured", check your environment variables

### Test 2: Submit a Test Booking

1. Go to: `http://localhost:3000/booking` (or `/en/booking` for English)
2. Fill out the form with test data
3. Use your own email for testing
4. Submit the form

**Expected Results:**
- ✅ Success message appears on the form
- ✅ Email arrives at `nutricionistvladimir@gmail.com` with booking details
- ✅ Confirmation email arrives at the email you entered (if you checked the consent box)
- ✅ Event appears in Google Calendar (check calendar.google.com)

---

## 🔍 Troubleshooting

### Email not sending?

**Check 1: App Password**
- Make sure you copied the 16-character password correctly
- Remove spaces if you included them: `abcdefghijklmnop`
- Try generating a new App Password

**Check 2: 2FA Enabled**
- App Passwords only work if 2-Step Verification is enabled
- Check [Google Security](https://myaccount.google.com/security)

**Check 3: Environment Variables**
- Restart your development server after changing `.env.local`
- In production, redeploy after adding environment variables

**Check 4: Gmail Limits**
- Gmail has a sending limit (500 emails/day for personal accounts)
- Check your Gmail "Sent" folder

### Calendar event not created?

**Check 1: Refresh Token**
- Make sure you copied the entire refresh token
- It should start with `1//`

**Check 2: OAuth Consent**
- Make sure you added `nutricionistvladimir@gmail.com` as a test user
- The app must be in "Testing" mode or "Published"

**Check 3: Calendar API**
- Verify the Calendar API is enabled in Google Cloud Console
- Check [API Dashboard](https://console.cloud.google.com/apis/dashboard)

**Check 4: Permissions**
- The OAuth scope must include `https://www.googleapis.com/auth/calendar.events`

### Form shows error?

**Check browser console:**
1. Open browser DevTools (F12)
2. Go to Console tab
3. Submit the form
4. Look for error messages

**Check server logs:**
```bash
# In your terminal where npm run dev is running
# Look for error messages after submitting the form
```

---

## 📊 Monitoring & Logs

### Development

When running `npm run dev`, you'll see logs in the terminal:

```
✅ Notification email sent to nutritionist
✅ Confirmation email sent to client
✅ Calendar event created: https://calendar.google.com/...
```

### Production (Vercel)

1. Go to Vercel Dashboard → Your Project
2. Click on **Functions** tab
3. Find `/api/booking`
4. Click to view logs

---

## 🔒 Security Best Practices

1. **Never commit `.env.local`** - it's already in `.gitignore`
2. **Rotate credentials regularly** - generate new passwords every 6 months
3. **Limit OAuth scopes** - only use `calendar.events`, not full calendar access
4. **Monitor usage** - check Google Cloud Console for API usage
5. **Use separate accounts** - consider a dedicated Google Workspace account for business

---

## 📝 Maintenance

### Refresh Token Expiration

OAuth refresh tokens can expire if:
- Not used for 6 months
- User revokes access
- OAuth consent screen changes

**To regenerate:**
1. Go back to [OAuth Playground](https://developers.google.com/oauthplayground)
2. Follow Step 5 again (Get Refresh Token)
3. Update your environment variables with the new token

### Email Issues

If emails stop working:
- Check if App Password is still valid
- Check Gmail security settings
- Verify 2FA is still enabled

---

## 🆘 Need Help?

### Google Cloud Console
- [Documentation](https://cloud.google.com/docs)
- [Support](https://cloud.google.com/support)

### Gmail App Passwords
- [Support Article](https://support.google.com/accounts/answer/185833)

### Google Calendar API
- [API Reference](https://developers.google.com/calendar/api/v3/reference)
- [Quick Start Guide](https://developers.google.com/calendar/api/quickstart/nodejs)

---

## ✅ Checklist

Use this checklist to ensure everything is set up:

### Email Setup
- [ ] 2-Factor Authentication enabled on Gmail
- [ ] App Password generated
- [ ] App Password saved securely
- [ ] `EMAIL_USER` environment variable set
- [ ] `EMAIL_APP_PASSWORD` environment variable set
- [ ] Test email received successfully

### Calendar Setup
- [ ] Google Cloud project created
- [ ] Calendar API enabled
- [ ] OAuth consent screen configured
- [ ] Test user added (`nutricionistvladimir@gmail.com`)
- [ ] OAuth client credentials created
- [ ] Client ID saved securely
- [ ] Client Secret saved securely
- [ ] Refresh token obtained
- [ ] Refresh token saved securely
- [ ] All calendar environment variables set
- [ ] Test event created in calendar

### Testing
- [ ] API health check shows "configured" for both services
- [ ] Test booking submitted successfully
- [ ] Notification email received by nutritionist
- [ ] Confirmation email received by client
- [ ] Event appears in Google Calendar
- [ ] Production deployment configured with environment variables

---

## 🎉 Success!

Once you've completed all steps and passed the tests, your booking system is fully operational!

**What happens now when someone books:**
1. ✅ Client submits the booking form
2. ✅ Email notification sent to `nutricionistvladimir@gmail.com`
3. ✅ Confirmation email sent to client (if they opt-in)
4. ✅ Appointment automatically added to Google Calendar
5. ✅ Calendar reminders set (1 day before & 1 hour before)

---

**Last Updated:** January 12, 2026
**Version:** 1.0
