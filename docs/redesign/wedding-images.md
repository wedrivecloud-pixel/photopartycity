# Wedding package card imagery

At the owner's request, the wedding page's “Choose your hours of happy.” section reuses the exact equipment images shown on the full-service page:

| Package | Model | Existing asset |
| --- | --- | --- |
| Silver | Helio Sport | `public/media/full-service/helio-sport.webp` |
| Gold | Lumia M Pro | `public/media/full-service/lumia-m-pro.webp` |
| Platinum | Posh Pro | `public/media/full-service/posh-pro.webp` |

These 1200 × 800 images retain the wedding cards' existing 4:3 crops. No new image files are generated or duplicated. The scenes are promotional illustrations; the section caption identifies them accordingly. Original equipment references and generation details are documented in [full-service imagery](full-service-images.md).

The wedding and corporate routes share this model lineup in `EventPage.astro`. The shared TierCard component, package copy, hours, prices, booking links, metadata, canonical URL, schema and anchors are preserved. The current wedding hero uses a distinct illustrative celebration in its native 3:2 frame; see the later [unique-hero update](city-images.md).

Build and repository tests pass. Focused checks confirm the three source images and their order, 4:3 framing, unchanged hero attributes, prices, links, metadata, schema and IDs. FAQ and 390px no-JavaScript checks pass; separate visual review confirms complete equipment and clear badge placement at 1440px and 390px. The matching [corporate update](corporate-images.md) preserves the wedding DOM.

The original card-swap checks recorded a 389px hero width at 320px. The current wedding hero has its own responsive sizing rule; the later [unique-hero checks](city-images.md#validation) cover its updated framing and phone layout.

See [results](wedding-images-results.json), [desktop](screenshots/wedding-images-1440.webp) and [mobile](screenshots/wedding-images-390.webp).
