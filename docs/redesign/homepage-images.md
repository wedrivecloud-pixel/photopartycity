# Homepage imagery

Created on 20 October 2026 at the owner's request to fill the homepage's empty image areas.

Seven AI-generated promotional scenes share warm lighting, cream/lilac/plum colors and centered subjects. They are illustrative event imagery, not records of customer events, testimonials, or photographs of a particular rental model. Visible captions identify the illustrative imagery; existing event photographs remain in the hero and photo wall.

| Asset in `public/media/homepage/` | Scene | Homepage placement |
| --- | --- | --- |
| `wedding.webp` | Wedding couple and adult friends with a photo strip | Full-service rental card; weddings tile |
| `birthday.webp` | Adult friends celebrating with party props | Self-service rental card; birthdays tile |
| `mail.webp` | Adults unpacking an unbranded portable celebration kit | Booth-by-mail rental card |
| `corporate.webp` | Colleagues posing with celebration props | Corporate events tile; photo wall |
| `quinceanera.webp` | Quinceañera with family and friends | Quinceañeras tile |
| `graduation.webp` | College graduates with a photo keepsake | Graduations tile; photo wall |
| `school.webp` | Friends posing at a school celebration | School events tile |

All delivered assets are 1200 × 800 WebP images. Images below the fold load lazily, have intrinsic dimensions and descriptive alternative text, and use the existing responsive card crops. The hero's decorative photo strip reuses existing event photography.

The seven files total approximately 549 KiB. The production build and repository tests pass. Browser checks at 1440px, 390px and 320px confirm every image loads, all 11 slots are filled, the wall crops fit, and there is no horizontal overflow. Rental modes, ZIP switching and the no-JavaScript fallback pass; the homepage's metadata, links and JSON-LD are unchanged. See [results](homepage-images-results.json), [desktop screenshot](screenshots/home-images-1440.webp) and [mobile screenshot](screenshots/home-images-390.webp).

Generation direction: individual landscape editorial lifestyle scenes, natural expressions and anatomy, warm light, subtle film grain, centered groups, no logos, readable text, watermarks, school emblems or branded booth equipment. Original generated PNGs are retained in the working asset library; optimized WebP files are versioned with the website.

The homepage photo-wall style also explicitly reaches the shared Photo component, so its images fill their grid cells at desktop and mobile widths.

Approved guest photography and verified review text are still needed for the remaining site's launch checklist. No customer stories or review claims were generated.
