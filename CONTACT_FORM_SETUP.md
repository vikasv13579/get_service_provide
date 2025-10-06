# Contact Form Setup Guide

Your contact form is now fully functional! By default, submissions are logged to the console. This guide will help you set up different methods to receive and store contact form submissions.

## 📋 Table of Contents
1. [Console Logging (Current Setup)](#1-console-logging-current-setup)
2. [Firebase Firestore Storage](#2-firebase-firestore-storage)
3. [Email Notifications](#3-email-notifications)
4. [Webhook Integration](#4-webhook-integration)

---

## 1. Console Logging (Current Setup) ✅

**Status:** Already working!

Contact form submissions are currently logged to your console. To view them:

1. Run your development server: `npm run dev`
2. Submit the contact form
3. Check your terminal for the submission details

**Pros:**
- No setup required
- Great for testing
- Zero cost

**Cons:**
- Not persistent (data lost on server restart)
- Not accessible remotely
- Not suitable for production

---

## 2. Firebase Firestore Storage 🔥

Store all contact submissions in Firebase Firestore for easy management.

### Setup Steps:

#### A. Update Firebase Config (if not already done)
Make sure your Firebase project has Firestore enabled.

#### B. Uncomment Firestore Code
Open `src/app/api/contact/route.js` and uncomment lines 57-62:

```javascript
const { getFirestore, collection, addDoc } = require('firebase/firestore');
const { db } = require('@/lib/firebase');

const docRef = await addDoc(collection(db, 'contact_submissions'), contactData);
console.log('✅ Saved to Firestore with ID:', docRef.id);
```

#### C. Update Firebase lib file
Add Firestore initialization to `src/lib/firebase.js`:

```javascript
import { getFirestore } from 'firebase/firestore';

// Add this after your existing auth export
export const db = getFirestore(app);
```

#### D. Install Firebase packages (if needed)
```bash
npm install firebase
```

#### E. View Submissions
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to Firestore Database
4. Look for the `contact_submissions` collection

**Pros:**
- ✅ Persistent storage
- ✅ Real-time updates
- ✅ Easy to query and filter
- ✅ Free tier available (50k reads/20k writes per day)
- ✅ Built-in security rules

**Cons:**
- Requires Firebase setup
- Need to check Firebase console regularly

---

## 3. Email Notifications 📧

Receive an email every time someone submits the contact form.

### Option A: Resend (Recommended - Easy Setup)

1. **Sign up for Resend:** https://resend.com (Free tier: 100 emails/day)

2. **Install Resend:**
```bash
npm install resend
```

3. **Add to `.env.local`:**
```env
RESEND_API_KEY=re_your_api_key_here
```

4. **Update API route** (`src/app/api/contact/route.js`):
```javascript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Add this after line 55 (in the try block)
await resend.emails.send({
  from: 'GeM Service <noreply@yourdomain.com>',
  to: 'your-email@example.com',
  subject: `New Contact Form: ${subject}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    <p><strong>Company:</strong> ${company || 'Not provided'}</p>
    <hr>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
    <hr>
    <p><small>Submitted: ${timestamp}</small></p>
    <p><small>User ID: ${userId}</small></p>
    <p><small>Authenticated: ${userAuthenticated ? 'Yes' : 'No'}</small></p>
  `,
});
```

### Option B: SendGrid

1. **Sign up for SendGrid:** https://sendgrid.com (Free tier: 100 emails/day)

2. **Install:**
```bash
npm install @sendgrid/mail
```

3. **Add to `.env.local`:**
```env
SENDGRID_API_KEY=SG.your_api_key_here
```

4. **Update API route** - uncomment lines 73-109 in `route.js`

### Option C: Nodemailer (Gmail, SMTP)

1. **Install:**
```bash
npm install nodemailer
```

2. **Add to `.env.local`:**
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

3. **Add to API route:**
```javascript
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: 'your-email@example.com',
  subject: `New Contact Form: ${subject}`,
  html: `... your email template ...`,
});
```

**Pros:**
- ✅ Instant notifications
- ✅ No need to check dashboard
- ✅ Can forward to multiple recipients
- ✅ Professional appearance

**Cons:**
- Requires email service setup
- May have sending limits on free tier

---

## 4. Webhook Integration 🔗

Send submissions to external services like Slack, Discord, Zapier, or Make.com.

### Example: Slack Webhook

1. **Create Slack Webhook:**
   - Go to https://api.slack.com/messaging/webhooks
   - Create incoming webhook
   - Copy webhook URL

2. **Update API route:**
```javascript
await fetch(process.env.SLACK_WEBHOOK_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    text: `🆕 New Contact Form Submission`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*New Contact Form*\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`,
        },
      },
    ],
  }),
});
```

3. **Add to `.env.local`:**
```env
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

---

## 🎯 Recommended Setup for Production

For the best experience, combine multiple methods:

1. **Firebase Firestore** - For persistent storage and record-keeping
2. **Email (Resend or SendGrid)** - For instant notifications
3. **Slack/Discord** (Optional) - For team notifications

This way you get:
- ✅ Instant email notifications
- ✅ All submissions stored in database
- ✅ Team visibility via Slack/Discord
- ✅ Backup and audit trail

---

## 📊 View Submission Data

When a form is submitted, you receive:

```javascript
{
  name: "John Doe",
  email: "john@example.com",
  phone: "+91 98765 43210",
  company: "ABC Corp",
  subject: "Question about GeM",
  message: "I need help with...",
  userId: "firebase-user-id" or "guest",
  userEmail: "user@email.com",
  userAuthenticated: true/false,
  timestamp: "2025-10-06T12:30:45.123Z",
  status: "new"
}
```

---

## 🔒 Security Considerations

1. **Rate Limiting:** Consider adding rate limiting to prevent spam
2. **Validation:** The API already validates required fields
3. **CAPTCHA:** Consider adding Google reCAPTCHA for public forms
4. **Environment Variables:** Never commit `.env.local` to git
5. **API Keys:** Keep all API keys secure and rotate them regularly

---

## 🚀 Quick Start (Recommended)

**For immediate setup, use Resend (easiest):**

```bash
# 1. Install
npm install resend

# 2. Add to .env.local
echo "RESEND_API_KEY=re_your_key_here" >> .env.local

# 3. Restart dev server
npm run dev
```

Then uncomment the Resend code in `src/app/api/contact/route.js`.

---

## 📞 Testing

1. Start your dev server: `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the form
4. Check:
   - Terminal console for logs
   - Your email inbox (if configured)
   - Firebase console (if configured)
   - Slack channel (if configured)

---

## Need Help?

- Check the console for error messages
- Verify environment variables are set correctly
- Ensure API keys are valid
- Check Firebase/Email service quotas
- Review the API route logs

---

## 📝 Notes

- The contact form auto-fills user data if they're logged in
- Guest users can also submit forms
- Form includes validation for all required fields
- Submissions include timestamp and authentication status
- Character counter shows message length (max 1000)

---

**Happy coding! 🎉**
