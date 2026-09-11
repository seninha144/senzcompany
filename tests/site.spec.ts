import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { dictionaries, locales, slugs } from '../src/content';

const paths = [
  '',
  '/work',
  '/services',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  ...slugs.map((s) => `/work/${s}`),
];
for (const locale of locales) {
  test(`${locale}: routes, localized metadata and internal links`, async ({ page, request }) => {
    for (const path of paths) {
      const response = await page.goto(`/${locale}${path}`);
      expect(response?.status()).toBe(200);
      await expect(page.locator('html')).toHaveAttribute('lang', locale);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        'href',
        `https://senzcompany.com/${locale}${path}`,
      );
      expect(await page.locator('link[rel="alternate"][hreflang]').count()).toBe(6);
      await expect(page.locator('meta[property="og:image"]').first()).toHaveAttribute(
        'content',
        /^https:\/\/senzcompany\.com\//,
      );
      const links = await page
        .locator('a[href^="/"]')
        .evaluateAll((els) => els.map((el) => el.getAttribute('href')));
      for (const href of links) expect(href).toMatch(new RegExp(`^/${locale}(/|$)`));
    }
    const og = await request.get(`/${locale}/opengraph-image`);
    expect(og.status()).toBe(200);
    expect(og.headers()['content-type']).toContain('image/png');
  });
  test(`${locale}: requested widths and browser errors`, async ({ page }) => {
    // This check loads 99 pages, including optimized raster images at nine widths.
    test.setTimeout(180000);
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    for (const width of [320, 375, 390, 430, 768, 1024, 1280, 1440, 1920]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const path of paths) {
        await page.goto(`/${locale}${path}`);
        expect(
          await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
          `overflow ${locale}${path} at ${width}`,
        ).toBe(true);
      }
    }
    expect(errors).toEqual([]);
  });
  test(`${locale}: accessibility`, async ({ page }) => {
    for (const width of [390, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const path of paths) {
        await page.goto(`/${locale}${path}`);
        await page.evaluate(() =>
          Promise.all(
            document
              .getAnimations()
              .filter((animation) => animation.effect?.getComputedTiming().iterations !== Infinity)
              .map((animation) => animation.finished),
          ),
        );
        const result = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
          .analyze();
        expect(
          result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
          `${locale}${path} at ${width}px`,
        ).toEqual([]);
      }
    }
  });
}
test('J.A.R.V.I.S. has localized independent-project content and both application variants', async ({
  page,
}) => {
  for (const locale of locales) {
    const c = dictionaries[locale];
    const project = c.projects[slugs.indexOf('jarvis')];
    await page.goto(`/${locale}/work/jarvis`);
    await expect(page.locator('h1')).toHaveText('J.A.R.V.I.S.');
    await expect(page.locator('.case-subtitle')).toHaveText(project.subtitle!);
    await expect(page.locator('.case-intro > .eyebrow')).toHaveText(project.typeLabel!);
    await expect(page.locator('.case-intro .intro-copy')).toHaveText(project.description);
    await expect(page.locator('main').getByText(c.inDevelopment, { exact: true })).toHaveCount(0);
    await expect(
      page.locator('.case-metadata dt').getByText(c.caseLabels[6], { exact: true }),
    ).toHaveCount(0);
    for (const section of project.sections!) {
      await expect(
        page.locator('.case-story .eyebrow').filter({ hasText: section.title }),
      ).toBeVisible();
    }
    for (const technology of ['Tauri', 'React', 'Vite', 'whisper.cpp', 'Piper', 'API']) {
      await expect(page.locator('.case-story')).toContainText(technology);
    }
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      project.description,
    );
  }
});

test('fourth project appears in work lists and connects the case-study sequence', async ({
  page,
}) => {
  for (const path of ['/en', '/en/work']) {
    await page.goto(path);
    await expect(page.locator('.project-showcase')).toHaveCount(slugs.length);
    await expect(page.locator('.project-3 h3 a')).toHaveAttribute('href', '/en/work/jarvis');
  }
  await page.goto('/en/work/restaurant-platform');
  await page.locator('.next-project > a').click();
  await expect(page).toHaveURL('/en/work/jarvis');
  await expect(page.locator('.next-project > a')).toHaveAttribute('href', '/en/work/luzen');
  await page.selectOption('#desktop-language', 'pt');
  await expect(page).toHaveURL('/pt/work/jarvis');
});

test('language selector preserves case study and mobile menu manages focus', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/en/work/luzen');
  await page.selectOption('#desktop-language', 'fr');
  await expect(page).toHaveURL('/fr/work/luzen');
  await page.setViewportSize({ width: 390, height: 844 });
  const menu = page.locator('.menu-button');
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  expect(await page.evaluate(() => document.body.style.overflow)).toBe('hidden');
  await expect(page.locator('#mobile-navigation nav a').first()).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(menu).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(page.locator('.mobile-panel-bottom a')).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(menu).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(menu).toBeFocused();
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe('hidden');
  await menu.click();
  await page.selectOption('#mobile-language', 'de');
  await expect(page).toHaveURL('/de/work/luzen');
  await expect(page.locator('#mobile-navigation')).toBeHidden();
  await menu.click();
  await page.locator('.header-cta').click();
  await expect(page).toHaveURL('/de/contact');
  await expect(page.locator('#mobile-navigation')).toBeHidden();
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe('hidden');
});
test('inquiry validation, unavailable, sending, success and delivery errors', async ({ page }) => {
  await page.goto('/en/contact');
  await page.getByRole('button', { name: dictionaries.en.form.submit }).click();
  await expect(page.locator('input[name="name"]')).toBeFocused();
  await page.locator('[name="name"]').fill('Website QA');
  await page.locator('[name="email"]').fill(`qa-${Date.now()}@example.com`);
  await page
    .locator('textarea[name="description"]')
    .fill('A multilingual website for a small independent business.');
  await page.selectOption('[name="need"]', '0');
  await page.waitForTimeout(2100);
  await page.getByRole('button', { name: dictionaries.en.form.submit }).click();
  await expect(page.getByRole('status')).toContainText(dictionaries.en.form.unavailable);
  await page.route('/api/inquiry', async (route) => {
    await new Promise((r) => setTimeout(r, 400));
    await route.fulfill({ status: 502, json: { error: 'delivery' } });
  });
  await page.getByRole('button', { name: dictionaries.en.form.submit }).click();
  await expect(page.getByRole('button', { name: dictionaries.en.form.sending })).toBeDisabled();
  await expect(page.getByRole('status')).toContainText(dictionaries.en.form.error);
  await page.route('/api/inquiry', (route) => route.fulfill({ status: 200, json: { ok: true } }));
  await page.getByRole('button', { name: dictionaries.en.form.submit }).click();
  await expect(page.getByRole('status')).toContainText(dictionaries.en.form.success);
});
test('API rejects abuse, invalid data and oversized payloads', async ({ request }) => {
  expect((await request.post('/api/inquiry', { data: {} })).status()).toBe(403);
  const headers = { origin: 'http://localhost:3000' };
  expect((await request.post('/api/inquiry', { headers, data: {} })).status()).toBe(400);
  expect(
    (
      await request.post('/api/inquiry', { headers, data: { description: 'a'.repeat(17000) } })
    ).status(),
  ).toBe(413);
  const body = {
    name: 'QA',
    email: `api-qa-${Date.now()}@example.com`,
    company: '',
    country: '',
    website: '',
    need: '0',
    budget: '5',
    description: 'A valid project inquiry for testing the integration.',
    locale: 'en',
    fax: '',
    startedAt: Date.now() - 3000,
  };
  expect(
    (await request.post('/api/inquiry', { headers, data: { ...body, fax: 'spam' } })).status(),
  ).toBe(400);
  expect(
    (
      await request.post('/api/inquiry', {
        headers,
        data: { ...body, website: 'javascript:alert(1)' },
      })
    ).status(),
  ).toBe(400);
  for (let i = 0; i < 3; i++)
    expect((await request.post('/api/inquiry', { headers, data: body })).status()).toBe(503);
  expect((await request.post('/api/inquiry', { headers, data: body })).status()).toBe(429);
});
test('root strategy, missing routes, sitemap, robots and reduced motion', async ({
  page,
  request,
}) => {
  await page.goto('/');
  await expect(page).toHaveURL('/en');
  expect((await request.get('/en/missing')).status()).toBe(404);
  expect((await request.get('/es')).status()).toBe(404);
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  expect((await sitemap.text()).match(/<loc>/g)?.length).toBe(paths.length * locales.length);
  expect(await (await request.get('/robots.txt')).text()).toContain(
    'https://senzcompany.com/sitemap.xml',
  );
  await page.emulateMedia({ reducedMotion: 'reduce' });
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe(
    'auto',
  );
});
