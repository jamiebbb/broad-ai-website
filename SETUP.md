# Setup Instructions

## Quick Start

1. **Replace Jamie's Photo**
   
   Replace the placeholder file at `public/team/jamie-broadhurst.jpg` with Jamie's actual photo. The photo should be:
   - In JPG format
   - Optimized for web (ideally under 500KB)
   - Professional headshot
   - Dimensions: Recommended 800x800px or similar

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run Development Server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the website.

## Next Steps

### 1. Add Your Logo

Create a logo and update `components/Navigation.tsx`:

```typescript
<Link href="/" className="flex items-center space-x-2">
  <Image src="/logo.png" alt="Broad.AI" width={40} height={40} />
  <div className="text-2xl font-bold">Broad.AI</div>
</Link>
```

### 2. Choose Brand Colors

Currently using blue/cyan gradient. To change:
- Update Tailwind classes in components
- Common gradient: `from-[YOUR-COLOR] to-[YOUR-COLOR]`
- Example colors to try:
  - Purple/Pink: `from-purple-600 to-pink-600`
  - Green/Teal: `from-green-600 to-teal-600`
  - Orange/Red: `from-orange-600 to-red-600`

### 3. Connect Contact Form

The form currently simulates submission. To make it functional:

#### Option A: Use FormSubmit (Easy)

```typescript
<form action="https://formsubmit.co/jamie@broadhurst.com" method="POST">
  {/* form fields */}
</form>
```

#### Option B: Create API Route

Create `app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Send email using your preferred service
  // (SendGrid, Resend, etc.)
  
  return NextResponse.json({ success: true });
}
```

### 4. Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Deploy!

## Customization Tips

### Adding New Services

Edit `app/page.tsx` and add to the `services` array:

```typescript
{
  title: "Your Service",
  description: "Description here",
  icon: "🎯",
}
```

### Changing Team Information

Edit `app/about/page.tsx` to update:
- Mission statement
- Team member details
- Values section

### Adding More Team Members

Duplicate the team member card in `app/about/page.tsx` and modify the grid:

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Multiple team member cards */}
</div>
```

## Performance Tips

- Optimize images before uploading (use tools like TinyPNG)
- Keep the bundle size small
- Use lazy loading for images below the fold
- Consider adding a CDN for static assets

## Support

For questions or issues, contact:
- Email: jamie@broadhurst.com
- Phone: 07432 149 073

