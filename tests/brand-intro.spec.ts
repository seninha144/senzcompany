import { test, expect } from '@playwright/test';

test('first visit reveals content, marks session and does not replay on navigation or refresh', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('/pt', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('.brand-intro')).toBeVisible();
  await expect(page.locator('.brand-intro')).toHaveAttribute('aria-hidden', 'true');
  await expect(page.locator('h1')).toHaveCount(1);
  expect(await page.evaluate(() => sessionStorage.getItem('senz-intro-seen'))).toBeNull();
  await expect(page.locator('html')).not.toHaveAttribute('data-senz-intro', 'active', {
    timeout: 3000,
  });
  expect(await page.evaluate(() => sessionStorage.getItem('senz-intro-seen'))).toBe('1');
  expect(await page.evaluate(() => getComputedStyle(document.body).overflow)).not.toBe('hidden');
  await page.locator('.desktop-nav a[href="/pt/work"]').click();
  await expect(page).toHaveURL('/pt/work');
  await page.locator('.desktop-nav a[href="/pt/about"]').click();
  await expect(page).toHaveURL('/pt/about');
  await page.locator('.header .wordmark').click();
  await expect(page).toHaveURL('/pt');
  await expect(page.locator('.brand-intro')).not.toBeVisible();
  for (const route of ['/pt/work', '/pt/about', '/pt', '/fr']) {
    await page.goto(route);
    await expect(page.locator('.brand-intro')).not.toBeVisible();
  }
  await page.reload();
  await expect(page.locator('.brand-intro')).not.toBeVisible();
  expect(errors).toEqual([]);
});

for (const width of [320, 768, 1440]) {
  test(`intro stays centered at ${width}px and keyboard restores access`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/en', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('.brand-intro')).toBeVisible();
    const bounds = await page.locator('.brand-intro-mark').boundingBox();
    expect(bounds).not.toBeNull();
    expect(bounds!.x).toBeGreaterThanOrEqual(0);
    expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(width);
    expect(Math.abs(bounds!.x + bounds!.width / 2 - width / 2)).toBeLessThan(2);
    await page.keyboard.press('Tab');
    await expect(page.locator('.brand-intro')).not.toBeVisible();
    await expect(page.locator('.skip-link')).toBeFocused();
    expect(await page.evaluate(() => getComputedStyle(document.body).overflow)).not.toBe('hidden');
  });
}

test('reduced motion and unavailable storage never block content', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/de');
  await expect(page.locator('.brand-intro')).not.toBeVisible();
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.addInitScript(() => {
    Object.defineProperty(window, 'sessionStorage', {
      get() {
        throw new Error('Storage unavailable');
      },
    });
  });
  await page.reload();
  await expect(page.locator('.brand-intro')).not.toBeVisible();
  expect(await page.evaluate(() => getComputedStyle(document.body).overflow)).not.toBe('hidden');
});

test('session completion survives interrupted entry and a new session starts fresh', async ({
  page,
  browser,
}) => {
  await page.goto('/en', { waitUntil: 'domcontentloaded' });
  await page.reload({ waitUntil: 'domcontentloaded' });
  await expect(page.locator('.brand-intro')).not.toBeVisible();
  const fresh = await browser.newContext();
  try {
    const other = await fresh.newPage();
    await other.goto('http://localhost:3000/en', { waitUntil: 'domcontentloaded' });
    await expect(other.locator('.brand-intro')).toBeVisible();
    await other.emulateMedia({ reducedMotion: 'reduce' });
    await expect(other.locator('.brand-intro')).not.toBeVisible();
  } finally {
    await fresh.close();
  }
});

test('without JavaScript the page remains visible and scrollable', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto('http://localhost:3000/pt');
    await expect(page.locator('.brand-intro')).not.toBeVisible();
    await expect(page.locator('h1')).toBeVisible();
  } finally {
    await context.close();
  }
});

test('intro releases the page even when hydration scripts fail', async ({ page }) => {
  await page.route('**/_next/static/**/*.js', (route) => route.abort());
  await page.goto('/en', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('.brand-intro')).toBeVisible();
  await expect(page.locator('.brand-intro')).not.toBeVisible({ timeout: 3000 });
  expect(await page.evaluate(() => getComputedStyle(document.body).overflow)).not.toBe('hidden');
});
