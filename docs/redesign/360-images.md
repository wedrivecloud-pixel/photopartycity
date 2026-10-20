# 360 rental page imagery

Created on 20 October 2026 at the owner's request to fill the 360 Video Booth Rental in the Inland Empire page.

Three new AI-generated event scenes populate every empty image area:

| Asset in `public/media/360/` | Dimensions | Scene |
| --- | --- | --- |
| `hero.webp` | 1200 × 1500 | Adult friends posing on the round platform at a party |
| `full-service.webp` | 1200 × 675 | A wedding couple using the 360 setup |
| `self-service.webp` | 1200 × 675 | An adult guest and helper at a covered backyard celebration |

The owner supplied the [ATA motorized 360 four-panel bundle reference](https://www.ataphotobooths.com/shop/360-photobooth-27-32-39-inch-motorized-4-led-panel-bundle-package/). Its product text confirms a round motorized platform, rotating camera arm, ring light and four panels. The exact current bundle gallery could not be downloaded through this environment, so the generated scenes use the matching core hardware in the company's existing library:

- `/media/ffd2bb9be3b0d5ae.webp`, originally `photo_2022-07-12_18-33-19.jpg`: assembled round platform, arm and ring light; the generation reference.
- `/media/26e05c05d95abfcd.webp`, originally `39-inch-360-Booth-Motorized_5.jpg`: kit silhouette and hardware.
- `/media/e6f65455d9f49c95.webp`, originally `photo_2022-07-12_18-31-31.jpg`: arm, ring and bracket detail.

These illustrate the platform/arm/ring equipment family rather than claiming to be exact photographs of the four-panel bundle. No unverified freestanding light panels, TV, optional battery or rental accessory inclusions are depicted or promised. Guests stand on the stationary platform while the camera arm circles them. Imagery preserves visible clearance and shows video capture rather than printed photo keepsakes.

Captions identify the scenes as illustrative, not documentary customer event photographs. No guaranteed attendant is implied: existing full-service copy confirms professional setup and leaves guest support to the proposal. The original generated PNGs remain in the working asset library; optimized WebP files are versioned with the site.

The 4:5 hero loads eagerly with high priority; the 16:9 rate-card images load lazily. Images have intrinsic dimensions and descriptive alternative text. A page-specific style keeps the shared tier-card rule from changing the landscape framing.

The three WebP files total approximately 272 KiB. Production build and repository tests pass. Browser checks at 1440px, 768px, 390px and 320px confirm all three images load, 16:9 card framing, no horizontal overflow, all six prices and hour/booth booking parameters, independent rate controls, keyboard FAQs and the no-JavaScript rates fallback. Separate visual review at desktop/mobile widths confirms complete equipment and faces remain visible. See [results](360-images-results.json), [desktop screenshot](screenshots/360-images-1440.webp) and [mobile screenshot](screenshots/360-images-390.webp).

All prices, 2/3/4-hour controls, dynamic booking parameters, Eventdeskly destinations, no-JavaScript rate fallback, page copy, title, description, canonical URL, JSON-LD and section IDs are preserved. The existing WordPress website is untouched.
