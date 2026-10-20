# Wedding package card imagery

At the owner's request, the wedding page's “Choose your hours of happy.” section reuses the exact equipment images shown on the full-service page:

| Package | Model | Existing asset |
| --- | --- | --- |
| Silver | Helio Sport | `public/media/full-service/helio-sport.webp` |
| Gold | Lumia M Pro | `public/media/full-service/lumia-m-pro.webp` |
| Platinum | Posh Pro | `public/media/full-service/posh-pro.webp` |

These 1200 × 800 images retain the wedding cards' existing 4:3 crops. No new image files are generated or duplicated. The scenes are promotional illustrations; the section caption identifies them accordingly. Original equipment references and generation details are documented in [full-service imagery](full-service-images.md).

The image selection is conditional on the wedding route in `EventPage.astro`. The corporate route retains its existing images. The shared TierCard component, wedding hero, layout, package copy, hours, prices, booking links, metadata, canonical URL, schema and anchors are preserved.

Build and repository tests pass. Focused checks confirm the three source images and their order, 4:3 framing, unchanged hero attributes, prices, links, metadata, schema and IDs. Corporate DOM is unchanged after whitespace normalization. FAQ and 390px no-JavaScript checks pass; separate visual review confirms complete equipment and clear badge placement at 1440px and 390px.

At 320px the card images fit, while the unchanged shared hero produces 389px page width in both the preceding and updated HTML. This existing hero sizing issue is recorded separately from the image swap. The requested 1440px and 390px views have no horizontal overflow.

See [results](wedding-images-results.json), [desktop](screenshots/wedding-images-1440.webp) and [mobile](screenshots/wedding-images-390.webp).
