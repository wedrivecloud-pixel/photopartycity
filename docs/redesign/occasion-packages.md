# Shared event package section

Birthdays, Quinceañeras, Graduations, and School Events now use the Weddings and Corporate Events package layout in place of “Choose the support that fits / Two ways to bring everyone together.” All six pages render `src/components/redesign/FullServicePackages.astro`, extracted from the reference pages without changing their content or appearance.

The shared section contains the exact reference heading, included-services paragraph, three `TierCard` components, Gold badge and border, image caption, proposal note, and package comparison link. The existing global card styles determine desktop columns, mobile stacking, spacing, image framing, and typography; no new styles, JavaScript, or dependencies are introduced.

| Package | Booth | Price | Included time | Image |
| --- | --- | --- | --- | --- |
| Silver | Helio Sport | $695 | 3 hours | `/media/full-service/helio-sport.webp` |
| Gold · Most popular | Lumia M Pro | $895 | 4 hours | `/media/full-service/lumia-m-pro.webp` |
| Platinum | Posh Pro | $1,095 | 5 hours | `/media/full-service/posh-pro.webp` |

Prices, features, and each “Check your date” Eventdeskly destination come from the original shared `fullServiceTiers` records. “Compare all packages and inclusions” still opens `/photo-booth-packages/`. Reference-image provenance is documented in [full-service imagery](full-service-images.md).

The occasion pages preserve `#rental-options`, while Weddings and Corporate Events preserve `#event-packages`. Occasion-specific heroes, copy, supporting images, planning sections, FAQs, event-prefilled date/ZIP form, navigation, titles, descriptions, canonicals, and JSON-LD retain their existing values. The previously generated people-and-print assets remain saved, with provenance in [the archived image record](occasion-print-images.md); obsolete image configuration and two-card styles have been removed.

## Validation

`npm run build` and `npm test` pass: 267 generated pages and 35 rental routes. Existing occasion verification now checks all three original full-service tier prices, models, durations, and exact Eventdeskly links, replacing the obsolete Silver/Starter card expectation. General catalog, metadata, booking, and schema checks remain intact.

The [browser results](occasion-packages-results.json) compare all 35 redesigned routes against the immutable `d8ff503` build. Existing pages, including Weddings and Corporate Events, retain their DOM/content; only the four requested sections are omitted from their outside-section comparisons. Metadata, JSON-LD, hero/supporting imagery, event-specific forms, navigation, and other content pass preservation checks. Each new section is structurally and textually identical to both reference sections after normalizing its heading ID and Astro scope attributes.

All 20 viewport cases at 1440, 1024, 768, 390, and 320px pass, plus four 390px no-JavaScript checks. The three package photos load with the reference 4:3 framing, prices and hours match the original data, and Gold alone has the featured badge/border. All three booking links activate with Enter at every width; the browser harness prevents external navigation, so no reservation is created. No horizontal overflow, missing images, or runtime errors occur.

| Package-section screenshots | 1440 px | 390 px |
| --- | --- | --- |
| Birthdays | [Desktop](screenshots/occasion-packages-birthday-1440.webp) | [Mobile](screenshots/occasion-packages-birthday-390.webp) |
| Quinceañeras | [Desktop](screenshots/occasion-packages-quinceanera-1440.webp) | [Mobile](screenshots/occasion-packages-quinceanera-390.webp) |
| Graduations | [Desktop](screenshots/occasion-packages-graduation-1440.webp) | [Mobile](screenshots/occasion-packages-graduation-390.webp) |
| School events | [Desktop](screenshots/occasion-packages-school-1440.webp) | [Mobile](screenshots/occasion-packages-school-390.webp) |
