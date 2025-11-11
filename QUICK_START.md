# 🚀 Quick Start Guide

## Get Your Website Running in 3 Minutes

### Step 1: Install Dependencies

```bash
cd ~/Desktop/Coding/broad-ai-website
npm install
```

This will install all required packages (~30 seconds).

### Step 2: Add Jamie's Photo

Replace the placeholder file with Jamie's actual photo:

```bash
# Method 1: Copy from your downloads or desktop
cp ~/Desktop/jamie-photo.jpg public/team/jamie-broadhurst.jpg

# Method 2: Or use Finder to drag the photo into:
# public/team/jamie-broadhurst.jpg
```

**Photo Requirements:**
- Format: JPG or PNG
- Size: Under 500KB recommended
- Dimensions: Square format (800x800px) works best

### Step 3: Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**That's it!** Your website is now running locally. 🎉

---

## What You'll See

1. **Landing Page** - Hero section with animated background and services showcase
2. **Who We Are** - Team section featuring Jamie, mission statement, and values
3. **Contact Us** - Contact form and information

---

## Next Steps

### 🎨 Customize Your Website

1. **Choose Brand Colors** - See `SETUP.md` for color options
2. **Add a Logo** - Instructions in `DEPLOYMENT_GUIDE.md`
3. **Update Content** - Edit text in `app/` directory files

### 🌐 Deploy to Production

**Easiest Method: Vercel (Free)**

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Click Deploy
5. Done! Site is live at `your-project.vercel.app`

**Full deployment instructions:** See `DEPLOYMENT_GUIDE.md`

### 📧 Connect Contact Form

The contact form currently simulates submission. To make it functional:

**Quick Option (5 min):** Use FormSubmit
**Better Option (15 min):** Set up Resend API

**Instructions:** See `DEPLOYMENT_GUIDE.md` section "Making the Contact Form Functional"

---

## File Structure

```
broad-ai-website/
├── app/
│   ├── page.tsx          # Landing page
│   ├── about/page.tsx    # Who We Are page
│   ├── contact/page.tsx  # Contact page
│   └── layout.tsx        # Site layout & navigation
├── components/
│   ├── Navigation.tsx    # Navigation bar
│   └── Footer.tsx        # Footer
├── public/
│   └── team/            # Team photos go here
└── package.json         # Dependencies
```

---

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Check for errors
npm run lint
```

---

## Troubleshooting

### "Cannot find module" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
```bash
# Kill the process or use a different port
npm run dev -- -p 3001
```

### Changes not showing
```bash
# Restart the dev server
Ctrl+C (to stop)
npm run dev
```

---

## Need Help?

📧 Email: jamie@broadhurst.com
📱 Phone: 07432 149 073
💼 LinkedIn: [Jamie Broadhurst](https://www.linkedin.com/in/jamie-broadhurst-77b18618b/)

---

## Documentation

- **SETUP.md** - Detailed setup and customization instructions
- **DEPLOYMENT_GUIDE.md** - Complete deployment walkthrough
- **README.md** - Technical documentation

---

**Enjoy your new website!** 🎉

