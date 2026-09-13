import { test, expect, webkit, devices } from '@playwright/test';
import { locales, slugs, dictionaries } from '../src/content';
import { vanta } from '../src/content/vanta';

test('VANTA translations, metadata, sequence and removed routes', async ({ page, request }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const locale of locales) {
    await page.goto(`/${locale}/work`);
    await expect(page.locator('.project-showcase h3')).toHaveText(
      [1, 2, 0].map((i) => dictionaries[locale].projects[i].name),
    );
    await expect(page.locator('main')).not.toContainText(/Marcos.?Cell|JARVIS|J\.A\.R\.V\.I\.S/i);
    for (const [i, slug] of slugs.entries()) {
      await page.goto(`/${locale}/work/${slug}`);
      await expect(page.locator('.next-project > a')).toHaveAttribute(
        'href',
        `/${locale}/work/${slugs[(i + 1) % slugs.length]}`,
      );
    }
    await page.goto(`/${locale}/work/vanta`);
    await expect(page).toHaveTitle(vanta[locale].title);
    await expect(page.locator('.case-intro > .eyebrow')).toHaveText(
      vanta[locale].project.typeLabel!,
    );
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      vanta[locale].seo,
    );
    await expect(page.locator('.case-story')).toContainText(vanta[locale].project.challenge);
    for (const slug of ['marcos-cell', 'jarvis'])
      expect((await request.get(`/${locale}/work/${slug}`)).status()).toBe(404);
  }
  const sitemap = await (await request.get('/sitemap.xml')).text();
  expect(sitemap).not.toMatch(/marcos-cell|jarvis/i);
});

test('VANTA lazy video playback, pause, navigation and reduced motion', async ({ page }) => {
  await page.goto('/en');
  const video = page.locator('.vanta-loop video');
  await expect(video).not.toHaveAttribute('src');
  await video.scrollIntoViewIfNeeded();
  await expect(video).toHaveAttribute('src', '/projects/vanta/vanta_video_senz.mp4');
  await expect
    .poll(() => video.evaluate((v) => (v as HTMLVideoElement).currentTime))
    .toBeGreaterThan(0);
  expect(
    await video.evaluate((v) => {
      const el = v as HTMLVideoElement;
      return (
        el.muted &&
        el.loop &&
        el.playsInline &&
        !el.controls &&
        el.videoWidth === 1920 &&
        el.videoHeight === 1080
      );
    }),
  ).toBe(true);
  await page.locator('.vanta-loop button').click();
  expect(await video.evaluate((v) => (v as HTMLVideoElement).paused)).toBe(true);
  await page.locator('.vanta-loop button').click();
  await expect.poll(() => video.evaluate((v) => (v as HTMLVideoElement).paused)).toBe(false);
  await page.locator('.project-vanta .vanta-media-link').click({ position: { x: 20, y: 20 } });
  await expect(page).toHaveURL('/en/work/vanta');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.reload();
  await video.scrollIntoViewIfNeeded();
  await expect(video).not.toHaveAttribute('src');
  expect(await video.evaluate((v) => (v as HTMLVideoElement).paused)).toBe(true);
  await page.locator('.vanta-loop button').click();
  await expect
    .poll(() => video.evaluate((v) => (v as HTMLVideoElement).currentTime))
    .toBeGreaterThan(0);
});

test('VANTA inline configuration and media fallback in iPhone and iPad WebKit', async () => {
  const browser = await webkit.launch();
  try {
    for (const device of ['iPhone 13', 'iPad Pro 11']) {
      const context = await browser.newContext({
        ...devices[device],
        baseURL: 'http://localhost:3000',
      });
      const page = await context.newPage();
      const errors: string[] = [];
      page.on('pageerror', (e) => errors.push(e.message));
      await page.goto('/pt/work/vanta');
      const video = page.locator('.vanta-loop video');
      await video.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          video.evaluate((v) => {
            const el = v as HTMLVideoElement;
            return el.readyState > 0 || Boolean(el.error);
          }),
        )
        .toBe(true);
      const unsupported = await video.evaluate((v) => (v as HTMLVideoElement).error?.code === 4);
      if (unsupported && process.platform === 'win32') {
        test.info().annotations.push({
          type: 'limitation',
          description: `${device}: Windows WebKit cannot decode this MP4 (also reproduced with the existing LUZEN MP4). Physical Safari playback remains unverified.`,
        });
        expect(
          await video.evaluate((v) => {
            const el = v as HTMLVideoElement;
            return el.playsInline && el.muted && !el.controls;
          }),
        ).toBe(true);
        expect(
          await video.evaluate(async (v) => {
            const img = new Image();
            img.src = (v as HTMLVideoElement).poster;
            await img.decode();
            return img.naturalWidth > 0;
          }),
        ).toBe(true);
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
          true,
        );
        expect(errors).toEqual([]);
        await context.close();
        continue;
      }
      await expect
        .poll(() => video.evaluate((v) => (v as HTMLVideoElement).currentTime), { timeout: 20000 })
        .toBeGreaterThan(0);
      expect(
        await video.evaluate((v) => {
          const el = v as HTMLVideoElement;
          return el.playsInline && el.muted && !el.controls && !el.error;
        }),
      ).toBe(true);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
        true,
      );
      expect(errors).toEqual([]);
      await context.close();
    }
  } finally {
    await browser.close();
  }
});
