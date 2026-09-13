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
- `src/content/media.ts`: supplied project screenshots and optional additional media slots.
- `src/content/studio-media.ts`: optional founder portrait, with dimensions and localized alternative text.
- `src/app/[locale]/[[...slug]]/page.tsx`: shared server-rendered pages and page-specific metadata. All 55 public localized pages are prerendered.
- `src/components/`: shared navigation, project artwork, service tabs, disclosures, contact form, page primitives and page sections.
- `src/app/globals.css`: design tokens, typography, grid, project compositions, interaction and responsive rules.
- `src/app/studio.css`: scoped institutional compositions that reuse the existing design tokens.
- `src/app/api/inquiry/route.ts`: validated inquiry delivery boundary.
- `tests/site.spec.ts`: route, SEO, responsive, accessibility, keyboard, form and abuse checks.
- `tests/studio.spec.ts` and `tests/capabilities.spec.ts`: institutional layouts and accessible interactions across languages and viewports.
- `tests/portfolio-visual.spec.ts`: 94 portfolio screenshot comparisons using Chromium/Windows references, updated when project visuals are intentionally changed.

## Inquiry delivery

Copy `.env.example` to `.env.local`. Set `INQUIRY_WEBHOOK_URL` to an HTTPS delivery endpoint and optionally `INQUIRY_WEBHOOK_TOKEN` to a bearer token. These are server-only values. Restart the server after changes.

The endpoint receives `name`, `email`, `company`, `country`, `website`, `need`, `budget`, `description`, `locale` and `submittedAt`. Service values are stable numeric indexes: 0 websites, 1 web applications, 2 custom software, 3 product development, 4 other. Budget indexes are 0 under €1,000; 1 €1,000–€2,500; 2 €2,500–€5,000; 3 €5,000–€10,000; 4 €10,000+; 5 undecided.

The delivery endpoint must return 2xx only once it has durably accepted the inquiry. With no configured endpoint, the form returns an honest unavailable state and provides the email address. It never simulates successful delivery. Delivery failures retain entered text.

The API checks origin, request content type and size, field lengths and formats, allowed service/budget values, a honeypot and minimum completion time. An in-memory ten-minute limit allows three attempts per email address. This limiter resets on process restart and is local to each instance. For public multi-instance deployment, add a shared limiter or an edge rate limit before the endpoint. No inquiry contents are logged or persisted by this application.

## Project assets and publication inputs

The public portfolio order is VANTA, LUZEN, Restaurant Management Platform, shared by all five languages. VANTA is explicitly a fictional fashion concept by SENZ; its localized copy and SEO live in `src/content/vanta.ts`. Its supplied recording is used on the homepage, work listing and case page through the shared `ProjectLoop` component. LUZEN keeps its own case composition and approved cover; Restaurant Management Platform retains its supplied screenshot and content.

`public/projects/vanta/vanta_video_senz.mp4` is the original 1920×1080, 52.47-second recording with its MP4 metadata moved ahead of the media payload for progressive loading. No frames or audio were re-encoded. The original remains in `images/`. The poster is a frame extracted from that recording. See `public/projects/vanta/README.md` for media behavior and validation limits.
Social URLs are intentionally empty in `site.socials`. Add verified Instagram, LinkedIn and GitHub profile URLs there to show them in the footer. No awards, employees, addresses, testimonials, project years or performance metrics have been invented.

Before public launch, supply the approved project screenshots, verified social URLs, a working destination for `senz@senzcompany.com`, and the inquiry delivery endpoint. Review the informational privacy/terms copy against the actual business identity, hosting provider, delivery provider and retention arrangements. The implementation does not claim these pages are a jurisdiction-specific legal policy.

## Deployment and SEO

Deploy to a Node-compatible Next.js host with `npm run build` and `npm run start`. Static export is not appropriate because inquiry delivery and generated social images use server routes. Configure the apex domain `senzcompany.com`, HTTPS and a single canonical hostname at the host. No site has been deployed by this implementation.

Every public page defines localized title/description, absolute canonical URL, five hreflang alternatives plus `x-default`, Open Graph and Twitter metadata. The site includes an Organization JSON-LD record, sitemap, robots policy and localized social images. No analytics or marketing cookies are installed.

System fonts avoid render-blocking font requests and font-swap layout shifts. Project artwork has no external asset requests. Motion respects reduced-motion preferences. Actual field Core Web Vitals should be checked after deployment; local browser checks cannot establish real-world scores.

## Content and design

The existing warm paper, charcoal and sage identity is unchanged. Project previews use a lead VANTA video above a quieter LUZEN / restaurant row, stacking in the same order on mobile. The case navigation follows VANTA → LUZEN → Restaurant Management Platform → VANTA. Institutional sections retain their existing components and interactions.

The shared locale layout includes a two-second typographic brand intro, built with CSS and a small inline bootstrap in `src/components/brand-intro.tsx`. It reuses the existing lowercase wordmark and palette. `sessionStorage['senz-intro-seen']` suppresses replay across navigation, locale changes and refreshes in the same tab. To preview again, open a fresh browser session or clear that key and reload.

The bootstrap runs before body paint to avoid a flash on returning visits. It does not depend on hydration or block page rendering. Reduced motion, disabled JavaScript or unavailable session storage skip the intro. Keyboard, pointer, focus and page-exit interactions release it immediately; normal completion uses a fade and a 2.2-second fallback. All temporary scroll rules depend on one root attribute, which is removed on completion. No content is made inert or hidden from assistive technology. The `suppressHydrationWarning` on the root element is scoped to this intentional pre-hydration attribute. The intro has no heading or focusable content.

Use `npm run format` after editing. Keep locale schemas aligned and add new public paths to both page generation and the sitemap.

The About page includes a restrained technical-capabilities section after the studio principles. Edit `capabilities` in each locale dictionary to update its six groups. `Capabilities` renders the section on the server; the reusable `Disclosure` component handles independent open/closed state, keyboard-native buttons, synchronized ARIA attributes and reduced-motion-aware CSS expansion. Only technologies supplied by the founder are listed. The founder/photo area is separate from this addition.

The founder composition displays the supplied portrait from `public/images/studio/enzo_foto2.jpeg`. Configure `studioMedia.portrait` in `src/content/studio-media.ts` to replace it; setting it to `null` restores the typographic monogram. Institutional layouts and motion remain separate from portfolio components and styles.

## LUZEN

Localized copy is in `src/content/luzen.ts`, referenced by the five existing dictionaries. The dedicated `LuzenCase` reuses SENZ navigation, tokens and project navigation. Optional images and video are detected by `src/content/luzen-media.ts` at build time. Rebuild after adding files. No stack or implemented store features are assumed.

Run `node scripts/test-project-loop.mjs` to verify the video using a temporary local fixture and a generated test-only recording. Stop the development server first; the script uses port 3001 and removes its fixture route on completion.
