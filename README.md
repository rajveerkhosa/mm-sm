# Lerdo Travel Plaza

Modern truck stop website built for Lerdo Travel Plaza. Uses Next.js 16, TypeScript, and Tailwind with Sinclair's signature green and red branding.

## What's Inside

Mobile-optimized site for truck drivers. Big buttons, high contrast, fast loading. Split fuel pricing for cars vs trucks. Sinclair green (#008751) and red (#E21F26) throughout.

**Pages:**
- Homepage - hero, fuel prices, amenities, parking info, FAQ
- Amenities - full service list
- Contact - form + phone/email
- Jobs - hiring page

**Tech:**
- Next.js 16 (App Router + Turbopack)
- TypeScript 5.9
- Tailwind CSS 3.4
- Outfit + Inter fonts
- Lucide icons

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

**Edit your info:**
- `/config/site.ts` - business name, phone, address, fuel prices
- `/app/layout.tsx` - change domain
- `/app/sitemap.ts` - update domain
- `/app/robots.ts` - update domain

## Updating Business Info

Everything lives in `/config/site.ts`:

```typescript
export const siteConfig = {
  name: "Lerdo Travel Plaza",
  phone: "(555) 123-4567",
  email: "info@lerdotravelplaza.com",

  address: {
    street: "1234 Highway 99",
    city: "Lerdo",
    state: "CA",
    zip: "93352",
  },

  // Update these regularly
  fuelPrices: {
    car: {
      unleaded: "$3.89",  // 87
      premium: "$4.19",   // 91+
    },
    truck: {
      diesel: "$4.29",    // ULSD
      def: "$3.49",
    },
  },

  amenities: [
    { name: "24/7 Access", available: true, icon: "clock" },
    { name: "High-Flow Diesel", available: true, icon: "fuel" },
    // 6 more...
  ],
};
```

Change fuel prices, amenities, hours, parking capacity, store info, FAQs - all in this one file.

## Colors

Sinclair brand palette in `/tailwind.config.ts`:

```typescript
colors: {
  sinclair: {
    green: {
      DEFAULT: "#008751",
      dark: "#006B40",
      light: "#00A766",
      // 50-900 shades
    },
    red: {
      DEFAULT: "#E21F26",
      dark: "#B71920",
      light: "#FF3942",
      // 50-900 shades
    },
  },
  navy: "#1a2332",
  cream: "#FFF8F0",
  sand: "#F5EDE3",
}
```

Custom shadows: `shadow-sinclair`, `shadow-sinclair-lg`, `shadow-red`

## File Structure

```
/app
  /api/contact      - contact form endpoint
  /amenities        - amenities page
  /contact          - contact page
  /jobs            - jobs page
  layout.tsx       - root layout + SEO
  page.tsx         - homepage
  globals.css      - global styles

/components
  /ui              - Button, Card, Badge, Section, Icon
  /features        - Hero, QuickInfo, AmenitiesGrid, FuelSection, etc.

/config
  site.ts          - ALL business info here

/lib
  utils.ts         - utilities

tailwind.config.ts - colors + theme
```

## Development

```bash
npm run dev    # development server
npm run build  # production build
npm start      # run production build
```

## Deployment

**Vercel (free):**
1. Push to GitHub
2. Import at vercel.com
3. Auto-deploys on push
4. Free SSL + CDN

**Also works on:**
- Netlify
- Cloudflare Pages
- DigitalOcean
- AWS Amplify
- Any Node.js host

## Adding Email to Contact Form

Form validates but doesn't send yet. To connect email:

1. Pick a service (Resend, SendGrid, etc.)
2. `npm install resend`
3. Add `.env.local`:
```
RESEND_API_KEY=your_key
```
4. Update `/app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'noreply@lerdotravelplaza.com',
  to: 'info@lerdotravelplaza.com',
  subject: `Contact: ${name}`,
  text: message,
});
```

## Adding Photos

Replace placeholders in `/components/features/PhotoGallery.tsx`:

1. Drop images in `/public/photos/`
2. Update the photos array
3. Use Next.js Image component for auto-optimization

## SEO Setup

Update these files with your actual domain:
- `/app/layout.tsx` - metadata + JSON-LD
- `/app/sitemap.ts`
- `/app/robots.ts`

Search for `lerdotravelplaza.com` and replace.

## Analytics

**Google Analytics:**

Add to `/app/layout.tsx` `<head>`:

```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXX');
  `
}} />
```

**Plausible (privacy-focused):**

```tsx
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## Design Notes

Built for truck drivers:
- Large touch targets
- High contrast (readable in cabs)
- Mobile-first
- Fast on slow connections
- Sinclair branding front and center

Glass morphism cards, gradient buttons, smooth animations. Outfit font for headings (bold, modern), Inter for body (clean, readable).

Fuel prices split by vehicle type - cars get green accent, trucks get red.

## Performance

Targets:
- Lighthouse: 95+
- First paint: < 1.5s
- Interactive: < 3s
- Mobile score: 100

## License

All rights reserved - Lerdo Travel Plaza
