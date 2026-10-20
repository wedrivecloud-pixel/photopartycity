# Rental cost guide imagery

Created on 20 October 2026 at the owner's request to fill the rental cost guide's empty hero.

`public/media/cost-guide/hero.webp` is a new 1200 × 900 AI-generated planning scene. Two adults review sample photo strips beside a notebook and phone, in the site's cream, lilac and sage palette. The optimized WebP is 140,554 bytes (approximately 137 KiB); the original PNG remains in the working asset library.

The scene is promotional illustration, not a customer event, price quotation or booking confirmation. It contains no embedded prices, discounts, logos or payment interface. Sample printed keepsakes illustrate an option discussed in the guide; existing copy continues to distinguish optional printing from base digital rentals. Descriptive alternative text and a visible caption identify the imagery as illustrative.

The image and caption are conditional on `isCost` in `InfoPage.astro`. The shared Hero component, other information-page branches, pricing tables and example-total cards retain their existing structure. The hero uses eager loading and high priority. A cost-only style removes the shared minimum height so the image stays at 4:3 within narrow phone columns without horizontal overflow. No additional image sections are introduced.

## Validation

Production build generates 263 pages with zero Astro errors, warnings or hints; repository tests pass. The existing Vite ZIP-data size warning remains.

- Chromium checks at 1440, 768, 390 and 320px confirm the hero loads at 4:3 without placeholders, horizontal overflow or runtime errors.
- All five pricing tables remain horizontally scrollable to their final columns, including without JavaScript. Native FAQs and booking access pass.
- Prices, exact table content, links, metadata, canonical URL, JSON-LD and IDs match the preceding page. About, Props and Refund page DOMs are unchanged after whitespace normalization.
- Separate visual review at 1440, 390 and 320px confirms both faces and the complete sample strips remain visible and the caption reads clearly.

See [results](cost-images-results.json), [desktop](screenshots/cost-images-1440.webp) and [mobile](screenshots/cost-images-390.webp) screenshots.

The update preserves published rates, example totals, table content, Eventdeskly links, page title, metadata, canonical URL, JSON-LD and section IDs. It is published through the redesign review branch; the existing WordPress site is outside the change.
