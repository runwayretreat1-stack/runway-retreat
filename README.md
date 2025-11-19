# Runway Retreat — Next.js 14 + Tailwind + Framer Motion

A lightweight, production‑ready homestay website optimized for Core Web Vitals.

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (subtle, performant motion)
- next-seo (SEO defaults)

## Getting Started
1. Install deps: `npm install`
2. Dev: `npm run dev`
3. Lint: `npm run lint`
4. Type-check: `npm run type-check`
5. Build: `npm run build` then `npm start`

## Content Editing
- Rooms: `data/rooms.ts`
- Experiences: `data/experiences.ts`
- Reviews: `data/reviews.ts`

## Structure
- `app/(site)/layout.tsx` — global layout, SEO, fonts, navbar/footer
- `app/page.tsx` — Home (Hero, Amenities, Rooms, Videos, Reviews, CTA, Map)
- `app/rooms`, `app/gallery`, `app/experiences`, `app/contact`
- `components/*` — UI components
- `lib/seo.ts` — next-seo defaults
- `public/robots.txt`, `public/sitemap.xml` — basic SEO files

## Design System
- Colors: primary `#0F766E`, accent `#F59E0B`, ink `#0B0F10`
- Fonts: Playfair Display (headings), Inter (body) via `next/font`
- Radii: `rounded-2xl`, shadows: `shadow-lg`/`shadow-card`, subtle borders
- Section spacing: `.section` uses `py-12`/`py-20`

## Performance
- Route‑level code splitting (App Router)
- Image formats AVIF/WEBP; stable dimensions to avoid CLS
- Tailwind purge via `content` in `tailwind.config.js`
- Fonts with `display: swap` via `next/font`

## Accessibility
- Skip‑to‑content link
- Keyboard‑operable mobile menu and video modals
- Alt text on images; sufficient color contrast

## SEO & JSON‑LD
- Default SEO via `next-seo` in layout
- LodgingBusiness JSON‑LD on Home

## Deployment
- Vercel: `vercel.json` included
- Set canonical origin in `lib/seo.ts` and `metadataBase` in layout

## Notes
- Replace placeholder images in `public/images/*` and add video files under `public/assets/videos/*`.
- Update phone/WhatsApp numbers and email.
