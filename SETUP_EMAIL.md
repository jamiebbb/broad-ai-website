# Setting Up Contact Form Emails

Your contact form is now configured to send real emails using [Resend](https://resend.com) - a modern, developer-friendly email API.

## Quick Setup (5 minutes)

### Step 1: Sign Up for Resend

1. Go to [resend.com](https://resend.com) and sign up (it's free!)
2. Free tier includes:
   - 100 emails/day
   - 3,000 emails/month
   - Perfect for a contact form!

### Step 2: Get Your API Key

1. Once logged in, go to [API Keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name like "Broad.AI Contact Form"
4. Copy the API key (starts with `re_...`)

### Step 3: Add API Key to Vercel

1. Go to your [Vercel Dashboard](https://vercel.com/jamies-projects-3f992c3a/broad-ai-website)
2. Click on your project → Settings → Environment Variables
3. Add a new variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Your API key from Step 2 (paste `re_...`)
   - **Environment:** Production, Preview, and Development
4. Click "Save"

### Step 4: Redeploy

After adding the environment variable, Vercel will automatically redeploy, or you can manually trigger:

```bash
vercel --prod
```

## Testing Locally

To test the contact form on your local machine:

1. Create a `.env.local` file in the project root:
   ```bash
   cp .env.local.example .env.local
   ```

2. Add your Resend API key to `.env.local`:
   ```
   RESEND_API_KEY=re_your_actual_key_here
   ```

3. Run the dev server:
   ```bash
   npm run dev
   ```

4. Test the form at `http://localhost:3000/contact`

## How It Works

When someone fills out your contact form:

1. ✅ Form data is validated
2. ✅ Sent to your API route (`/api/contact`)
3. ✅ Email is sent via Resend
4. ✅ Email arrives at **jamie@broadhurst.com**
5. ✅ Reply-to is set to the visitor's email for easy responses

## Email Format

You'll receive emails with:
- **Subject:** "New Contact Form Submission from [Name]"
- **From:** Broad.AI Contact Form
- **Reply-To:** The visitor's email (so you can just hit reply!)
- **Content:** All form details in a nicely formatted HTML email

## Using Your Own Domain (Optional)

By default, emails come from Resend's domain (`onboarding@resend.dev`). To use your own domain:

1. In Resend dashboard, go to [Domains](https://resend.com/domains)
2. Add your domain (e.g., `broad.ai`)
3. Add the DNS records they provide
4. Update `app/api/contact/route.ts` line 11:
   ```typescript
   from: 'Contact Form <contact@broad.ai>',
   ```

## Troubleshooting

### Emails not sending?

1. **Check API key:** Make sure `RESEND_API_KEY` is set in Vercel
2. **Check logs:** Go to Vercel → Your Project → Functions → Check logs
3. **Free tier limits:** Verify you haven't hit the 100 emails/day limit
4. **Spam folder:** Check your spam/junk folder

### Test with Resend Dashboard

You can test by sending a test email from [Resend Dashboard](https://resend.com/emails) to verify your setup.

## Alternative: FormSubmit (No Setup Required)

If you prefer not to use Resend, you can use FormSubmit as a quick alternative:

Update `app/contact/page.tsx`, change the `handleSubmit` function to:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  
  try {
    await fetch('https://formsubmit.co/jamie@broadhurst.com', {
      method: 'POST',
      body: formData,
    });
    setSubmitStatus("success");
    form.reset();
  } catch (error) {
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
```

**Note:** You'll need to verify your email the first time FormSubmit sends.

## Need Help?

If you have any issues setting this up, contact Resend support or check their [documentation](https://resend.com/docs).

