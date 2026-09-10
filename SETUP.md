# Setup

## Contact form (Resend)

The contact form on `/contact` sends email through [Resend](https://resend.com). Until it's
configured, the form still works but returns a clear error telling visitors to call or email
directly instead of failing silently.

1. Create a free account at https://resend.com.
2. Either verify `argg.in` as a sending domain (recommended — lets you send from
   `no-reply@argg.in` and improves deliverability), or use Resend's built-in
   `onboarding@resend.dev` sender short-term. Note: the onboarding sender can only deliver to the
   Resend account owner's own email until a domain is verified.
3. Generate an API key from the Resend dashboard.
4. Copy the env file and fill in the key:
   ```bash
   cp .env.local.example .env.local
   ```
   Then edit `.env.local` and set `RESEND_API_KEY`.
5. Restart the dev server (`npm run dev`) — Next.js only reads `.env.local` on process start.
6. Never commit `.env.local`.

## Image pipeline

Founder photo crops and the favicon/app icon are generated from the source files in `docs/` via:

```bash
npx tsx scripts/process-images.ts
```

Only re-run this if the source flyer images in `docs/` change, or if crop framing needs
adjustment (edit the percentage boxes in `scripts/process-images.ts`).

## Development

```bash
npm install
npm run dev
```

```bash
npm run build   # production build — also catches type/metadata errors dev tolerates
npm run start
```
