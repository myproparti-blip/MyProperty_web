# EmailJS Setup Guide

Follow these steps to enable email functionality on the contact form:

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email

## Step 2: Create Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add Service**
3. Select **Gmail** (or your email provider)
4. Connect your email account (myproparti@gmail.com)
5. Name it something like `gmail_service`
6. Click **Create Service**
7. Copy your **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

```
From: {{from_name}} ({{from_email}})
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}
```

4. Save and copy your **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Public Key
1. Go to **Account** (top right)
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxx`)

## Step 5: Update ContactModal.jsx
Replace the placeholder values in `src/components/ContactModal.jsx`:

```javascript
// Line ~19
emailjs.init('YOUR_PUBLIC_KEY_HERE');  // Replace with your Public Key

// Line ~42
await emailjs.send(
  'YOUR_SERVICE_ID_HERE',      // Replace with Service ID
  'YOUR_TEMPLATE_ID_HERE',     // Replace with Template ID
  emailParams
);
```

## Example Values:
```javascript
emailjs.init('a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5');

await emailjs.send(
  'service_a1b2c3d4e',
  'template_x1y2z3a4b',
  emailParams
);
```

## Step 6: Test
1. Open your website
2. Fill out the contact form
3. Submit to receive an email at myproparti@gmail.com

## Troubleshooting

- **"Email service not configured"**: Check Service ID is correct
- **"Template not found"**: Check Template ID is correct
- **"Invalid public key"**: Check Public Key is correct
- **Gmail rejection**: Enable "Less secure app access" in Gmail settings or use App Passwords

## Free Tier Limits
- 200 emails/month (free plan)
- Upgrade if you need more

