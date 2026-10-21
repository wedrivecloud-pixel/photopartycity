# Full-service page imagery

Created on 20 October 2026 at the owner's request to fill the Full-Service Photo Booth Rental with Prints page.

Four new AI-generated images fill the hero and three package cards. The product scenes use the supplied [packages page](https://photopartycity.com/photo-booth-packages/) and its existing image library as visual references. Wedding, corporate and birthday scenes from the homepage also fill the occasion tiles and photo-strip frames. All seven main image areas and nine strip frames now contain images.

| New asset in `public/media/full-service/` | Scene and reference |
| --- | --- |
| `hero.webp` | An attendant handing a printed keepsake to wedding guests; 1200 × 1500 |
| `helio-sport.webp` | Round ring-light head, tablet and slim black pedestal; reference `/media/e71075c0cc841dfe.webp`, originally `Helio-V3.png`, visually matched to the Silver/Starter artwork |
| `lumia-m-pro.webp` | Rectangular DSLR/tablet head, light border, flash hood, shelf and black pedestal; reference `/media/e3a3420652e14ba4.webp`, originally `Lumia-M-Pro-Black.jpg`, matching the Gold artwork |
| `posh-pro.webp` | Round RGB head, top flash and integrated tall portrait display; reference `/media/e2ae14e8be970658.webp`, originally `Helio-Sapphire-Pro-M50.jpg`, linked as Posh Pro on the supplied packages page |

The three product scenes are 1200 × 800. Generation preserved the referenced equipment's main shape and components while replacing the original studio setting and model with a reception setting. These are illustrative product scenes, not documentary photographs of a booked event. Captions identify the illustrative imagery; the product references remain available in the existing asset library.

Photo strips are HTML sample layouts populated with existing homepage imagery. Their names/date/logo labels describe customization rather than a completed customer's print design. The original generated PNGs remain in the working asset library; optimized WebP files are versioned with the site.

The hero loads eagerly with high priority. Other images load lazily and include intrinsic dimensions and descriptive alternative text. Mini strip frames are decorative within labelled groups. Styles stay inside this page, preserve the 3:2 package-card crops and keep the rotated hero strip inside the tablet layout.

The four new WebP files total approximately 363 KiB. The production build and repository tests pass. Browser checks at 1440, 960, 768, 721, 720, 390 and 320 pixels confirm all 16 images load, no empty slots or horizontal overflow remain, package-card framing is 3:2, and FAQs work by keyboard. The no-JavaScript rendering also passes. See [results](full-service-images-results.json), [desktop screenshot](screenshots/full-service-images-1440.webp) and [mobile screenshot](screenshots/full-service-images-390.webp).

Prices, package durations, Eventdeskly destinations, page title, description, canonical URL, JSON-LD and section IDs are preserved. The existing WordPress website is unchanged.
