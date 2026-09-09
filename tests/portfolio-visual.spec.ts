import { test, expect } from '@playwright/test';
import { locales, slugs } from '../src/content';

// Captured before the institutional redesign. Never update these baselines
// as part of an institutional-only change: the portfolio must stay identical.
for (const locale of locales) {
  for (const width of [320, 768, 1440]) {
    test(`${locale} ${width}: preserve portfolio and every case study`, async ({ page }) => {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(`/${locale}`);
      await expect(page.locator('#selected-work')).toHaveScreenshot(
        `${locale}-${width}-selected-work.png`,
        {
          animations: 'disabled',
          maxDiffPixels: 0,
        },
      );
      for (const path of ['', ...slugs.map((slug) => `/${slug}`)]) {
        await page.goto(`/${locale}/work${path}`);
        await expect(page).toHaveScreenshot(
          `${locale}-${width}-work${path.replaceAll('/', '-')}.png`,
          {
            fullPage: true,
            animations: 'disabled',
            maxDiffPixels: 0,
          },
        );
      }
    });
  }
}
test('preserve all project hover states', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/en/work');
  for (const slug of slugs) {
    const link = page.locator(`.project-image-link[href="/en/work/${slug}"]`);
    await link.hover();
    await page.waitForTimeout(1100);
    await expect(link).toHaveScreenshot(`${slug}-hover.png`, {
      animations: 'disabled',
      maxDiffPixels: 0,
    });
  }
});
