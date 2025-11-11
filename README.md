# Broad.AI - AI Consultancy Website

A modern, sleek, and minimalist website for Broad.AI - a tech-first AI consultancy specializing in intelligent automation solutions.

## Features

- **Modern Design**: Sleek, minimalist interface with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **SEO Optimized**: Server-side rendering and proper meta tags
- **Professional Pages**:
  - Landing page with services showcase
  - Who We Are page with team information
  - Contact Us page with form and contact details

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
broad-ai-website/
├── app/
│   ├── about/          # Who We Are page
│   ├── contact/        # Contact Us page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Landing page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation bar
│   └── Footer.tsx      # Footer component
├── public/
│   └── team/          # Team member photos
└── README.md
```

## Customization

### Adding Team Member Photo

Replace the placeholder image at `public/team/jamie-broadhurst.jpg` with the actual photo.

### Updating Contact Information

Update contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `app/about/page.tsx`

### Changing Colors

The website uses a blue/cyan color scheme. To change colors, update the Tailwind classes in the components:
- Primary: `from-blue-600 to-cyan-600`
- Hover: `from-blue-700 to-cyan-700`

### Adding a Logo

1. Add your logo to the `public` folder
2. Update the Navigation component in `components/Navigation.tsx`

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

## Form Submission

The contact form currently simulates submission. To connect it to a real backend:

1. Set up an API route in `app/api/contact/route.ts`
2. Update the form submission in `app/contact/page.tsx`
3. Consider using services like:
   - Vercel Email
   - SendGrid
   - Resend
   - Formspree

## License

© 2025 Broad.AI. All rights reserved.

## Contact

Jamie Broadhurst
- Email: jamie@broadhurst.com
- Phone: 07432 149 073
- LinkedIn: [Jamie Broadhurst](https://www.linkedin.com/in/jamie-broadhurst-77b18618b/)
