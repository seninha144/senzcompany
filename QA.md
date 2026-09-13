# Verification — 13 September 2026

## Current portfolio update

- Build, TypeScript, ESLint and repository formatting checks pass.
- 63 Playwright tests pass in the final run, with the server started separately. The earlier run completed all assertions but stalled during automatic server shutdown on Windows.
- 50 localized content pages return the correct routes, titles, canonical URLs and language alternatives. The ten page types across five languages were checked at 320, 360, 375, 390, 430, 768, 1024, 1280, 1366, 1440 and 1920px without horizontal overflow or browser console/runtime errors. Accessibility scans pass at 390 and 1440px.
- VANTA leads the portfolio as a fictional concept, followed by LUZEN and Restaurant Management Platform. The removed case routes return 404 in every language and have no sitemap entries. No obsolete project references remain in source, public assets or current documentation; negative route tests intentionally retain the old identifiers.
- The 78 current portfolio screenshot references were updated for the requested changes and passed again without updates. Desktop, tablet and mobile compositions were visually inspected.
- The actual VANTA MP4 plays muted, looping and inline in Chromium. Deferred loading, pause/resume, card navigation and reduced-motion behavior pass. Its 16:9 dimensions are reserved before loading. The published MP4 has progressive-loading metadata; its media payload SHA-256 matches the supplied original exactly.
- Windows WebKit reports unsupported media for both VANTA and the existing LUZEN MP4. iPhone/iPad emulation validates inline attributes, poster fallback and layout; physical Safari/iPhone playback remains unverified.

## Previous verification — 12 September 2026

## Build and code

- Next.js 16.3.4 production build passes; 55 localized content pages are prerendered.
- TypeScript, ESLint and Prettier checks pass.
- Dependency installation audit reported zero vulnerabilities.

## Browser coverage

All 62 Playwright tests passed in the latest complete Chromium run. The 16 portfolio visual tests passed against the existing references, with 94 screenshot comparisons and no baseline updates for the brand intro.

- All 55 pages return HTTP 200 with one primary heading and the correct document language.
- All 55 pages provide the expected absolute canonical URL, five language alternatives plus `x-default`, and an absolute social image URL.
- Five localized Open Graph images return valid PNG responses.
- All eleven page types in all five languages were checked at 320, 375, 390, 430, 768, 1024, 1280, 1440 and 1920 pixels: 495 combinations, with no horizontal document overflow or browser runtime/console errors.
- All 55 pages were scanned with axe at 390 and 1440 pixels: 110 scans, with no violations under the WCAG 2 A, WCAG 2 AA and WCAG 2.1 AA rule tags.
- Case-study language switching preserves the equivalent route.
- Mobile menu opening, initial focus, forward/reverse keyboard focus wrap, Escape dismissal, language selection and navigation cleanup pass. Body scrolling is restored on close and after navigating through the header CTA.
- Required fields, sending, unavailable integration, delivery failure and success states pass. Success/failure delivery responses are intercepted in browser tests; no real email is sent.
- API origin checks, malformed data, excessive payload size, honeypot rejection, invalid URL rejection and attempt limiting pass.
- Root redirect, missing-route responses, sitemap URL count, robots configuration and reduced-motion behavior pass.

## Visual and performance review

The brand intro uses the existing lowercase SENZ wordmark, paper/ink/sage colors and easing. Eight dedicated browser tests cover its first visit, keyboard dismissal, responsive centering at 320/768/1440px, session persistence, client navigation, locale changes, refresh, interrupted entry, reduced motion, denied session storage, disabled JavaScript and failed hydration downloads. The intro initializes before body paint and releases its scroll lock independently of React hydration. Its normal CSS duration is two seconds, with a 2.2-second JavaScript fallback.

Desktop, tablet and mobile intro frames were visually inspected. WebKit 26.6 checks passed on desktop and emulated iPhone 13 / iPad viewports for completion, session persistence, reload, centered composition and restored scrolling. These are emulations on Windows, not tests on physical iOS hardware. No page or project content was redesigned.

The isolated `scripts/test-project-loop.mjs` check used a temporary generated WebM fixture, then removed its test route. It verified deferred media requests, actual muted looping playback, inline playback without native controls, manual pause/resume, offscreen pause and reduced-motion poster behavior. No test media is published. The final production build succeeds without any LUZEN media files. Build, typecheck, lint and formatting passed.

The institutional visual revision introduces an asymmetrical founder composition, interactive service tabs, an alternating process timeline and editorial principles. The capabilities accordion retains its accessible interaction. Homepage, About and Services were visually reviewed across desktop, tablet and 320px mobile, including long French and German copy. Six new studio tests cover all five languages, service selection, 15 scoped accessibility scans, keyboard navigation and reduced motion.

At completion of the institutional revision, 16 visual regression tests with 94 screenshot comparisons passed with zero differing pixels against the pre-revision references, including selected work, work listings, all four case studies and project hover states. Source comparisons also confirmed unchanged project content, Work component, case-study rendering and original global styles; new institutional styles are scoped in `studio.css`.

The About technical-capabilities addition passed six new tests: five localized content/responsive/accessibility checks and one keyboard/reduced-motion interaction check. All six disclosures were opened at every requested width in all five languages, with 45 scoped axe scans returning no violations. Verified initial collapsed state, independent expansion, linked ARIA IDs, hidden/inert closed content, arrow rotation, Enter/Space activation, focus preservation and rapid toggling. Desktop, French tablet and German 320px mobile layouts were reviewed visually. Production build, typecheck and lint passed after the addition.

Desktop and mobile home compositions, German mobile wrapping, project presentation, and the desktop inquiry page were inspected visually. Corrections included a German case-navigation overflow, small-label contrast, the mobile project-caption overlap and a scroll-lock edge case.

Unthrottled local homepage measurements at 390 and 1440 pixels recorded zero cumulative layout shift for all five languages. These are local observations; they do not establish deployed Core Web Vitals or field performance. Real-user interaction latency, network conditions and other browser engines need deployment-stage assessment.

Run `node scripts/visual-audit.mjs` with the production server running to generate screenshots and local measurements under `test-results/visuals/`. Run `npm test` to reproduce the automated checks.

## Remaining publication inputs

- LUZEN media listed in `public/projects/luzen/README.md`. The other three project covers already use supplied screenshots.
- Verified studio social profile URLs: empty configuration entries stay hidden.
- An operational studio mailbox and an HTTPS inquiry delivery endpoint: without configuration the form clearly reports that online delivery is unavailable.
- Business-specific privacy/terms details, actual provider and retention arrangements, and deployment/domain configuration.

No public deployment was performed. Automated accessibility scans complement, but do not replace, assistive-technology and human usability testing.
