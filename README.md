# SENZ

The SENZ studio website, built with Next.js 16 App Router, React, TypeScript and Tailwind CSS 4. English is the default at `/en`; `/` permanently redirects there. Portuguese, French, Italian and German use equivalent localized paths.

## Run locally

Requires Node.js 20.9 or later. Use Node.js 24 LTS for this project.

```sh
npm ci
npm run dev
```

On Windows with PowerShell script execution disabled, use `npm.cmd` instead of `npm`.

```sh
npm run build
npm run start
npm run lint
npm run typecheck
npm test
```

Install the browser once with `npx playwright install chromium`. Browser tests start the production server automatically when one is not already running. Build before testing. Integration tests assume inquiry delivery is not configured and intercept success/error delivery in the browser, so they never send real email.

With the production server running, `node scripts/visual-audit.mjs` captures desktop/mobile previews and local layout-shift and paint measurements in `test-results/visuals/`. These measurements are unthrottled local observations, not field performance scores.

## Structure

- `src/content/{en,pt,fr,it,de}.ts`: complete localized dictionaries, checked against a shared TypeScript content contract.
- `src/content/index.ts`: studio identity, contact email, social profile configuration and navigation.
- `src/content/media.ts`: approved project media slots. Empty until real assets are supplied.
- `src/content/studio-media.ts`: optional founder portrait, with dimensions and localized alternative text.
- `src/app/[locale]/[[...slug]]/page.tsx`: shared server-rendered pages and page-specific metadata. All 55 public localized pages are prerendered.
- `src/components/`: shared navigation, project artwork, service tabs, disclosures, contact form, page primitives and page sections.
- `src/app/globals.css`: design tokens, typography, grid, project compositions, interaction and responsive rules.
- `src/app/studio.css`: scoped institutional compositions that reuse the existing design tokens.
- `src/app/api/inquiry/route.ts`: validated inquiry delivery boundary.
- `tests/site.spec.ts`: route, SEO, responsive, accessibility, keyboard, form and abuse checks.
- `tests/studio.spec.ts` and `tests/capabilities.spec.ts`: institutional layouts and accessible interactions across languages and viewports.
- `tests/portfolio-visual.spec.ts`: 94 portfolio screenshot comparisons against the pre-revision Chromium/Windows references.

## Inquiry delivery

Copy `.env.example` to `.env.local`. Set `INQUIRY_WEBHOOK_URL` to an HTTPS delivery endpoint and optionally `INQUIRY_WEBHOOK_TOKEN` to a bearer token. These are server-only values. Restart the server after changes.

The endpoint receives `name`, `email`, `company`, `country`, `website`, `need`, `budget`, `description`, `locale` and `submittedAt`. Service values are stable numeric indexes: 0 websites, 1 web applications, 2 custom software, 3 product development, 4 other. Budget indexes are 0 under €1,000; 1 €1,000–€2,500; 2 €2,500–€5,000; 3 €5,000–€10,000; 4 €10,000+; 5 undecided.

The delivery endpoint must return 2xx only once it has durably accepted the inquiry. With no configured endpoint, the form returns an honest unavailable state and provides the email address. It never simulates successful delivery. Delivery failures retain entered text.

The API checks origin, request content type and size, field lengths and formats, allowed service/budget values, a honeypot and minimum completion time. An in-memory ten-minute limit allows three attempts per email address. This limiter resets on process restart and is local to each instance. For public multi-instance deployment, add a shared limiter or an edge rate limit before the endpoint. No inquiry contents are logged or persisted by this application.

## Project assets and publication inputs

The supplied brief is the source for project facts. The current compositions are original CSS artwork and explicitly labelled as illustrations; they are not representations of verified production screens. Approved hero and desktop/mobile screenshots can be configured in `src/content/media.ts` and placed in `public/projects/`. The components use `next/image` for supplied raster assets, with responsive sizes and reserved dimensions.

J.A.R.V.I.S. is the fourth project at `/{locale}/work/jarvis`, identified as an independent project. Its localized content describes the desktop voice stack and web/PWA API integration without naming an unconfirmed AI provider or claiming a public launch. Optional project subtitle, type label and additional case-study sections use the existing page components. No location is displayed when none was supplied. Approved artwork and screenshots can be connected through `projectMedia.jarvis`.

Social URLs are intentionally empty in `site.socials`. Add verified Instagram, LinkedIn and GitHub profile URLs there to show them in the footer. No awards, employees, addresses, testimonials, project years or performance metrics have been invented.

Before public launch, supply the approved project screenshots, verified social URLs, a working destination for `hello@senzcompany.com`, and the inquiry delivery endpoint. Review the informational privacy/terms copy against the actual business identity, hosting provider, delivery provider and retention arrangements. The implementation does not claim these pages are a jurisdiction-specific legal policy.

## Deployment and SEO

Deploy to a Node-compatible Next.js host with `npm run build` and `npm run start`. Static export is not appropriate because inquiry delivery and generated social images use server routes. Configure the apex domain `senzcompany.com`, HTTPS and a single canonical hostname at the host. No site has been deployed by this implementation.

Every public page defines localized title/description, absolute canonical URL, five hreflang alternatives plus `x-default`, Open Graph and Twitter metadata. The site includes an Organization JSON-LD record, sitemap, robots policy and localized social images. No analytics or marketing cookies are installed.

System fonts avoid render-blocking font requests and font-swap layout shifts. Project artwork has no external asset requests. Motion respects reduced-motion preferences. Actual field Core Web Vitals should be checked after deployment; local browser checks cannot establish real-world scores.

## Content and design

Warm paper, charcoal and a muted sage studio accent; the orange surface belongs to the MARCOS CELL illustration. The identity is typographic and can be replaced by an SVG in the shared header/footer. Services use accessible vertical tabs with arrow-key, Home and End navigation. The header, service explorer, capability disclosures and inquiry form are interactive client boundaries.

Use `npm run format` after editing. Keep locale schemas aligned and add new public paths to both page generation and the sitemap.

The About page includes a restrained technical-capabilities section after the studio principles. Edit `capabilities` in each locale dictionary to update its six groups. `Capabilities` renders the section on the server; the reusable `Disclosure` component handles independent open/closed state, keyboard-native buttons, synchronized ARIA attributes and reduced-motion-aware CSS expansion. Only technologies supplied by the founder are listed. The founder/photo area is separate from this addition.

The founder composition reserves a portrait area alongside the editorial introduction. Place an approved photograph in `public/images/` and configure `studioMedia.portrait` in `src/content/studio-media.ts`; its `src` starts with `/images/`. Until configured, the area displays the existing typographic monogram. Institutional layouts and motion remain separate from portfolio components and styles.
