# JPC Dubai Website

Modern Next.js corporate website for JPC Dubai pest control, cleaning, sanitization, water tank cleaning, AC duct cleaning, and commercial facility support services.

## Run locally

```bash
pnpm install
pnpm dev
```

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Environment variables

Copy `.env.example` to `.env.local` and fill production integrations as needed.

- `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_WHATSAPP`, `NEXT_PUBLIC_EMAIL`: public contact details.
- `NEXT_PUBLIC_GOOGLE_BUSINESS_URL`: external Google Business Profile / review link.
- `NEXT_PUBLIC_GOOGLE_MAP_EMBED_URL`: Google Maps iframe embed URL for the contact page. The supplied Jumeira Pest Control Service embed is included as the default.
- `NEXT_PUBLIC_LEAD_WEBHOOK_URL`: optional public Google Apps Script web app URL for static hosting. It can append form submissions to a Google Sheet or Excel workbook stored in Drive.
- `WORDPRESS_API_URL`: WordPress REST endpoint, usually `/wp-json/wp/v2/posts?_embed`.
- `LEAD_WEBHOOK_URL`: optional webhook that receives validated quote/contact leads from `/api/lead`.
- SMTP variables are reserved placeholders for replacing or extending webhook delivery with email.

## Link the form to a sheet in Google Drive

1. Create or open the Google Sheet in Drive.
2. Go to Extensions > Apps Script.
3. Add a `doPost(e)` handler that parses JSON and appends the values to your sheet.
4. Deploy it as a Web app with access allowed for form visitors.
5. Put the deployed URL in `NEXT_PUBLIC_LEAD_WEBHOOK_URL` for static hosting, or `LEAD_WEBHOOK_URL` for server-side delivery.

Example Apps Script:

```js
See `integrations/google-apps-script/Code.gs`.
```
