import { test, expect, type Page } from '@playwright/test';
import { locales, slugs } from '../src/content';

// Updated for the founder-approved project screenshots. Never update these
// baselines as part of an institutional-only change.
async function loadImages(page: Page) {
  for (const image of await page.locator('.project-visual img').all()) {
    await image.scrollIntoViewIfNeeded();
    await image.evaluate((element) => (element as HTMLImageElement).decode());
  }
  await page.evaluate(() => window.scrollTo(0, 0));
}
for (const locale of locales) {
  for (const width of [320, 768, 1440]) {
    test(`${locale} ${width}: preserve portfolio and every case study`, async ({ page }) => {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(`/${locale}`);
      await loadImages(page);
      await expect(page.locator('#selected-work')).toHaveScreenshot(
        `${locale}-${width}-selected-work.png`,
        {
          animations: 'disabled',
          maxDiffPixels: 0,
        },
      );
      for (const path of ['', ...slugs.map((slug) => `/${slug}`)]) {
        await page.emulateMedia({ reducedMotion: path === '/luzen' ? 'reduce' : 'no-preference' });
        await page.goto(`/${locale}/work${path}`);
        await loadImages(page);
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
  await loadImages(page);
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
