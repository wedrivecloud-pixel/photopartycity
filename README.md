# Photo Party City

Photo Party City's static Astro website, rebuilt from the live WordPress site on October 13, 2026, using **ScrewFast** as the base.

```sh
npm ci
npm run dev
npm run build
npm test
npm run preview
```

Node.js 24 is used in CI. In environments with a read-only home directory, set `ASTRO_TELEMETRY_DISABLED=1` when running Astro commands. Deploy the generated `dist/` directory.

## Content and structure

- `src/data/pages.json`: migrated page, blog, product, and archive content, original SEO metadata, and structured data.
- `src/pages/index.astro`: custom homepage using ScrewFast's responsive hero and CTA components.
- `src/pages/[...slug].astro`: all original page/product/archive paths, inquiry forms, and searchable catalog.
- `src/data/brand.ts`: service area, contacts, service navigation, Eventdeskly booking URL, and LocalBusiness schema.
- `src/styles/global.css`: responsive Photo Party City styling, accessible navigation/forms, and reduced-motion support.
- `public/media/`: locally hosted, optimized images with intrinsic layout dimensions.
- `public/wp-content/uploads/`: original image paths retained so existing image URLs continue working.
- `docs/url-inventory.json`: source route and SEO audit inventory.
- `docs/MIGRATION.md`: coverage, behavior changes, remaining external images, and deployment notes.

There are 267 migrated routes: 39 WordPress pages, four blog posts, 188 products, and 36 author/category/tag archives. A new blog index and 404 page bring the generated total to 269 pages. No source page slug was renamed. The build produces a sitemap and robots.txt; legacy sitemap aliases are redirected using `public/_redirects`.

## Booking and inquiries

The original Eventdeskly booking links and business ID are retained. Inquiries use the existing form fields to prepare an email to `hello@photopartycity.com`. The visitor reviews and sends the message through their email app. These forms do **not** submit to Fluent Forms or guarantee delivery/reservation; they clearly explain this before use. WordPress/WooCommerce account, cart, checkout, and rental-plugin operations need a separately retained backend to continue operating.

## Theme attribution

Base: [ScrewFast](https://github.com/mearashadowfax/ScrewFast), upstream commit `a9ee3b8eb9b4740338dc1a467f37fc85a7151edc`, linked from the [Astro theme directory](https://astro.build/themes/details/screwfast/). The retained hero, CTA, and icon components come from ScrewFast and have been adapted for Photo Party City. Demo pages, demo content, construction branding, translations, documentation portal, authentication demos, and unused client animation libraries are excluded. Upstream MIT licensing is retained in `LICENSE`; business copy and photos remain their respective owners' content.

## Verification

`npm run build` runs Astro type checks and the production static build. `npm test` checks all migrated routes, original titles and canonicals, JSON-LD parsing, local image existence, a single H1 per page, original business details, and the Eventdeskly business ID. GitHub Actions runs those checks on pushes and pull requests. The homepage has been rendered and reviewed in Chromium at desktop (1440 px) and mobile (390 px) widths, with no horizontal overflow or broken visible images. Actual Eventdeskly/email interactions have not been browser-tested.
