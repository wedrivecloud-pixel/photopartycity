# Self-service page imagery

Created on 20 October 2026 at the owner's request to fill the Self-Service Photo Booth Rental page.

All four image areas are populated. At the owner's request, the three cards in “Three booths. One full day of fun.” now reuse the same guest scenes as their matching packages-page cards.

| Placement | Asset | Purpose |
| --- | --- | --- |
| Hero | `public/media/self-service/hero.webp`, 1200 × 1500 | New AI-generated backyard birthday scene of adult guests operating a Helio Sport themselves |
| Starter | `public/media/packages/helio-self-service.webp`, 1200 × 800 | Guests operating the Helio Sport at a backyard party |
| Showbiz | `public/media/packages/lumia-self-service.webp`, 1200 × 800 | Graduates posing with props beside the Lumia M Pro |
| Hollywood | `public/media/packages/posh-self-service.webp`, 1200 × 800 | Guests operating the Posh Pro with its tall portrait display |

The [supplied packages reference](https://photopartycity.com/photo-booth-packages/) and its existing equipment photography guide the model appearance. The hero uses `/media/e71075c0cc841dfe.webp` (`Helio-V3.png`, visually matched to the Helio Sport in the Silver/Starter artwork) as its equipment reference. It depicts self-operated digital photos without an attendant, printer or printed keepsakes. The three guest scenes and their model references are documented in [packages images](packages-images.md).

These are illustrative promotional scenes, identified by visible captions and descriptive alternative text. They do not document a customer event. The original generated hero PNG remains in the working asset library; the optimized WebP is versioned with the site.

The hero loads eagerly with high priority. The three card images load lazily and reuse the same cached files as the packages page. No new image files are added by this swap. Intrinsic dimensions prevent image loading from shifting the layout. Page-specific styling preserves the existing 3:2 card crops and 4:5 hero framing.

The new hero is approximately 173 KiB. Production build and repository tests pass. Browser checks at 1440px, 768px, 390px and 320px confirm all four images load, there are no empty slots or horizontal overflow, product cards retain their 3:2 framing, keyboard FAQs work, and the no-JavaScript page remains usable. See [results](self-service-images-results.json), [desktop screenshot](screenshots/self-service-images-1440.webp) and [mobile screenshot](screenshots/self-service-images-390.webp).

Prices, 24-hour rental duration, add-on charges, Eventdeskly destinations, pickup details, title, description, canonical URL, JSON-LD and section IDs are unchanged. The existing WordPress website is untouched.
