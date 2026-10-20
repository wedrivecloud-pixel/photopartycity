# Photo Booth by Mail imagery

Created on 20 October 2026 at the owner's request to fill the Photo Booth by Mail page's image areas.

Seven new AI-generated photographs, one reused illustrative photograph, and a geographic coverage graphic fill all nine former image slots:

| Placement | Asset in `public/media/` | Dimensions | Scene |
| --- | --- | --- | --- |
| Hero | `by-mail/hero.webp` | 1200 × 1500 | Friends enjoying a white Helio booth at a house party |
| Check your date step | `by-mail/booking.webp` | 960 × 720 | An event host checking a date on a phone |
| Personalization step | `by-mail/print-layout.webp` | 960 × 720 | Sample floral photo-strip layouts with space for event personalization |
| Arrival step | `by-mail/arrival.webp` | 960 × 720 | A booth travel case arriving at a front door |
| Return step | `by-mail/return.webp` | 960 × 720 | A renter returning a travel case at a shipping counter |
| What's in the box | `by-mail/kit.webp` | 1200 × 900 | A representative booth-and-accessories arrangement beside an open case |
| Phone sharing | `digital/phone-sharing.webp` | 1200 × 1500 | Reused scene of a guest viewing an event photo on a phone |
| Group photo | `by-mail/group.webp` | 1200 × 1500 | Friends posing together for an event photo |
| Continental-US coverage | `by-mail/coverage.svg` | 1280 × 720 viewBox | Sourced map of the 48 contiguous states |

The photographs are illustrative promotional scenes, not records of verified customer events. Their captions and alternative text identify them accordingly. The kit image is a representative contents arrangement, not an exact inventory or packing diagram. The scenes do not establish that a printer, hotspot, attendant, or other optional service is included by default. Print-layout artwork illustrates personalization and optional printing; existing package copy continues to explain the options.

## Equipment references

The original mail-page photographs provide the hardware references:

- `/media/by-mail/helio-booth.webp` derives from [helio-8.png](https://photopartycity.com/wp-content/uploads/2023/09/helio-8.png), 825 × 681. It shows a white Helio with a circular ring light, portrait iPad, slim pedestal and flat base.
- `/media/by-mail/helio-detail.webp` derives from [helio-5.jpg](https://photopartycity.com/wp-content/uploads/2023/09/helio-5.jpg), 600 × 600. It shows the detached circular head in fitted foam inside a black hard case.
- `/media/db6a78471cff9cef.webp` and `/media/75806fac68a1115c.webp` derive from [Helio-Travel-Case_1080x.jpg](https://photopartycity.com/wp-content/uploads/2023/08/Helio-Travel-Case_1080x.jpg) and [Helio-travelcasehandle_1080x.jpg](https://photopartycity.com/wp-content/uploads/2023/08/Helio-travelcasehandle_1080x.jpg). They show the protective case's latches, handle and exterior construction.

These references support a Helio-family iPad booth; the mail source does not identify a specific Helio Sport generation. The generated scenes retain that general equipment form without adding DSLR housings, flash hoods or large signage screens. The earlier generated homepage `mail.webp` is a secondary reference for warm home/unpacking composition, not evidence of the supplied hardware or packing configuration.

The seven new WebP photographs total 784,088 bytes, approximately 766 KiB. Original generated PNGs remain in the working asset library; optimized WebP files are versioned with the site. Images have intrinsic dimensions and descriptive alternative text. The hero loads eagerly with high priority, and the remaining image areas load lazily.

## Coverage map provenance and license

The [coverage SVG](../../public/media/by-mail/coverage.svg) uses **us-atlas 3.0.1**, specifically [`states-albers-10m.json`](https://github.com/topojson/us-atlas#states-albers-10mjson), obtained from the [published package archive](https://registry.npmjs.org/us-atlas/-/us-atlas-3.0.1.tgz). The upstream geography is the **U.S. Census Bureau's 2017 cartographic state boundaries**, available from the [Census source directory](https://www2.census.gov/geo/tiger/GENZ2017/shp/). Census federal geographic data is public-domain source material; the us-atlas redistribution carries Michael Bostock's permissive **ISC license**. The SVG retains the complete copyright notice, permission grant and warranty disclaimer, headed “Copyright 2013–2019 Michael Bostock,” in its source comment.

The TopoJSON source has SHA-256 `6e7bb086a3c791490361968a3094f377f7726c5d0c4900fec03cc42db2305a3d`. Its published `d3.geoAlbersUsa` projection is preserved. Delta-encoded arcs and the quantization transform are decoded, then uniformly scaled and translated to the SVG viewport; the state outlines are not drawn or invented by an image generator. The result retains 48 state geometries, omitting Alaska, Hawaii and the District of Columbia. Territories are absent from the source dataset and are not added.

The map uses the site's cream/lilac/plum colors, state boundaries and an accessible title/description. It has no scripts, external resources, delivery routes or shipping-time claims. It illustrates the continental-US service area rather than precise delivery eligibility or navigation. The existing written coverage terms remain authoritative.

## Validation

- `npm run build` passes with 263 generated pages and zero Astro errors, warnings or hints. Vite retains its existing warning about the ZIP-data JavaScript chunk size.
- `npm test` passes all route, metadata, schema, price, booking, catalog and mocked booking/contact contracts. Tests do not send email.
- Chromium checks at 1440px, 768px, 390px and 320px confirm all nine image areas load, their sources, alternative text and intrinsic ratios match the implementation, and there are no blank image slots, horizontal overflow or runtime errors.
- Keyboard FAQ checks pass. At 390px with JavaScript disabled, images, booking links and native FAQs remain available.
- Exact comparisons with the preceding server-rendered page confirm unchanged links, title, all metadata, canonical URL, JSON-LD, IDs and prices.
- Separate desktop/mobile visual review confirms clear faces, complete booth and case framing, readable workflow order, sharing portraits and map. The desktop delivery badge sits in the lower-left rug area, clear of the booth base; it remains hidden on phones.

See [results](mail-images-results.json), [desktop screenshot](screenshots/mail-images-1440.webp) and [mobile screenshot](screenshots/mail-images-390.webp).

This imagery update preserves the page title, description, canonical URL, schema, rental and add-on prices, booking destination and policy copy. It does not change the existing WordPress website.
