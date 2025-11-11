# Broad.AI Website - Deployment Guide

## 📋 Overview

Your modern, professional website is ready! This guide will help you get it deployed and live.

## 🚀 Quick Deploy to Vercel (Recommended - 5 minutes)

Vercel is the easiest and fastest way to deploy Next.js applications.

### Step 1: Prepare Your Repository

```bash
# Navigate to your project directory
cd /tmp/broad-ai-website

# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: Broad.AI website"

# Create a repository on GitHub and push
git remote add origin https://github.com/YOUR_USERNAME/broad-ai-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js - just click "Deploy"
5. Your site will be live in ~2 minutes at `your-project.vercel.app`

### Step 3: Add Custom Domain (Optional)

1. Buy a domain (e.g., `broad.ai` from Namecheap, GoDaddy, etc.)
2. In Vercel dashboard, go to Project Settings → Domains
3. Add your domain and follow DNS configuration instructions
4. Your site will be live at your custom domain!

## 🖼️ Adding Jamie's Photo

**Important:** You uploaded a photo during setup. To add it to the website:

```bash
# Copy Jamie's photo to the project
cp /path/to/jamie-photo.jpg /tmp/broad-ai-website/public/team/jamie-broadhurst.jpg

# Or use Finder/File Explorer to drag and drop the photo into:
# /tmp/broad-ai-website/public/team/jamie-broadhurst.jpg
```

The photo should be:
- **Format:** JPG or PNG
- **Size:** Under 500KB (use tools like [TinyPNG](https://tinypng.com) to compress)
- **Dimensions:** 800x800px recommended (square format works best)

After adding the photo, commit and push:

```bash
git add public/team/jamie-broadhurst.jpg
git commit -m "Add Jamie's photo"
git push
```

Vercel will automatically redeploy with the new photo!

## 🎨 Customizing Your Brand

### 1. Choose Your Colors

Currently using **blue/cyan gradient**. To change:

**Option A: Use a different blue shade**
- Navy: `from-blue-900 to-blue-700`
- Sky: `from-sky-500 to-cyan-500`

**Option B: Try a different color scheme**
- Purple/Pink: `from-purple-600 to-pink-600`
- Green/Emerald: `from-green-600 to-emerald-600`
- Orange/Amber: `from-orange-600 to-amber-500`

Find and replace in all files:
- `from-blue-600 to-cyan-600` → your new gradient
- `from-blue-700 to-cyan-700` → your new hover gradient

### 2. Add Your Logo

1. Save your logo as `public/logo.png` (or `.svg`)
2. Update `components/Navigation.tsx`:

```typescript
import Image from 'next/image';

<Link href="/" className="flex items-center space-x-2">
  <Image src="/logo.png" alt="Broad.AI" width={40} height={40} />
  <span className="text-2xl font-bold">Broad.AI</span>
</Link>
```

### 3. Update Favicon

Replace `public/favicon.ico` with your own favicon. Use [favicon.io](https://favicon.io) to generate one.

## 📧 Making the Contact Form Functional

### Option 1: FormSubmit (Easiest - No Backend Required)

In `app/contact/page.tsx`, replace the form submit function:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Create form data
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  
  // Submit to FormSubmit
  await fetch('https://formsubmit.co/jamie@broadhurst.com', {
    method: 'POST',
    body: formData,
  });
  
  setSubmitStatus("success");
  form.reset();
};
```

### Option 2: Resend (Modern Email API)

1. Sign up at [resend.com](https://resend.com)
2. Install: `npm install resend`
3. Create `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, company, message } = await request.json();

  try {
    await resend.emails.send({
      from: 'website@broad.ai',
      to: 'jamie@broadhurst.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
```

4. Add to `.env.local`:
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

## 📊 Adding Analytics (Optional)

### Google Analytics

1. Create a property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (e.g., `G-XXXXXXXXXX`)
3. Add to `app/layout.tsx` before `</head>`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

## 🔧 Advanced Customization

### Adding New Services

Edit `app/page.tsx` and add to the `services` array:

```typescript
{
  title: "Machine Learning Models",
  description: "Custom ML models trained on your data",
  icon: "🧠",
}
```

### Adding More Pages

```bash
# Create a new page
mkdir app/services
touch app/services/page.tsx

# Add to navigation in components/Navigation.tsx
<Link href="/services">Services</Link>
```

### Optimizing Images

Use [Next.js Image component](https://nextjs.org/docs/app/api-reference/components/image):

```typescript
import Image from 'next/image';

<Image 
  src="/your-image.jpg" 
  alt="Description"
  width={800}
  height={600}
  priority // for above-the-fold images
/>
```

## 🐛 Troubleshooting

### Build Errors

```bash
# Clean build cache
rm -rf .next
npm run build
```

### Image Not Showing

- Check file path is correct
- Ensure image is in `public/` directory
- Check image file name matches exactly (case-sensitive)
- Try rebuilding: `npm run dev`

### Contact Form Not Working

- Check console for errors (F12 in browser)
- Verify API endpoint is correct
- Check environment variables are set

## 📱 Testing

### Mobile Responsiveness

Test on different devices:
- Chrome DevTools (F12 → Device Toolbar)
- [BrowserStack](https://www.browserstack.com)
- Real devices if available

### Performance

Test with [PageSpeed Insights](https://pagespeed.web.dev/):
- Should score 90+ on Performance
- 100 on Accessibility
- 100 on Best Practices
- 100 on SEO

## 📞 Need Help?

Contact Jamie:
- Email: jamie@broadhurst.com
- Phone: 07432 149 073
- LinkedIn: [Jamie Broadhurst](https://www.linkedin.com/in/jamie-broadhurst-77b18618b/)

## ✅ Launch Checklist

- [ ] Photo added (`public/team/jamie-broadhurst.jpg`)
- [ ] Logo added (optional)
- [ ] Colors customized (optional)
- [ ] Contact form connected
- [ ] Content reviewed and updated
- [ ] Tested on mobile devices
- [ ] Tested on different browsers
- [ ] Analytics added (optional)
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active (automatic with Vercel)
- [ ] Site live and accessible

## 🎉 You're Done!

Your website is ready to showcase Broad.AI's capabilities. Share your URL and start attracting clients!

**Default Vercel URL:** `https://your-project.vercel.app`
**Custom Domain:** `https://broad.ai` (once configured)

Good luck! 🚀

