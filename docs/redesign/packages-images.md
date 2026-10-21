# Packages page imagery

Prepared on 20 October 2026 at the owner's request to fill the Packages page's ten image areas. Three new self-operated guest scenes complement the existing equipment illustrations and mail-kit image.

| Placement | Asset in `public/media/` | Intrinsic dimensions | Frame |
| --- | --- | --- | --- |
| Silver full-service tier | `full-service/helio-sport.webp` | 1200 × 800 | 3:2 |
| Gold full-service tier | `full-service/lumia-m-pro.webp` | 1200 × 800 | 3:2 |
| Platinum full-service tier | `full-service/posh-pro.webp` | 1200 × 800 | 3:2 |
| Starter self-service tier | `packages/helio-self-service.webp` | 1200 × 800 | 3:2 |
| Showbiz self-service tier | `packages/lumia-self-service.webp` | 1200 × 800 | 3:2 |
| Hollywood self-service tier | `packages/posh-self-service.webp` | 1200 × 800 | 3:2 |
| Booth by Mail card | `by-mail/kit.webp` | 1200 × 900 | 4:3 |
| Helio Sport model card | `full-service/helio-sport.webp` | 1200 × 800 | 4:3 crop |
| Lumia M Pro model card | `full-service/lumia-m-pro.webp` | 1200 × 800 | 4:3 crop |
| Posh Pro model card | `full-service/posh-pro.webp` | 1200 × 800 | 4:3 crop |

The six tier images retain their 3:2 framing through a page-local override. The three model cards reuse the same cached equipment files with deliberate 4:3 framing. Existing asset provenance and generation details are documented in [full-service imagery](full-service-images.md); the reused kit and its packing limitations are documented in [mail imagery](mail-images.md).

## Model references and scene constraints

The supplied [Photo Party City packages page](https://photopartycity.com/photo-booth-packages/) establishes the rental-to-model mapping. The new scenes use these authentic equipment references already present in the site library:

- **Helio Sport:** `/media/e71075c0cc841dfe.webp`, from [Helio-V3.png](https://photopartycity.com/wp-content/uploads/2023/08/Helio-V3.png), 1200 × 1200. Preserve the circular white ring light, portrait tablet, slim black pedestal and flat base. Do not add a DSLR lens housing, flash hood or signage column. The legacy V3 filename is visually matched to the Silver/Starter artwork; the live page calls the rental model Helio Sport.
- **Lumia M Pro:** `/media/e3a3420652e14ba4.webp`, from [Lumia-M-Pro-Black.jpg](https://photopartycity.com/wp-content/uploads/2023/08/Lumia-M-Pro-Black.jpg), 1200 × 1200. Preserve the rectangular head, DSLR lens inside its circular light, landscape touchscreen below, flash hood, shelf and black pedestal.
- **Posh Pro:** `/media/e2ae14e8be970658.webp`, from [Helio-Sapphire-Pro-M50.jpg](https://photopartycity.com/wp-content/uploads/2023/08/Helio-Sapphire-Pro-M50.jpg), 1200 × 1200. Preserve the large circular RGB head, top flash and integrated tall portrait signage display. The supplied packages page explicitly links Posh Pro to the manufacturer's Helio Sapphire Pro M50 product.

The Starter, Showbiz and Hollywood scenes depict guests operating the equipment themselves. They contain no default attendant or printer, and do not imply that printed keepsakes are included in the base self-service package. Display content and event settings are illustrative rather than evidence of a customer's booking or supplied branding.

Visible captions and descriptive alternative text identify generated scenes as illustrative. The equipment-only scenes and new guest scenes are promotional illustrations, not verified customer-event photographs. The reused mail kit remains a representative contents arrangement, not an exact inventory or packing diagram. Original generated PNGs remain in the working asset library; optimized WebP files are versioned with the site.

## Validation

The three new WebP files total **395,512 bytes**, approximately **386 KiB**: Helio Sport 119,536 bytes, Lumia M Pro 141,980 bytes and Posh Pro 133,996 bytes. Reused images add no duplicate asset files.

`npm run build` passes with 263 generated pages and zero Astro errors, warnings or hints. `npm test` also passes.

- Chromium checks at 1440px, 768px, 390px and 320px confirm all ten images load with the expected framing and no horizontal page overflow.
- All six exact tier prices and package booking destinations pass. Protected anchors, including direct navigation to `#selfservice`, remain available.
- Keyboard FAQs pass. At 390px with JavaScript disabled, all images, booking links and native FAQs remain usable.
- Both mobile comparison tables reach their rightmost columns through horizontal wheel gestures while the page itself stays within the viewport.
- Exact comparisons with the preceding server-rendered page confirm unchanged links, title, all metadata, canonical URL, JSON-LD, IDs and prices.
- Separate visual review at 1440px and 390px confirms equipment and faces remain clear, the featured badge avoids important details, and the mail kit fits its frame.

See [results](packages-images-results.json), [desktop screenshot](screenshots/packages-images-1440.webp) and [mobile screenshot](screenshots/packages-images-390.webp).

This update is scoped to imagery and page-local framing. Prices, tier names, included hours, add-on charges, Eventdeskly links, title, description, canonical URL, JSON-LD and protected section IDs are preserved. The existing WordPress site is outside the change. Deployment is not claimed by these local checks.
