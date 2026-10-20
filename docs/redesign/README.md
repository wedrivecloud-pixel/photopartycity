# Rental website redesign — review preview

Built from the supplied **Photo Party City — Site Redesign Build Spec.docx** and **Photo Party City — Website redesign.html**, dated 20 October 2026. The HTML contains six complete rental artboards plus mobile variants; the remaining pages apply their shared tokens and components to the specification's structure.

This branch is a review preview. It is not merged into main and does not change photopartycity.com, its DNS, or MXroute email.

## Implemented

- Shared cream/purple design, locally hosted Bricolage Grotesque and Figtree fonts with original licenses, responsive navigation, keyboard-trapped mobile drawer, CTA forms, footer and mobile sticky bar.
- Two-audience homepage, near/ship toggle, automatic ZIP mode switching, rental cards, photo wall, event links, service-area illustration and native FAQs.
- Seven coordinated AI-generated [homepage images](homepage-images.md) fill all 11 formerly empty rental-card, photo-wall and event-tile slots. The hero photo strip also contains images. Captions distinguish illustrative scenes from existing event photographs.
- Six rental pages, 11 city pages, wedding/corporate templates, About, rental cost guide, props/backdrops, policies, contact, blog index and four posts.
- Central prices and original Eventdeskly destinations in `src/data/rentals.ts`. Package calculators removed in favor of one displayed price per tier. The 360 duration controls update individual prices.
- `/check-your-date/` with real ZIP-centroid distance calculations and local/shipping/unsupported/invalid results. Old form URLs and duplicates redirect, and the five-booth-types article has its corrected slug.
- Cloudflare contact handler with validation and explicit success/error states. No rental form opens an email draft. Ordinary email links remain mailto links.
- LocalBusiness, Service/Offer, FAQ and breadcrumb schemas, canonical metadata, conversion dataLayer events, local fonts, image dimensions and lazy loading below the fold.

The shop and 188 product pages keep their legacy layout, styles, metadata, schemas, prices and product links. The legacy layout, global stylesheet, source page inventory and business data are unchanged.

## Verification

- `npm run build`: 263 generated pages; Astro type checking reports zero errors, warnings or hints. Vite reports a size warning for the existing ZIP-data JavaScript chunk.
- `npm test`: ZIP/distance/date and contact-handler mock cases, all route/metadata/image/schema checks, price and booking contracts, redirects and catalog preservation pass. Tests never send email.
- Browser: all 31 redesigned routes at 1440px and 390px; no horizontal overflow, runtime errors, duplicate IDs, unexpected filled CTA labels, or email-draft forms. Menus, focus trapping, Escape behavior, FAQ keyboard toggles, home ZIP/toggle, sticky spacer, 360 duration controls and booking links pass. No-JavaScript menu/FAQ/booking fallbacks work. Homepage also checked at 320px.
- Contact UI: mocked failure and successful provider responses, reset and error recovery pass at both widths. Provider acceptance is tested independently; real inbox delivery is pending configuration.
- Local mobile Lighthouse: performance **98**, accessibility **100**, best practices **100**, SEO **100**. LCP **2.3s**, CLS **0**, total blocking time **0ms**. These are local lab measurements, not production field guarantees.

See [screenshots](screenshots/), [browser results](browser-results.json), [route list](routes.json), [performance metrics](performance-summary.json), and [Lighthouse report](lighthouse-home.html). Booking/contact details are in [booking-and-contact.md](booking-and-contact.md).

## Needed before a public launch

1. **Guest photos and reviews:** only four distinct guest photographs were found in the existing library. Suitable existing images are used on home, city and event pages. At the owner's request, the homepage's empty image slots now use clearly captioned AI-generated event scenes; other pages retain labelled photo slots. Supply the remaining approved photography and verified review text/source URLs. No star rating, review count or fictional customer quotation is published in this preview. Client-logo claims are omitted pending permission.
2. **Email:** configure `RESEND_API_KEY` and `CONTACT_FROM` in Cloudflare Pages Preview/Production. The current endpoint truthfully returns an unavailable message without them. Set optional `CONTACT_TO` and Turnstile variables as documented, then complete a real inbox test. Do not paste secrets in chat or source.
3. **Rental details:** confirm local deposit/balance/cancellation terms, mail print/protection prices, and shipping/support claims. Unconfirmed prices are described as proposal-confirmed rather than invented. Existing mail return/cancellation terms are retained.
4. **360 booking:** provide a dedicated Eventdeskly group/package. Until then, the checker clearly routes to the original general business booking and asks visitors to confirm 360 availability. Date forwarding is not invented because Eventdeskly parameter support is unconfirmed.
5. **Content decisions:** birthday/quinceañera/graduation/school tiles point to existing suitable rental pages until their copy is approved. The two business-owner articles keep their existing URLs and are separated from event articles. Confirm whether to migrate them later. Review the original shop returns email retained in the policy.
6. **Ads:** connect the documented dataLayer events to the business's consent-aware Google Tag Manager/Ads configuration. No account or conversion ID was supplied or fabricated.

The preview should remain separate from main until these launch items are resolved. There is no bracketed placeholder text in rendered rental pages; labelled photo slots and the guest-story area are intentional review placeholders.
