import { test, expect } from '@playwright/test';
import { locales } from '../src/content';
import { luzen } from '../src/content/luzen';
import { luzenMedia } from '../src/content/luzen-media';

for (const locale of locales) {
  test(`${locale}: LUZEN replaces the old public project with safe absent media`, async ({
    page,
    request,
  }) => {
    await page.goto(`/${locale}/work/resisol`);
    await expect(page).toHaveURL(`/${locale}/work/luzen`);
    await expect(page.locator('h1')).toHaveText('LUZEN');
    await expect(page.locator('main')).toContainText(luzen[locale].project.typeLabel!);
    await expect(page.locator('main')).not.toContainText(/resisol/i);
    if (luzenMedia.cover || luzenMedia.hero) {
      const cover = page.locator('.luzen-cover img');
      await cover.scrollIntoViewIfNeeded();
      await cover.evaluate((image: HTMLImageElement) => image.decode());
      await expect(cover).toBeVisible();
    } else {
      await expect(page.locator('.luzen-placeholder')).toBeVisible();
    }
    const hasVideo = Boolean(luzenMedia.video && luzenMedia.poster);
    await expect(page.locator('video')).toHaveCount(hasVideo ? 1 : 0);
    if (hasVideo) {
      const video = page.locator('video');
      await video.scrollIntoViewIfNeeded();
      await expect
        .poll(() => video.evaluate((v: HTMLVideoElement) => !v.paused && v.currentTime > 0))
        .toBe(true);
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await expect.poll(() => video.evaluate((v: HTMLVideoElement) => v.paused)).toBe(true);
      await page.reload();
      await video.scrollIntoViewIfNeeded();
      await expect(video).not.toHaveAttribute('src');
      await expect(video).toHaveAttribute('poster', luzenMedia.poster!);
    }
    await expect(page).toHaveTitle(/LUZEN.*SENZ/);
    await expect(page.locator('.next-project a')).toHaveAttribute(
      'href',
      `/${locale}/work/marcos-cell`,
    );
    const sitemap = await (await request.get('/sitemap.xml')).text();
    expect(sitemap).toContain(`/${locale}/work/luzen`);
    expect(sitemap).not.toContain('resisol');
  });
}
