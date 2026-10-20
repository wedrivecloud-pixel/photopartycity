# Company, backdrop and blog imagery

Created on 20 October 2026 to fill 15 empty image areas across eight routes: About, Props & Backdrops, Rental Terms & Refunds, Blog, and the four existing articles. This update adds six AI-generated illustrations and reuses two existing editorial images. The five rental-backdrop previews come from the original published rental form, not generated designs.

## New illustrations

| Asset | Dimensions | Bytes | Placement and content |
| --- | --- | ---: | --- |
| `public/media/about/hero.webp` | 1200 × 900 | 103,118 | About hero: an illustrative attendant helping two guests with photo keepsakes beside a Lumia M Pro |
| `public/media/about/lineup.webp` | 1200 × 900 | 108,392 | About lineup: Helio Sport, Lumia M Pro and Posh Pro in an illustrative venue setting |
| `public/media/props/hero.webp` | 1200 × 900 | 104,574 | Props hero: two adults enjoying simple heart and star props |
| `public/media/terms/hero.webp` | 1200 × 900 | 129,566 | Terms hero: representative handling of a detached Helio booth head beside a protective case |
| `public/media/blog/featured.webp` | 1200 × 900 | 104,980 | Blog featured article and benefits article: three friends enjoying photo strips and party props |
| `public/media/blog/types.webp` | 1280 × 720 | 142,712 | Blog types card and types article: two adults posing at an open-air ring-light photo booth |

The six optimized WebP files total **693,342 bytes, approximately 677 KiB**. They use quality 82. Original generated PNGs remain in the working asset library rather than being shipped to visitors.

These scenes illustrate service use and equipment. They do not document actual employees, customers, company events or endorsements. Alternative text and visible captions identify the scenes as illustrative; blog captions explicitly identify AI-generated imagery. No review, client logo or customer claim is introduced.

The About hero follows the existing `public/media/full-service/lumia-m-pro.webp` reference. The lineup follows the existing `helio-sport.webp`, `lumia-m-pro.webp` and `posh-pro.webp` references in that directory. The blog types scene follows the Helio Sport reference. See [equipment reference provenance](full-service-images.md). The Terms scene follows `public/media/by-mail/helio-detail.webp` and `public/media/by-mail/kit.webp`; see [by-mail imagery](mail-images.md). It is a representative handling illustration, not a packing procedure. Its visible caption tells renters to follow their supplied packing instructions.

## Original rental-backdrop previews

All five previews use the unchanged **740 × 715** original composite, `public/media/223a01a082be3c75.webp`. Its source JPG remains at `public/media/223a01a082be3c75.jpg`. Both imported rental forms, `/full-service-form/` and `/24-hours-self-service/`, use this same image and list the five designs. The original asset records, including both Google Forms download URLs, are retained in [`src/data/assets.json`](../../src/data/assets.json).

The composite labels the designs Geometric, Leaf, Flower, Wood and Brick Angel Wings. Gold Sequin and Rose Gold Sequin are visibly crossed out and are excluded. The source form misspells Geometric as “Geomtric”; the presentation uses the corrected spelling. The forms describe 8 × 8-foot local rental backdrops; self-service lists a $25 option, while full service presents backdrop choices without an additional backdrop price. The page asks customers to confirm their selected design for their date and distinguishes by-mail backdrop choices.

`InfoPage.astro` creates five square previews using CSS positioning of this single source. There are no edited source files or additional backdrop image copies. The rendered crop rectangles below use a top-left origin, measured in source pixels, with each rectangle 200 × 200 pixels:

| Design | x | y | Visible source content |
| --- | ---: | ---: | --- |
| Geometric | 60 | 12 | Fine gold geometric lines on white |
| Leaf | 60 | 250 | Dense green foliage |
| Flower | 264 | 250 | White sculpted paper flowers |
| Wood | 469 | 250 | Warm brown stacked wood boards |
| Brick Angel Wings | 60 | 486 | White outline wings against dark brick |

Native inspection identified approximately 201-pixel pattern bounds. The implemented 200-pixel inner rectangles crop inward by roughly one pixel to avoid labels, adjacent swatches and edge artifacts. A 1:1 frame displays the source at 370% width and 357.5% height, with the crop offset applied in CSS. Each preview has design-specific alternative text.

Each pattern therefore has only about 200 × 200 source pixels. These are intentionally authentic thumbnails, not newly invented high-resolution rental inventory images. Larger displays may show softness from the original sheet. All five previews reuse one 740 × 715 image URL, so the browser downloads the sheet once and reuses it.

The separate retail catalog contains a matching Flower pattern (`b1dcf452af0bf7c0.webp`) and Wood pattern (`4444daa37f8ff79d.webp`), but those product pictures are not used to infer rental stock. The catalog’s eucalyptus, light gray bricks and black-and-gold Deco Art designs differ from the rental form’s Leaf, Brick Angel Wings and Geometric designs; they are not substituted.

## Placements and reuse

| Route | Image areas filled |
| --- | --- |
| `/about-photo-party-city/` | Hero and three-model lineup |
| `/photobooth-props/` | Hero and five original rental-backdrop previews |
| `/refund-policy/` | Representative equipment-handling hero |
| `/blog/` | Featured article and types-of-booths card |
| `/photobooth-event-benefits/` | Reuses the new blog featured illustration |
| `/types-of-photo-booths/` | Reuses the new blog types illustration |
| `/how-to-build-a-profitable-photo-booth-business/` | Reuses `public/media/cost-guide/hero.webp` as a business-planning illustration |
| `/unlocking-success/` | Reuses `public/media/corporate/hero.webp` as a corporate-event illustration |

Article image frames follow the source aspect ratio: 4:3 for benefits and business-owner scenes, 16:9 for the types article. This keeps faces and booth equipment visible without cropping. The legacy types-article URL continues to follow the existing routing behavior. Existing [cost-guide](cost-images.md) and [corporate](corporate-scenes.md) image provenance still applies to the reused assets.

The update keeps the existing policy copy, prices, booking destinations, page titles, meta descriptions, canonicals, JSON-LD and anchor IDs. New captions describe the imagery without changing booking or policy terms. No change targets the WordPress production site at `photopartycity.com`.

## Validation

- `npm run build` passes with 263 generated pages and zero Astro errors, warnings or hints. Vite retains its existing ZIP-data chunk-size warning. `npm test` passes route, image, metadata, schema, pricing, booking, catalog and mocked contact contracts; no email is sent.
- All eight routes pass at 1440, 768, 390 and 320px. All 15 image areas load with descriptive alt text and intrinsic dimensions. No page overflow or runtime errors occur. Five backdrop previews have distinct source windows and exclude labels and crossed-out options.
- At 390px with JavaScript disabled, images, links, blog/article navigation and all five policy anchor jumps remain available.
- Links, title and metadata, canonical URLs, JSON-LD, IDs, table content and business copy match the preceding version after excluding the replaced photo labels and new captions. Policy wording, returns email, charges and anchors are unchanged.
- Cost-guide body DOM and head contracts are unchanged. Its shared dynamic-route stylesheet gains two BlogPost-scoped figure rules, which match no cost-guide elements; this bundle-only difference is recorded separately.
- Separate visual review at 1440, 390 and 320px passes for the four requested pages and four articles. Faces, booth equipment, keepsakes, backdrop patterns and captions remain visible without clipping or overlap. The three 4:3 article frames preserve their complete source scenes.

- [Browser results](company-images-results.json)
- About: [1440px](screenshots/about-images-1440.webp), [390px](screenshots/about-images-390.webp)
- Props: [1440px](screenshots/props-images-1440.webp), [390px](screenshots/props-images-390.webp)
- Blog: [1440px](screenshots/blog-images-1440.webp), [390px](screenshots/blog-images-390.webp)
- Terms: [1440px](screenshots/terms-images-1440.webp), [390px](screenshots/terms-images-390.webp)
