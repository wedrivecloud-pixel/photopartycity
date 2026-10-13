# Migration notes

Captured from https://photopartycity.com/ on October 13, 2026. The active managed environment reported revision 2; the apex domain returned HTTP 200 and www redirected to the apex and returned HTTP 200. Temporary upstream 503 failures were resolved by retrying. No proxy 403 blocked the initial domain checks.

## Coverage

All 267 URLs discovered through the site's sitemap and paginated public WordPress API are preserved: 39 pages, four posts, 188 products, and 36 archives. See `url-inventory.json` for exact paths, titles, descriptions, and canonicals. Extra blog-index and 404 routes are provided.

The migration retains every published service/city page; booth models and package descriptions; full-service, self-service, digital and 360 pricing; upgrades and exclusions; photos and product galleries; customer testimonials; FAQ text and source structured data; event-specific descriptions; office/pickup contact details; rental terms and refund copy; and the three rental inquiry forms plus contact form. Backend-generated shortcodes, form scripts, purchase buttons, login controls, nonce fields, and cart state are not presented as working static features.

The homepage features a new ScrewFast-based layout. A supplementary section contains the rest of the original homepage content and photographs. The catalog and category/tag listings use the original product taxonomy and prices. Original schema graphs, titles, descriptions, and canonical URLs are retained; a consistent LocalBusiness schema describes the office and service radius. The nonexistent WordPress query-search action is removed from website schema. Old plugin utility routes remain accessible with clear booking/contact alternatives and are excluded from indexing and the sitemap.

Photo Party City contact: 3827 Wacker Dr., Mira Loma, CA 91752; (909) 403-7143; hello@photopartycity.com. Office hours: Monday–Friday, 9 AM–5 PM Pacific. The original content also contains secondary email addresses; those are preserved in their original contexts. Service coverage is within 45 miles, confirmed for the exact venue address.

## Pricing retained

- Self-service / 24 hours: Starter $199 (Helio Sport), Showbiz $350 (Lumia M Pro), Hollywood $525 (Posh Pro).
- Full service: Silver $695 / three hours; Gold $895 / four hours; Platinum $1,095 / five hours. Additional time: $150/hour, subject to availability.
- Self-service upgrades: printer $65; 100-print media kit $65; custom template $25; physical backdrop $25. The inquiry form also lists additional 50 prints at $40 and additional 100 prints at $65; custom templates require at least 24 hours' lead time.
- 360 full service: $450 / two hours, $600 / three hours, $750 / four hours.
- 360 self-service: $300 / two hours, $400 / three hours, $550 / four hours; delivery, setup, and pickup excluded.
- Current WooCommerce catalog prices for Silver/Gold/Platinum are $595/$795/$995, differing from the main rental packages' $695/$895/$1,095. Both are retained; those product pages identify the discrepancy and direct visitors to the current rental rates and proposal. Older product descriptions mention 15-mile pricing and Las Vegas venues; the originals are retained, while current business coverage remains 45 miles around Mira Loma. These source inconsistencies need an owner decision before a live launch.

## Booking and backend limits

Original Eventdeskly business ID: `88aeb400-c578-40f7-8adc-96e170181c01`. Original service/group parameters on package links remain intact. External booking stays on Eventdeskly; this project does not emulate reservation confirmation.

Original inquiry fields, options, required fields, pickup/return instructions, and rental-policy acknowledgment wording are retained. The action now prepares an email through the visitor's email app instead of posting to WordPress Fluent Forms. No email or booking request was sent while verifying the site. A mailto handoff is not automatic form delivery, and visitors without a configured email app should call the team or use Eventdeskly.

WooCommerce payment processing, cart sessions, account login, order history, inventory changes, coupon handling, Fluent Forms delivery/notifications, and rental-plugin search/checkout do not migrate into a static Astro site. The original URLs remain, but these operations are replaced by explicit booking/contact alternatives. No private customer, order, or account data was accessed or copied. Retain a separate WordPress backend or integrate replacement services if these operations must continue.

## Images and allowlisting

742 images hosted on photopartycity.com were downloaded. Optimized derivatives are served locally, while original upload URLs remain available. The image manifest is `src/data/assets.json`.

Five external image references remain remote because their hosts are not allowlisted:

- `lh7-rt.googleusercontent.com`: two images embedded in source content.
- `s.w.org`: two WordPress emoji SVGs (checkmark and US flag).
- `www.sinfo-t.jp`: a manufacturer-hosted `pix.gif` reference in product content.

These are image hosts, not new dependencies for building. Allowlist them to download/self-host the remaining files. Links to Eventdeskly, ATA Photobooths, social services, and source article resources are also preserved as external links; clicking those does not require the build process to fetch their domains.

## SEO and deployment

No discovered source page/product/archive path changes, so no page-slug redirects are needed. `_redirects` provides 301 aliases from `/sitemap_index.xml` and `/sitemap.xml` to `/sitemap-index.xml`. Static hosts such as Netlify and Cloudflare Pages read this file; configure equivalent redirects on other hosts. Preserve the existing www → https://photopartycity.com canonical-host redirect in DNS/hosting configuration.

Deploy `dist/` with trailing-slash/index.html resolution and a 404 page. `_headers` supplies long-lived asset caching and standard headers on compatible static hosts. For other hosts, configure equivalent caching. Do not delete the copied `wp-content/uploads/` directory: original image URLs and source schema references rely on it. Domain/DNS/production hosting changes were not part of this GitHub handoff.

## Checks and remaining verification

Astro checks: zero errors, warnings, or hints. Production build: 269 generated pages. Route/SEO/schema/image checks: all 267 source routes pass. Internal link audit: zero missing local targets, including full-size gallery links. Image dimensions reserve layout space; hero loading is eager, other imagery is lazy; no external webfont or client animation framework is required. The design includes mobile layouts, keyboard focus states, skip navigation, semantic form labels, and reduced-motion support.

The homepage was subsequently rendered and visually reviewed in local Chromium at desktop (1440 px) and mobile (390 px) widths on October 13, 2026. Both views returned HTTP 200 with no horizontal overflow or broken visible images. The review identified and fixed CTA text contrast and a missing arrow glyph. Lighthouse measurements, email-app handling, and Eventdeskly's external booking flow remain unverified. No claim of a measured Lighthouse score or confirmed booking/form delivery is made.
