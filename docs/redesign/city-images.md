# City and lead imagery

Created on 21 October 2026 for the requested image refresh across all 11 city rental pages and the two cards under “A little less planning. A lot more fun.” Each city now has its own hero rather than the shared red masquerade photograph.

The 13 new assets are AI-generated promotional illustrations made with `image_gen.imagegen`. The people, celebrations, and settings are imagined. They do not document real city venues, booked customers, employees, or endorsements. The scenes use different people, event types, lighting, and arrangements; no city landmarks or venue names establish a real location. Visible captions identify the illustrations, and alternative text describes the scene without claiming it was photographed in that city.

## Equipment references and generation

Generation used the existing illustrative equipment assets in `public/media/full-service/` as visual references. Their original product-image provenance and model matching are documented in [full-service imagery](full-service-images.md):

| Equipment reference | Features retained in the new scenes |
| --- | --- |
| `helio-sport.webp` | Circular white ring-light head and tablet, slim black pedestal, flat base |
| `lumia-m-pro.webp` | Rectangular DSLR/tablet head, separate landscape screen, white flash hood, pedestal shelf, flat base |
| `posh-pro.webp` | Round RGB head, small top flash, integrated tall portrait signage display, broad flat base |

The references supplied the equipment appearance; the new images replace the reference people and setting. The complete booth head, column, and base remain visible, with margins for the intended crops. Generated prints and screens are illustrative, without customer names or readable event branding.

All new assets are local WebP files encoded at quality 82. The 11 heroes are **960 × 1200**, displayed at **4:5**. The two shared cards are **1200 × 800**, displayed at **3:2**. Together, the 13 files total **1,836,608 bytes**, approximately **1.75 MiB**, and have 13 distinct SHA-256 hashes. No runtime image generation or external image requests are introduced.

Original PNGs, prompts, equipment-reference paths, and optimization metadata were recorded in the working manifests `assets-rental.json`, `assets-blog.json`, `assets-guest.json`, `assets-design.json`, and `assets-cards.json` under `/workspace/work/city-images/`. These were reviewed together after all 13 files existed. Each final image was also visually inspected against its descriptive alt text.

## New city heroes

Every asset below lives in `public/media/cities/` and appears only as the hero on the corresponding city page. The shared `CityPage.astro` template selects its source, descriptive alt text, and intrinsic dimensions from `src/data/city-imagery.ts` using the existing city slug.

| City / route | Asset | Imagined scene and equipment |
| --- | --- | --- |
| Fontana · `/photo-booth-rental-fontana/` | `fontana.webp` | Sunny outdoor adult birthday; two friends with playful props beside Helio Sport |
| Riverside · `/photo-booth-rental-riverside/` | `riverside.webp` | Evening garden reception; three guests comparing photo keepsakes beside Lumia M Pro |
| Rancho Cucamonga · `/photo-booth-rental-rancho-cucamonga/` | `rancho-cucamonga.webp` | Leafy patio celebration; two friends beside Posh Pro with abstract signage |
| Ontario · `/photo-booth-rental-ontario/` | `ontario.webp` | Modern indoor company celebration; three coworkers with keepsakes beside Lumia M Pro |
| San Bernardino · `/photo-booth-rental-san-bernardino/` | `san-bernardino.webp` | Indoor graduation party; three adults, including a guest wearing a graduation cap, beside Helio Sport |
| Corona · `/photo-booth-rental-corona/` | `corona.webp` | Warm courtyard anniversary celebration; a couple beside Posh Pro |
| Eastvale · `/photo-booth-rental-eastvale/` | `eastvale.webp` | Bright backyard birthday; three friends beside Helio Sport |
| Upland · `/photo-booth-rental-upland/` | `upland.webp` | Garden wedding; a couple sharing a keepsake beside Lumia M Pro |
| Jurupa Valley · `/photo-booth-rental-jurupa-valley/` | `jurupa-valley.webp` | Rustic garden party at golden hour; three friends beside Helio Sport |
| Chino · `/photo-booth-rental-chino/` | `chino.webp` | Indoor family banquet; three adult family members beside Lumia M Pro |
| Norco · `/photo-booth-rental-norco/` | `norco.webp` | Rustic courtyard gathering; three friends beside Posh Pro |

Each hero loads eagerly with high fetch priority. Its figure caption says “Illustrative event scene.” Zero figure margins and a city-scoped minimum-height override preserve the exact 4:5 frame at narrow widths without changing shared photo styling.

## Shared rental-option cards

These two images appear on all 11 city pages under the existing “A little less planning. A lot more fun.” heading. They explain the difference between having the team run the booth and operating a digital booth yourself.

| Asset | Placement and scene | Caption |
| --- | --- | --- |
| `full-service.webp` | “Full service with prints”: an attendant helping two guests with printed keepsakes beside a Lumia M Pro | “Illustrative full-service experience.” |
| `self-service.webp` | “24-hour self-service”: two adult friends operating a Helio Sport, without an attendant or print handoff | “Illustrative self-service experience.” |

Both cards load lazily, declare their 1200 × 800 intrinsic dimensions, and retain a 3:2 frame. Prices, package durations, descriptions, and booking destinations remain in their existing positions and read from the same rental data.

## Other lead-image replacements

Four existing local illustrations are reused to give other lead sections a more relevant image. These are placements of existing assets, not additional generated files in this set. Their earlier provenance is documented in [homepage imagery](homepage-images.md), [corporate imagery](corporate-scenes.md), and [mail imagery](mail-images.md).

| Route | Existing asset now used | Frame |
| --- | --- | --- |
| `/wedding-photo-booth-rental/` | `/media/homepage/wedding.webp` — wedding guests sharing a laugh and a keepsake | 3:2 |
| `/photobooth-event-benefits/` | `/media/homepage/birthday.webp` — birthday celebration | 3:2 |
| `/unlocking-success/` | `/media/corporate/branding.webp` — sample keepsake coordinated with booth signage | 4:3 |
| `/how-to-build-a-profitable-photo-booth-business/` | `/media/by-mail/booking.webp` — rental planning scene | 4:3 |

The shared `Hero` component accepts optional image width, height, and ratio values for these placements; its existing defaults remain intact. Image framing changes stay scoped to the affected lead sections.

## Validation

The update retains source business copy, prices, durations, Eventdeskly destinations, titles, descriptions, canonical URLs, JSON-LD, form behavior, and existing section IDs. New text is limited to image descriptions and illustrative captions. The existing WordPress website is untouched.

`npm run build` and `npm test` pass: 263 pages, zero Astro errors/warnings/hints, preserved booking/catalog/SEO contracts and mocked contact checks. Vite retains the existing ZIP-data chunk-size warning; no email was sent. Baseline HTML for all 11 city pages plus corporate and full-service controls was saved before changes in `/workspace/work/city-images/baseline-manifest.json`.

The [machine-readable results](city-images-results.json) record passing checks on 15 routes at 1440, 768, 390 and 320px, plus 390px no-JavaScript checks. All 13 assets have distinct hashes, images load in their intended frames, FAQs work by keyboard, and date/ZIP GET submission and checker prefills work with and without JavaScript. No page overflow or runtime errors occur. Prices, links, source business copy, forms, metadata, canonical URLs, JSON-LD and IDs match the baselines. Homepage, full-service, corporate and cost-guide control DOMs and contracts are unchanged; added scoped CSS matches no control elements. The cost comparison uses the earlier immutable company-page baseline.

A 31-route audit finds no duplicate primary/meaningful hero or article-lead images across routes. The checker, contact and packages intro sections intentionally have no hero image. Existing decorative filmstrips are excluded from that primary-image comparison and retain their thumbnail reuse, including the wedding and birthday illustrations in the full-service strip.

Separate visual review at 1440, 390 and 320px confirms clear faces, keepsakes, complete booth framing, readable captions and no clipping or overlap on all 15 updated routes. The service photos clearly show attended prints and digital self-operation.

| City screenshots | 1440 px | 390 px |
| --- | --- | --- |
| Fontana | [Desktop](screenshots/city-fontana-1440.webp) | [Mobile](screenshots/city-fontana-390.webp) |
| Riverside | [Desktop](screenshots/city-riverside-1440.webp) | [Mobile](screenshots/city-riverside-390.webp) |
| Rancho Cucamonga | [Desktop](screenshots/city-rancho-cucamonga-1440.webp) | [Mobile](screenshots/city-rancho-cucamonga-390.webp) |
| Ontario | [Desktop](screenshots/city-ontario-1440.webp) | [Mobile](screenshots/city-ontario-390.webp) |
| San Bernardino | [Desktop](screenshots/city-san-bernardino-1440.webp) | [Mobile](screenshots/city-san-bernardino-390.webp) |
| Corona | [Desktop](screenshots/city-corona-1440.webp) | [Mobile](screenshots/city-corona-390.webp) |
| Eastvale | [Desktop](screenshots/city-eastvale-1440.webp) | [Mobile](screenshots/city-eastvale-390.webp) |
| Upland | [Desktop](screenshots/city-upland-1440.webp) | [Mobile](screenshots/city-upland-390.webp) |
| Jurupa Valley | [Desktop](screenshots/city-jurupa-valley-1440.webp) | [Mobile](screenshots/city-jurupa-valley-390.webp) |
| Chino | [Desktop](screenshots/city-chino-1440.webp) | [Mobile](screenshots/city-chino-390.webp) |
| Norco | [Desktop](screenshots/city-norco-1440.webp) | [Mobile](screenshots/city-norco-390.webp) |

| Other lead screenshots | 1440 px | 390 px |
| --- | --- | --- |
| Wedding | [Desktop](screenshots/lead-wedding-photo-booth-rental-1440.webp) | [Mobile](screenshots/lead-wedding-photo-booth-rental-390.webp) |
| Event benefits | [Desktop](screenshots/lead-photobooth-event-benefits-1440.webp) | [Mobile](screenshots/lead-photobooth-event-benefits-390.webp) |
| Corporate article | [Desktop](screenshots/lead-unlocking-success-1440.webp) | [Mobile](screenshots/lead-unlocking-success-390.webp) |
| Booth-business article | [Desktop](screenshots/lead-how-to-build-a-profitable-photo-booth-business-1440.webp) | [Mobile](screenshots/lead-how-to-build-a-profitable-photo-booth-business-390.webp) |
