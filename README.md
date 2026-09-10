# ARGG Associates

Marketing website for ARGG Associates — a business advisory firm covering finance, taxation, business advisory, and business growth. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

See [SETUP.md](./SETUP.md) for wiring up the contact form (Resend) and regenerating cropped
images from the source assets in `docs/`.

## Structure

- `app/` — routes (Home, About, Services hub, 4 service pillar pages, Contact, Privacy Policy,
  Terms, the `/api/contact` route handler, and `sitemap.ts`/`robots.ts`).
- `components/` — reusable layout, UI, and section components.
- `lib/` — brand constants, service/content data, validation, and the Resend integration.
- `public/images/` — processed images (see `scripts/process-images.ts`).
- `docs/` — source brand assets (logo, marketing flyers) — the origin of all real company
  content used across the site.
