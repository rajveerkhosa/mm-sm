# Lerdo Travel Plaza - Project Memory

## Project Overview
Mobile-first website for Lerdo Travel Plaza, a truck stop in Lerdo, CA. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## Color Palette (Sinclair Brand)
- **Primary Green**: `#008751` (sinclair-green)
- **Secondary Red**: `#E21F26` (sinclair-red)
- **Background**: `#F8F9FA`
- **Charcoal**: `#2B2B2B`
- **Off White**: `#FAFAFA`

## Project Structure
```
/app                    - Next.js App Router pages
/components/ui          - Reusable UI components (Button, Card, Badge, etc.)
/components/features    - Feature-specific components
/lib                    - Utility functions
/config                 - Site configuration (EDIT HERE for business info)
/public                 - Static assets
```

## Key Files to Edit for Business Information
- **`/config/site.ts`** - All business info (name, address, phone, hours, amenities, FAQs)
- **`/tailwind.config.ts`** - Color palette
- **`/app/layout.tsx`** - Site metadata and SEO

## Pages
1. `/` - Homepage (Hero, Quick Info, Amenities, Parking, Fuel, Store, Gallery, FAQ)
2. `/amenities` - Full amenities list
3. `/contact` - Contact form with API route
4. `/jobs` - Now Hiring page

## Mobile-First Design Principles
- Large, thumb-friendly buttons
- High contrast for readability
- Critical info (phone, directions) above the fold
- Touch-optimized UI elements
- Fast loading times

## SEO Features
- JSON-LD structured data (LocalBusiness schema)
- OpenGraph metadata
- Sitemap.xml and robots.txt
- PWA support (manifest.json, service worker)

## Development Commands
```bash
npm run dev    # Start development server
npm run build  # Build for production
npm start      # Start production server
```

## Dependencies
- next: ^16.1.1
- react: ^19.2.3
- lucide-react: ^0.562.0
- tailwindcss: ^4.1.18
- typescript: ^5.9.3

## Last Updated
2025-12-26
