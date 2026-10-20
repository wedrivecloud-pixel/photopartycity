# Corporate package card imagery

At the owner's request, “Choose your hours of happy.” on the corporate page uses the exact equipment images shown on the full-service page:

| Package | Model | Existing asset |
| --- | --- | --- |
| Silver | Helio Sport | `public/media/full-service/helio-sport.webp` |
| Gold | Lumia M Pro | `public/media/full-service/lumia-m-pro.webp` |
| Platinum | Posh Pro | `public/media/full-service/posh-pro.webp` |

The 1200 × 800 images retain the cards' existing 4:3 crops. The shared event-page lineup now serves wedding and corporate pages, with the same illustrative-imagery caption. No new image files are generated or duplicated. References and provenance are documented in [full-service imagery](full-service-images.md).

Build and repository tests pass. Card checks at 1440px and 390px confirm the three package images appear in the correct order, with prices, links, metadata, canonical, schema and IDs preserved. Wedding DOM is unchanged after whitespace normalization. FAQ and 390px no-JavaScript checks pass. The corporate hero and personalization images are documented in [corporate scenes](corporate-scenes.md).

Separate visual review at 1440px and 390px confirms complete machine framing, clear badge placement and readable cards without horizontal overflow.

The current corporate-scene implementation also resolves the former 320px hero sizing issue; its [four-width checks](corporate-scenes-results.json) confirm no page overflow.

See [results](corporate-images-results.json), [desktop](screenshots/corporate-images-1440.webp) and [mobile](screenshots/corporate-images-390.webp).
