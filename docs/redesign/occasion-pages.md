# Occasion rental pages

Created on 21 October 2026. Four new static pages give the existing event tiles dedicated destinations instead of sending visitors to a general rental page.

| New route | Event key | Page focus |
| --- | --- | --- |
| `/birthday-photo-booth-rental/` | `birthday` | Birthday guest mix, party themes, hosting, and timing around cake or entertainment |
| `/quinceanera-photo-booth-rental/` | `quinceanera` | Family keepsakes, celebration colors, a photo design, and the reception schedule |
| `/graduation-photo-booth-rental/` | `graduation` | Graduation gatherings, guest flow, keepsakes, and time around ceremony or party plans |
| `/school-event-photo-booth-rental/` | `school` | School spirit, coordinator details, guest flow, photo design, and venue access |

Each static route looks up its entry in `src/data/occasion-events.ts` and renders the shared `OccasionPage.astro` template. The data includes a unique title, description, H1, introduction, three fit points, styling guidance, three planning steps, checklist, five substantive FAQs, and closing CTA. The copy addresses each occasion’s practical needs; it is not the same page with its event name replaced. The existing wedding and corporate pages keep their current templates and copy.

The template uses the existing cream-and-purple rental design, header, footer, hero, photo, and native FAQ components. Its styles are scoped, retain 4:3 hero and 3:2 supporting frames, and remove the shared hero minimum height for narrow screens. No new runtime dependencies or page-specific JavaScript are added.

## Rental options and booking

Both rental cards read the original tier records from `src/data/rentals.ts`: **Silver from $695 for 3 hours** and **Starter from $199 for 24 hours**. Their prices, duration, model, and original Eventdeskly package destinations are read directly from that data. Each card shows one price and keeps the “Check your date” button label.

The full-service card explains the attendant, printing during booked hours, personalized design, backdrop, props, delivery, setup, takedown, and 30-day gallery. The self-service card explains host-managed digital use and explicitly excludes an attendant, printing, a physical backdrop, delivery, setup, and collection from its base rate. Optional extras and applicable venue or travel charges remain subject to the proposal. The cards reuse `/media/full-service/helio-sport.webp` and `/media/packages/helio-self-service.webp`; their earlier illustrative-equipment provenance is covered by [full-service imagery](full-service-images.md) and [packages imagery](packages-images.md).

Hero, header, sticky-bar, and checklist links use `/check-your-date/?event=birthday`, `?event=quinceanera`, `?event=graduation`, or `?event=school` as appropriate. The optional `RentalLayout.eventType` prop is forwarded to `CtaBand`, which renders a hidden `event` field. Submitting the date/ZIP form retains the selected occasion alongside `date` and `zip`, including without JavaScript. With JavaScript enabled, the existing Check your date page prefills its event selection; its native no-JavaScript booking links remain available. Direct tier-card links continue to use their original Eventdeskly package URLs.

## Imagery and provenance

Four new heroes were generated with `image_gen.imagegen` for these pages. All are **1200 × 900 WebP**, **4:3**, quality **82**, totaling **521,372 bytes**, approximately **509 KiB**. They are imagined promotional illustrations, not photographs of real customers, employees, schools, or venues. No geographic landmarks, named organizations, or endorsements identify the scenes as actual bookings. Captions say “Illustrative celebration scene,” and alt text describes the people, setting, and equipment.

Generation used the existing `public/media/full-service/` equipment images as references, preserving each model’s characteristic head, column, and base while creating new people and settings. Original product-reference history is recorded in [full-service imagery](full-service-images.md).

| New asset in `public/media/occasions/` | Imagined scene / equipment reference | Bytes |
| --- | --- | --- |
| `birthday.webp` | Three adult friends at an indoor milestone birthday; `helio-sport.webp` | 116,546 |
| `quinceanera.webp` | An honoree sharing a keepsake with her parents at a formal family celebration; `posh-pro.webp` | 158,578 |
| `graduation.webp` | Three adult college graduates at a daytime garden open house; `lumia-m-pro.webp` | 152,138 |
| `school.webp` | Three adult students at a bright school/community celebration; `helio-sport.webp` | 94,110 |

Prompts asked for distinct settings and people, plausible anatomy, visible faces and hands, and the complete booth within safe crop margins. Birthday and school scenes use digital booth interactions; graduation and quinceañera scenes include illustrative photo keepsakes. These visuals do not alter the rental inclusions described by the selected package.

The original generated PNG jobs are `exec-5b483981-5593-468e-a44d-4e32b3de9732` (birthday), `exec-c52b1b9a-a5b4-45cc-8828-fd538bcfcfdf` (quinceañera), `exec-66e73f84-8c4e-49d4-882a-aeda2128df0b` (graduation), and `exec-fa512867-6d63-4f38-b328-e313c6e9a179` (school). Their prompts, original paths, references, dimensions, and optimization metadata are recorded in the working manifests `assets-rental.json`, `assets-quince.json`, and `assets-school.json` under `/workspace/work/occasion-pages/`.

Each page also reuses its matching 1200 × 800 homepage illustration as a 3:2 supporting image: `/media/homepage/birthday.webp`, `quinceanera.webp`, `graduation.webp`, or `school.webp`. These are existing files documented in [homepage imagery](homepage-images.md). Heroes load eagerly with high fetch priority; cards and supporting images load lazily. All images declare intrinsic dimensions and have descriptive alt text.

## Navigation, SEO, and preservation

The four new destinations replace the earlier fallback links in homepage event tiles, the desktop Events menu, footer, mobile Events menu, and no-JavaScript mobile navigation. These menus read the shared six-item `eventNavigation` array, including the existing wedding and corporate destinations. Each new page also links to the other five events. The full-service page’s birthday tile now points to the birthday page.

Each new page has one H1, its own production-domain canonical and `og:url`, and its hero as the Open Graph image. The shared layout emits LocalBusiness and BreadcrumbList data; Service schema offers the central Silver and Starter tiers, and the FAQ component emits the five questions shown on the page.

Existing business copy, package data, booking URLs, and shop routes are retained. The 31 existing rental pages’ titles, descriptions, canonicals, schema, prices, and anchors are preserved; event-navigation links intentionally change to the new destinations. There are now **267 generated pages** and **35 rental routes**. The existing WordPress website is untouched.

## Validation evidence

`npm run build` and `npm test` pass: 267 generated pages, 35 rental routes and zero Astro errors, warnings or hints. Vite retains the existing ZIP-data chunk-size warning. Tests use mocked contact responses and send no email. Persistent verification covers the new routes, distinct metadata, canonicals, schema, central starting prices, original booking URLs and event-form context.

The [machine-readable results](occasion-pages-results.json) record 20 new-page checks at 1440, 1024, 768, 390 and 320px; four 390px no-JavaScript flows; 20 real event-link navigations; and 70 desktop/phone smoke checks across all 35 routes. Images load in the intended frames without overflow or runtime errors. Hero links and final date/ZIP submissions retain the event key and prefill the existing checker. Native FAQs and JavaScript-free booking paths pass. All 31 existing-route metadata, schema, price, ID, service-link and main-content contracts are preserved, apart from the intended homepage/full-service event link replacements.

Twelve axe scans of desktop/mobile pages and open mobile drawers report zero violations. Keyboard FAQs, skip links, focus trapping, Escape and focus restoration pass. The mobile-menu close handler is asynchronous; the harness waits for the actual closed/focus-restored state.

Separate visual review at all five widths confirms complete faces, booth equipment and keepsakes, readable captions, distinct occasion copy, and clear prices/buttons/planning/FAQ sections. Both JavaScript and native mobile menus show all six Events links with usable scrolling.

| Page screenshots | 1440 px | 390 px |
| --- | --- | --- |
| Birthday | [Desktop](screenshots/occasion-birthday-1440.webp) | [Mobile](screenshots/occasion-birthday-390.webp) |
| Quinceañera | [Desktop](screenshots/occasion-quinceanera-1440.webp) | [Mobile](screenshots/occasion-quinceanera-390.webp) |
| Graduation | [Desktop](screenshots/occasion-graduation-1440.webp) | [Mobile](screenshots/occasion-graduation-390.webp) |
| School event | [Desktop](screenshots/occasion-school-1440.webp) | [Mobile](screenshots/occasion-school-390.webp) |
