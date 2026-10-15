# Photo Booth By Mail

Recreated `/photo-booth-by-mail/` in the Astro project for Cloudflare Pages, using the public WordPress page as the content reference on 2026-10-15. No WordPress changes or form submissions were made.

The page keeps the $275 rental price, original delivery/return/cancellation policies, $40 hotspot option, all five option lists, and six FAQs. Booking uses the source page's Booth By Mail Eventdeskly destination. The page is linked from the Experiences menu and footer.

The inquiry form prepares a draft addressed to `hello@photopartycity.com`, consistent with the site's existing forms. It clearly explains that the visitor must send the draft and that an inquiry does not confirm a reservation. Its native mailto action and contact details remain available without JavaScript. No email delivery service or payment backend was added.

Three original photos were downloaded and optimized into `public/media/by-mail/`. The source's `AI-photo.webp`, `helio-4.jpg`, `helio-6.jpg`, and free-shipping banner returned HTTP 503, including their alternate sizes where available; those unavailable assets are not dependencies of the new page. Shipping information remains in text. The original Google Maps embed is retained with an accessible title and lazy loading.

Validation:

- `npm ci`
- `ASTRO_TELEMETRY_DISABLED=1 npm run build` — no errors, warnings, or hints; 270 generated pages.
- `npm test` — existing route metadata, schema, published catalog prices, images, and booking ID preserved; new route price, booking URL, FAQ count, email explanation, and local images checked.
- Chromium at 1440px and 390px — no horizontal overflow; images load; all option lists match the original; six FAQs open and close by keyboard; required fields validate; prepared email contains selected options, date, email, and venue address; booking links use the mail rental destination; navigation reaches the new page.
- JavaScript disabled at 390px — content, options, native email fallback, FAQs, and layout remain available.

Screenshots: [desktop](1440.png), [mobile](390.png), [desktop options](options-1440.png), [mobile options](options-390.png).
