import { test, expect } from '@playwright/test';

for (const width of [320, 768, 1440]) {
  test(`AFTERHOURS portfolio and case at ${width}px`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/en/work');
    await expect(page.locator('.project-meta h3')).toHaveText(['LUZEN', 'AFTERHOURS', 'VANTA']);
    const card = page.locator('.project-afterhours');
    await card.scrollIntoViewIfNeeded();
    await expect(card).toContainText('CONCEPT PROJECT / 2026');
    const video = card.locator('video');
    await expect(video).toHaveAttribute('poster', '/projects/afterhours/afterhours-cover.webp');
    await expect(video).not.toHaveAttribute('src');
    expect(await video.evaluate((v) => (v as HTMLVideoElement).muted)).toBe(true);
    await expect(video).toHaveAttribute('playsinline', '');
    await expect(video).toHaveAttribute('loop', '');
    await expect(video).toHaveCSS('object-fit', 'contain');
    await card.getByRole('button').click();
    await expect.poll(() => video.evaluate((v) => (v as HTMLVideoElement).paused)).toBe(false);
    await card.getByRole('button').click();
    await expect.poll(() => video.evaluate((v) => (v as HTMLVideoElement).paused)).toBe(true);
    await card.locator('.vanta-media-link').click();
    await expect(page).toHaveURL('/en/work/afterhours');
    await expect(page.locator('h1')).toHaveText('AFTERHOURS');
    await expect(page.locator('main')).toContainText('A fictional concept created by SENZ');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true,
    );
    expect(errors).toEqual([]);
  });
}

test('AFTERHOURS replaces the restaurant case in every language', async ({ page }) => {
  for (const locale of ['en', 'pt', 'fr', 'it', 'de']) {
    const response = await page.goto(`/${locale}/work/afterhours`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveText('AFTERHOURS');
    await expect(page.locator('main')).toContainText('CONCEPT PROJECT / 2026');
    await expect(page.getByRole('link', { name: /live site/i })).toHaveCount(0);
    await page.goto(`/${locale}/work/luzen`);
    await expect(page.locator('.next-project a')).toHaveAttribute(
      'href',
      `/${locale}/work/afterhours`,
    );
    const removed = await page.goto(`/${locale}/work/restaurant-platform`);
    expect(removed?.status()).toBe(404);
  }
});
