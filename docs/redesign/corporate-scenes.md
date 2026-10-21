# Corporate celebration and personalization imagery

Created on 20 October 2026 to replace the repeated red masquerade photograph in the corporate hero and personalization section with images that match their content.

| Placement | Asset | Scene |
| --- | --- | --- |
| “Good company. Great memories.” hero | `public/media/corporate/hero.webp` | Three coworkers enjoying a company celebration beside a Lumia M Pro booth, with a printed photo strip |
| “Make the keepsake feel like your event.” | `public/media/corporate/branding.webp` | A sample photo keepsake and Posh Pro signage display using a coordinated abstract design |

Both images are new 1200 × 900 AI-generated promotional scenes. They total 190,988 bytes (approximately 187 KiB). Original PNGs remain in the working asset library; optimized WebP files are versioned with the site. The hero loads eagerly with high priority; the personalization image loads lazily.

The scenes illustrate event use and sample design rather than a real client event, logo or endorsement. No company name, testimonial, price or booking claim is invented. Visible captions and alternative text identify the imagery as illustrative. Existing copy continues to require approved artwork and final design confirmation.

The Lumia scene uses the authentic `/media/e3a3420652e14ba4.webp` (`Lumia-M-Pro-Black.jpg`) reference and the existing full-service product illustration. The Posh scene uses `/media/e2ae14e8be970658.webp` (`Helio-Sapphire-Pro-M50.jpg`, linked as Posh Pro on the supplied packages page) and its full-service illustration. See [equipment provenance](full-service-images.md).

Image wiring and captions apply only to the corporate branch of `EventPage.astro`. A corporate-only wrapper removes the hero's minimum height so its 4:3 frame fits narrow phones. Shared Hero code, wedding DOM, all three package cards and the original business copy remain unchanged.

## Validation

Build and repository tests pass. Browser checks at 1440, 768, 390 and 320px confirm all five images load, the two new scenes are distinct, the red masquerade source is absent, and no page overflow or runtime errors remain. Both new images retain 4:3 framing. FAQs, booking links and 390px no-JavaScript rendering pass.

All package-image attributes, rates, existing links, table content, metadata, canonical URL, JSON-LD and IDs match the preceding version. Wedding DOM is unchanged after whitespace normalization.

Separate visual review at 1440, 390 and 320px confirms visible faces and photo keepsakes, complete booth framing, readable captions and no clipping or overlap.

See [results](corporate-scenes-results.json), [desktop](screenshots/corporate-scenes-1440.webp) and [mobile](screenshots/corporate-scenes-390.webp).
