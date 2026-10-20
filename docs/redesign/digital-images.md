# Digital rental page imagery

Created on 20 October 2026 at the owner's request to fill the Digital Photo Booth Rental for the Inland Empire page.

All three empty image areas are populated:

| Placement | Asset | Scene |
| --- | --- | --- |
| First hero portrait | `public/media/digital/capture.webp`, 1200 × 1500 | New AI-generated scene of adult friends making a playful pose at a self-operated Helio Sport |
| Second hero portrait | `public/media/digital/phone-sharing.webp`, 1200 × 1500 | New AI-generated scene of a guest enjoying an event photo on a smartphone |
| Full-service upgrade | `public/media/homepage/wedding.webp`, 1200 × 800 | Reused wedding scene with a photo strip, framed at 16:9 |

The capture scene uses the existing Helio Sport reference, `/media/e71075c0cc841dfe.webp` (`Helio-V3.png`, visually matched to the Silver/Starter equipment), to preserve the machine's main appearance. The phone scene uses the existing homepage birthday image as the photo shown on its screen. No branded app, unverified interface, QR-code workflow or offline-sharing claim is introduced. The existing copy explaining that sharing needs internet is preserved.

The digital hero depicts self-operated capture and phone viewing. Prints appear only in the full-service upgrade section. Captions identify the generated imagery as illustrative rather than documentary customer photography. Original generated PNGs remain in the working asset library; optimized WebP files are versioned with the site.

Both hero images retain the existing staggered 4:5 layout and mobile stacking. Page-specific styling removes the shared minimum height that would otherwise distort the narrow portrait frames. The first image loads eagerly with high priority; the second loads eagerly with normal priority. The upgrade image loads lazily. All have intrinsic dimensions and descriptive alternative text.

The two new WebP files total approximately 200 KiB. Production build and repository tests pass. Browser checks at 1440px, 768px, 390px and 320px confirm all three images load, portrait framing is 4:5, there is no horizontal page overflow, keyboard FAQs and no-JavaScript rendering work, and the booking column remains reachable in the comparison table. A separate desktop/mobile visual review confirms the phone photo and printed strip remain visible. See [results](digital-images-results.json), [desktop screenshot](screenshots/digital-images-1440.webp) and [mobile screenshot](screenshots/digital-images-390.webp).

The package comparison table, prices, 24-hour duration, add-on references, Eventdeskly links, title, description, canonical URL, JSON-LD and section IDs are unchanged. The existing WordPress website is untouched.
