# Publish Checklist

## Fastest production option

Deploy this folder to Vercel, Netlify, Cloudflare Pages, or any host that supports Next.js.

Required production steps:

1. Copy `.env.example` to `.env.local` locally or add the same variables in your host dashboard.
2. Set `NEXT_PUBLIC_LEAD_WEBHOOK_URL` to your deployed Google Apps Script Web App URL if you want form submissions to go directly to a Google Sheet or Excel-compatible sheet in Drive.
3. Set `LEAD_WEBHOOK_URL` instead if you deploy with serverless support and prefer form submissions to pass through `/api/lead`.
4. Keep `NEXT_PUBLIC_GOOGLE_MAP_EMBED_URL` as supplied, or replace it with a new embed URL from Google Maps.

## Google Drive sheet connection

1. Create a Google Sheet in Drive named something like `JPC Website Leads`.
2. Open Extensions > Apps Script.
3. Paste `integrations/google-apps-script/Code.gs`.
4. Deploy > New deployment > Web app.
5. Set access to allow website visitors to submit the form.
6. Copy the Web App URL into `NEXT_PUBLIC_LEAD_WEBHOOK_URL`.

The form is already prepared to send the fields:

- Full name
- Phone
- Email
- Service
- Area
- Preferred date
- Preferred time
- Notes

## HTML, CSS, and JavaScript output

Next.js generates optimized HTML, CSS, and JavaScript during `pnpm build`. The project source is ready to publish, and the production build has been verified.
