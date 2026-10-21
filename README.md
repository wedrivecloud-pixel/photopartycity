# Photo Party City

Astro website deployed to Cloudflare Pages. The rental-site redesign is on a review branch; production/main remains unchanged until launch approval. The original WordPress site and MXroute mailbox are separate.

Use Node.js 24:

```sh
npm ci
ASTRO_TELEMETRY_DISABLED=1 npm run build
npm test
npm run dev
```

The redesigned rental site uses `RentalLayout.astro`, `redesign.css`, shared components in `src/components/redesign/`, and city/event/info/blog templates. Central rental data is in `src/data/rentals.ts`; city data is in `src/data/cities.ts`. The supplied design's fonts are self-hosted with licenses.

The shop, product catalog and legacy backend placeholders continue through the existing `Layout.astro`, `global.css` and catch-all route. The 188 product prices, source links, metadata and schema are protected by verification.

The build generates 263 pages, including 31 redesigned rental routes. Cloudflare `_redirects` retires duplicate/form/archive URLs; `/check-your-date/` uses ZIP centroids to distinguish local, shipped and unsupported locations. Static pages remain static; `_routes.json` runs Pages Functions only for `/api/*`.

The contact form posts to `functions/api/contact.ts`. Resend credentials and a verified sender must be configured before email delivery works. The handler reports unavailable delivery without configuration and never pretends to send email. Tests use mocked providers and send no email. See the setup guide below.

Read [redesign implementation, screenshots and launch checklist](docs/redesign/README.md) and [booking/email setup](docs/redesign/booking-and-contact.md).

Historical migration notes and the original URL inventory remain in `docs/MIGRATION.md` and `docs/url-inventory.json`. The original site was migrated on 13 October 2026 using ScrewFast; upstream MIT attribution remains in `LICENSE`.
