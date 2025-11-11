# 📧 Contact Form Email Setup

## Current Status: ⚠️ **Needs Configuration**

Your contact form is **ready to send emails**, but needs a quick 5-minute setup to activate!

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Sign Up for Resend (FREE)

1. Go to **[resend.com](https://resend.com)** and create a free account
2. Free tier includes **3,000 emails/month** - perfect for your contact form!

### Step 2: Get Your API Key

1. After signing in, go to **[API Keys](https://resend.com/api-keys)**
2. Click **"Create API Key"**
3. Name it: `Broad.AI Contact Form`
4. **Copy the key** (starts with `re_...`)

### Step 3: Add to Vercel (Your Hosting)

1. Go to **[Your Vercel Dashboard](https://vercel.com/jamies-projects-3f992c3a/broad-ai-website/settings/environment-variables)**
2. Click **Settings** → **Environment Variables**
3. Click **Add New**
4. Add:
   - **Key:** `RESEND_API_KEY`
   - **Value:** Paste your API key from Step 2
   - **Environments:** Select all (Production, Preview, Development)
5. Click **Save**

### Step 4: That's It! ✅

Vercel will automatically redeploy your site with email enabled.

---

## 📬 What Happens When Someone Submits the Form?

1. ✅ Form data is validated
2. ✅ Email is sent via Resend
3. ✅ **You receive email at: jamie@broadhurst.com**
4. ✅ Reply-to is set to visitor's email (just hit reply!)
5. ✅ Visitor sees success message

---

## 📧 Email Format You'll Receive

```
From: Broad.AI Contact Form <onboarding@resend.dev>
To: jamie@broadhurst.com
Reply-To: visitor@example.com
Subject: New Contact Form Submission from [Name]

------------------------------------
New Contact Form Submission

Name: John Doe
Email: john@example.com
Company: Acme Corp

Message:
I'm interested in discussing an AI 
automation project...
------------------------------------
```

---

## 🔧 Optional: Use Your Own Domain

Want emails to come from `contact@broad.ai` instead of Resend's domain?

1. In Resend dashboard → **[Domains](https://resend.com/domains)**
2. Click **Add Domain**
3. Add `broad.ai`
4. Add the DNS records they provide to your domain registrar
5. After verification, emails will come from your domain!

---

## 🧪 Testing

### Test Locally (Optional)

1. Create `.env.local` file in project root:
   ```
   RESEND_API_KEY=re_your_key_here
   ```

2. Run dev server:
   ```bash
   npm run dev
   ```

3. Visit `http://localhost:3000/contact` and test!

### Test Live

Once you've added the API key to Vercel:
1. Visit your live site: **https://broad-ai-website-81us5veyn-jamies-projects-3f992c3a.vercel.app/contact**
2. Fill out the form
3. Check your email at **jamie@broadhurst.com**

---

## ❓ Troubleshooting

### Form submits but no email arrives?

1. **Check Vercel logs:**
   - Go to Vercel Dashboard → Your Project → Functions
   - Look for errors in the logs

2. **Verify API key:**
   - Make sure `RESEND_API_KEY` is set in Vercel
   - Try creating a new API key if needed

3. **Check spam folder:**
   - First emails might land in spam

4. **Free tier limit:**
   - Verify you haven't hit 3,000 emails/month limit

### Still not working?

Contact me through the form or email **jamie@broadhurst.com** directly!

---

## 📊 Monitor Email Sending

Login to **[Resend Dashboard](https://resend.com/emails)** to see:
- All sent emails
- Delivery status
- Open rates (if enabled)
- Bounce handling

---

## 💰 Pricing (if you need more)

- **Free:** 3,000 emails/month
- **Pro ($20/month):** 50,000 emails/month
- **Business ($200/month):** 1M emails/month

For a contact form, free tier is more than enough!

---

## 🎉 Summary

**Current Status:** Form is built and ready - just needs API key!

**Action Required:** 
1. Sign up at resend.com
2. Get API key
3. Add to Vercel environment variables
4. Done! ✅

**Time Required:** ~5 minutes

**Cost:** FREE (for up to 3,000 emails/month)

---

Need help? All the code is set up correctly - you just need to add that one API key to Vercel! 🚀

