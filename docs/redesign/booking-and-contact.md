# Booking and contact setup

The rebuilt site only changes the Cloudflare Pages project. It does not change the WordPress website, its DNS, or MXroute mailboxes.

## ZIP routing

`src/lib/booking.ts` exports synchronous `classifyZip(zip)`. It validates a five-digit ZIP against `src/data/zip-centroids/part-*.json`, computes great-circle distance from the **91752 ZIP centroid (33.9938, −117.5236)** with the haversine formula, and uses a 45-mile inclusive boundary. All 48 contiguous states plus DC are eligible for shipping. Alaska, Hawaii, territories, and military/unknown-state addresses are not offered automated booking. An unrecognized ZIP returns `invalid`, never a guessed service area.

The table is split into three small source files for reliable transfer. The compact table contains 41,706 ZIP records. Coordinates are integer degrees multiplied by 10,000. Source: [GeoNames](https://www.geonames.org/) via [zauberware/postal-codes-json-xml-csv](https://github.com/zauberware/postal-codes-json-xml-csv), US, PR, GU, VI, MP and AS archives retrieved 20 October 2026; upstream README reports update 31 July 2026. [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Adaptation: removed place/county fields, normalized territory state codes, scaled coordinates, deduplicated by ZIP. Attribution is also displayed on the checker page.

The table is approximately 1.26 MB uncompressed / 361 KB gzip. The homepage should dynamically import `../lib/booking` when a visitor checks a ZIP rather than loading the table in the initial page bundle. ZIP centroids are estimates and do not replace venue-level delivery confirmation near the boundary.

The checker sends visitors to the existing Eventdeskly links only when they click Continue. It does not add date parameters because Eventdeskly support for them is unconfirmed. There is no dedicated 360 group URL yet: its Continue action opens the existing general business booking link and clearly asks the visitor to confirm 360 availability with the team.

## Contact endpoint

Cloudflare Pages discovers `functions/api/contact.ts` and serves it at `POST /api/contact`. The form sends JSON; ordinary browser form POSTs are also accepted. The endpoint validates origin, request size, name, email, optional phone/date/ZIP, message length, and a honeypot. Recipient and sender are controlled by server configuration, not user input. Visitor email is used only as Reply-To.

Set these in **Cloudflare Pages → photopartycity → Settings → Variables and Secrets**, separately for Preview and Production as needed:

| Name | Type | Value |
| --- | --- | --- |
| `RESEND_API_KEY` | Secret | An API key with permission to send email from your verified Resend domain |
| `CONTACT_FROM` | Variable | A sender verified in Resend, for example `Photo Party City <website@notify.photopartycity.com>` |
| `CONTACT_TO` | Variable | `hello@photopartycity.com` (also the server default) |

Verify the sending domain/subdomain in Resend using the DNS records it supplies. Preserve existing MXroute MX records. These settings do not move the business mailbox. Redeploy after adding the variables; never put an API key in source code, a public Astro variable, or chat.

Optional spam protection: create a Cloudflare Turnstile widget for the exact preview and production hostnames; set `PUBLIC_TURNSTILE_SITE_KEY` as a build variable and `TURNSTILE_SECRET_KEY` as a secret. Configure both together, then rebuild. When the secret is present the server requires a valid token with the same hostname as the request.

Without `RESEND_API_KEY` and `CONTACT_FROM`, the endpoint returns **503** and the UI offers the phone and email alternatives. It does not open a mail draft or claim that a message was sent. A success message appears only after Resend returns a successful response containing a message ID; this confirms provider acceptance, not inbox delivery.

For local endpoint testing use Wrangler Pages with the built `dist` and local `.dev.vars` (never commit it). Astro's static preview alone does not run Pages Functions. Tests can import `handleContactRequest(request, env, mockedFetch)` and inject a mock provider returning `new Response(JSON.stringify({id:'test'}))`. No production test mode exists and automated tests do not send real email. Check missing-config 503, cross-origin 403, oversized 413, invalid fields 400, provider rejection 502, and accepted-provider 200. A real inbox smoke test remains an administrator action after credentials are configured.

## Analytics

`src/scripts/tracking.ts` pushes `rental_conversion` for Eventdeskly, phone, and text link clicks to `window.dataLayer`, with `conversion_type`, `source`, and `booth_type`. `booking_area_result` reports `service_result` (`local`, `ship`, `unsupported`, or `invalid`) and source. Date, ZIP, name, email, phone input and message content are excluded. Connect these custom events to the existing consent-aware Google Tag Manager/Ads configuration; no unprovided Ads ID is invented.

## Validation completed

- Astro check: zero errors, warnings, or hints.
- ZIP scenarios: 91752 / 92501 / 91730 / 90012 local; 10001 / 00501 / 92101 shipped; 99501 / 96801 / 00601 / 96910 / 00801 unsupported; 00000 / malformed / overlength invalid. Verified zero center-to-center distance and impossible/past-date rejection.
- Endpoint with injected mock fetch: configuration 503, cross-origin 403, invalid input/honeypot 400, oversized body 413, provider rejection/network failure 502, accepted provider receipt 200. Invalid requests never reached the mock provider. No real email sent.
- Chromium at 1440px and 390px: URL prefills form and shows four local choices; distant ZIP shows only mail; unsupported and unknown ZIPs show truthful messages; Eventdeskly click and area-result data-layer events contain expected labels; contact mocked failure and success states work and restore the submit button; success clears fields; one main H1 and no horizontal overflow or runtime errors. Checker no-JavaScript booking fallback is visible at 390px.
- Screenshots: `check-your-date-1440.png`, `check-your-date-390.png`, `contact-us-1440.png`, `contact-us-390.png` in this directory. The embedded external Google map did not render in the isolated test environment; its directions link remains available.
