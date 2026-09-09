# Verification — 9 September 2026

## Build and code

- Next.js 16.3.4 production build passes; 50 localized content pages are prerendered.
- TypeScript, ESLint and Prettier checks pass.
- Dependency installation audit reported zero vulnerabilities.

## Browser coverage

The final Playwright run passed all 19 tests in 52.9 seconds using Chromium on Windows.

- All 50 pages return HTTP 200 with one primary heading and the correct document language.
- All 50 pages provide the expected absolute canonical URL, five language alternatives plus `x-default`, and an absolute social image URL.
- Five localized Open Graph images return valid PNG responses.
- All ten page types in all five languages were checked at 320, 375, 390, 430, 768, 1024, 1280, 1440 and 1920 pixels: 450 combinations, with no horizontal document overflow or browser runtime/console errors.
- All 50 pages were scanned with axe at 390 and 1440 pixels: 100 scans, with no violations under the WCAG 2 A, WCAG 2 AA and WCAG 2.1 AA rule tags.
- Case-study language switching preserves the equivalent route.
- Mobile menu opening, initial focus, forward/reverse keyboard focus wrap, Escape dismissal, language selection and navigation cleanup pass. Body scrolling is restored on close and after navigating through the header CTA.
- Required fields, sending, unavailable integration, delivery failure and success states pass. Success/failure delivery responses are intercepted in browser tests; no real email is sent.
- API origin checks, malformed data, excessive payload size, honeypot rejection, invalid URL rejection and attempt limiting pass.
- Root redirect, missing-route responses, sitemap URL count, robots configuration and reduced-motion behavior pass.

## Visual and performance review

Desktop and mobile home compositions, German mobile wrapping, project presentation, and the desktop inquiry page were inspected visually. Corrections included a German case-navigation overflow, small-label contrast, the mobile project-caption overlap and a scroll-lock edge case.

Unthrottled local homepage measurements at 390 and 1440 pixels recorded zero cumulative layout shift for all five languages. These are local observations; they do not establish deployed Core Web Vitals or field performance. Real-user interaction latency, network conditions and other browser engines need deployment-stage assessment.

Run `node scripts/visual-audit.mjs` with the production server running to generate screenshots and local measurements under `test-results/visuals/`. Run `npm test` to reproduce the automated checks.

## Remaining publication inputs

- Approved project screenshots: current artwork is explicitly illustrative. Responsive hero, desktop and mobile media slots are implemented.
- Verified studio social profile URLs: empty configuration entries stay hidden.
- An operational studio mailbox and an HTTPS inquiry delivery endpoint: without configuration the form clearly reports that online delivery is unavailable.
- Business-specific privacy/terms details, actual provider and retention arrangements, and deployment/domain configuration.

No public deployment was performed. Automated accessibility scans complement, but do not replace, assistive-technology and human usability testing.
