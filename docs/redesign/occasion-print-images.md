# Occasion print imagery

**Archived image-swap record.** The two-option section described below has been replaced by the shared three-package section used on Weddings and Corporate Events, as requested in the subsequent layout update. See [the current package section](occasion-packages.md). These generated image assets and their original files remain saved, but the current package cards use the three reference equipment images.

The full-service card under “Two ways to bring everyone together” now uses a different people-and-keepsakes image for each of the four occasion pages. The screenshot supplied with this request showed the shared Helio Sport equipment image, so this update replaces that card image. Heroes and the digital self-service cards retain their existing imagery.

| Page | Local asset in `public/media/occasions/` | Scene |
| --- | --- | --- |
| Birthdays | `birthday-prints.webp` | Three adult friends smiling at a patio party while holding photo strips and a small print |
| Quinceañeras | `quinceanera-prints.webp` | A lavender-gowned honoree and family smiling over a photo print and strip |
| Graduations | `graduation-prints.webp` | Three adult graduates in caps and gowns sharing photo strips and a snapshot |
| School events | `school-prints.webp` | Students enjoying a celebration and holding printed photo keepsakes |

These images were generated with `image_gen.imagegen` as fictional promotional scenes. They depict no identified customer, school, employee, or venue. A booth appears in the background to establish context; the guests and physical printouts are the subjects. Captions identify each scene as illustrative, and event-specific alt text describes its visible content.

The four local WebPs total **462,908 bytes** (about 452 KiB), using a 1200 × 800, 3:2 frame, quality 82, with intrinsic dimensions and lazy loading. Only resizing and compression are applied after generation. Original PNGs remain preserved under `/workspace/generated_images/`; copies and generation metadata are under `/workspace/work/occasion-prints/` by event key. No remote image dependency is introduced.

Generation IDs are `exec-d6a1fdda-80ce-4c0d-a041-13e27d8b7072` (birthday), `exec-1267deb6-9797-4634-8f7c-349f707b5c09` (quinceañera), `exec-ef4a5388-9b0b-4000-9631-1599eeedb9bf` (graduation), and `exec-5e4e357a-a390-4557-a360-159d8378f300` (school). The school image was refined with `image_gen.imagegen` to give all heads more room in the frame before optimization; its initial generation was `exec-fe468d10-8986-4515-ace3-eb834060ef2e`.

The shared occasion data now supplies a typed `fullServiceImage` record to the full-service card. Package copy, prices, Eventdeskly destinations, check-date context, page titles, descriptions, canonicals, JSON-LD, anchors, heroes, supporting images, and self-service images retain their prior values.

## Validation

`npm run build` and `npm test` pass: 267 generated pages and 35 rental routes. The [focused browser results](occasion-prints-results.json) contain 20 checks across 1440, 1024, 768, 390, and 320px, four 390px no-JavaScript image checks, and zero errors. All new files decode at their declared dimensions, retain 3:2 framing, and display meaningful alt text and illustrative captions without horizontal overflow or runtime errors.

Each complete page DOM was compared against an immutable pre-change build after normalizing only the full-service image source, alt text, and caption. All four comparisons pass, including separate checks for booking links, prices, business copy, metadata, canonical, JSON-LD, IDs, hero, and other images.

| Rental-options screenshots | 1440 px | 390 px |
| --- | --- | --- |
| Birthdays | [Desktop](screenshots/occasion-prints-birthday-1440.webp) | [Mobile](screenshots/occasion-prints-birthday-390.webp) |
| Quinceañeras | [Desktop](screenshots/occasion-prints-quinceanera-1440.webp) | [Mobile](screenshots/occasion-prints-quinceanera-390.webp) |
| Graduations | [Desktop](screenshots/occasion-prints-graduation-1440.webp) | [Mobile](screenshots/occasion-prints-graduation-390.webp) |
| School events | [Desktop](screenshots/occasion-prints-school-1440.webp) | [Mobile](screenshots/occasion-prints-school-390.webp) |
