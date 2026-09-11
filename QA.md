# Verification — 9 September 2026

## Build and code

- Next.js 16.3.4 production build passes; 55 localized content pages are prerendered.
- TypeScript, ESLint and Prettier checks pass.
- Dependency installation audit reported zero vulnerabilities.

## Browser coverage

All 49 Playwright tests passed using Chromium on Windows in the latest complete run.

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

## J.A.R.V.I.S. addition

- Independent project identification, localized subtitle and all additional case-study sections checked in five languages.
- Desktop technologies and web/PWA AI API integration verified against the supplied project brief. No location, provider, release status, clients or metrics invented.
- Homepage and work listing contain four projects. Case navigation links Restaurant Management Platform to J.A.R.V.I.S., then back to RESISOL. Language switching preserves the new route.
- Desktop showcase, Portuguese case study and German mobile case study visually reviewed. The new artwork is clearly identified as illustrative.

## Visual and performance review

The institutional visual revision introduces an asymmetrical founder composition, interactive service tabs, an alternating process timeline and editorial principles. The capabilities accordion retains its accessible interaction. Homepage, About and Services were visually reviewed across desktop, tablet and 320px mobile, including long French and German copy. Six new studio tests cover all five languages, service selection, 15 scoped accessibility scans, keyboard navigation and reduced motion.

At completion of the institutional revision, 16 visual regression tests with 94 screenshot comparisons passed with zero differing pixels against the pre-revision references, including selected work, work listings, all four case studies and project hover states. Source comparisons also confirmed unchanged project content, Work component, case-study rendering and original global styles; new institutional styles are scoped in `studio.css`.

The subsequent, explicitly requested image integration connects the supplied founder portrait and Marcos Cell, Restaurant Management Platform and J.A.R.V.I.S. screenshots. Originals remain in `images/`; public copies use the existing media slots with five-language alternative text. Project screenshots use contain sizing to preserve the entire interface. About and Work were checked at 320, 768 and 1440 pixels: all images decoded successfully with no horizontal overflow. Portfolio references were deliberately refreshed for these approved image changes and now wait for image decoding before capture. These references use Chromium on Windows.

The About technical-capabilities addition passed six new tests: five localized content/responsive/accessibility checks and one keyboard/reduced-motion interaction check. All six disclosures were opened at every requested width in all five languages, with 45 scoped axe scans returning no violations. Verified initial collapsed state, independent expansion, linked ARIA IDs, hidden/inert closed content, arrow rotation, Enter/Space activation, focus preservation and rapid toggling. Desktop, French tablet and German 320px mobile layouts were reviewed visually. Production build, typecheck and lint passed after the addition.

Desktop and mobile home compositions, German mobile wrapping, project presentation, and the desktop inquiry page were inspected visually. Corrections included a German case-navigation overflow, small-label contrast, the mobile project-caption overlap and a scroll-lock edge case.

Unthrottled local homepage measurements at 390 and 1440 pixels recorded zero cumulative layout shift for all five languages. These are local observations; they do not establish deployed Core Web Vitals or field performance. Real-user interaction latency, network conditions and other browser engines need deployment-stage assessment.

Run `node scripts/visual-audit.mjs` with the production server running to generate screenshots and local measurements under `test-results/visuals/`. Run `npm test` to reproduce the automated checks.

## Remaining publication inputs

- A RESISOL screenshot and optional additional desktop/mobile project screenshots. The other three project covers already use supplied screenshots.
- Verified studio social profile URLs: empty configuration entries stay hidden.
- An operational studio mailbox and an HTTPS inquiry delivery endpoint: without configuration the form clearly reports that online delivery is unavailable.
- Business-specific privacy/terms details, actual provider and retention arrangements, and deployment/domain configuration.

No public deployment was performed. Automated accessibility scans complement, but do not replace, assistive-technology and human usability testing.
