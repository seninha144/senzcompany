import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { dictionaries, locales } from '../src/content';

for (const locale of locales) {
  test(`${locale}: capabilities content, disclosure states and responsive accessibility`, async ({
    page,
  }) => {
    const c = dictionaries[locale].capabilities;
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(`/${locale}/about`);
    const section = page.locator('#capabilities');
    await expect(section.getByRole('heading', { level: 2 })).toHaveText(c.title);
    await expect(section.getByRole('button')).toHaveCount(6);
    await expect(section.getByRole('region')).toHaveCount(0);
    for (const group of c.groups) {
      const button = section.getByRole('button', { name: group.name, exact: true });
      await expect(button).toHaveAttribute('aria-expanded', 'false');
      const id = await button.getAttribute('aria-controls');
      const panel = page.locator(`[id="${id}"]`);
      await expect(panel).toHaveAttribute(
        'aria-labelledby',
        (await button.getAttribute('id')) as string,
      );
      await button.click();
      await expect(button).toHaveAttribute('aria-expanded', 'true');
      await expect(panel).toBeVisible();
      await expect(panel).not.toHaveAttribute('inert');
      await expect(panel.getByRole('listitem')).toHaveCount(group.items.length);
      for (const item of group.items) await expect(panel).toContainText(item);
    }
    for (const width of [320, 375, 390, 430, 768, 1024, 1280, 1440, 1920]) {
      await page.setViewportSize({ width, height: 1000 });
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
        `${locale} ${width}px`,
      ).toBe(true);
      const result = await new AxeBuilder({ page })
        .include('#capabilities')
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
      expect(
        result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
      ).toEqual([]);
    }
    for (const button of await section.getByRole('button').all()) {
      await button.click();
      await expect(button).toHaveAttribute('aria-expanded', 'false');
    }
    await expect(section.getByRole('region')).toHaveCount(0);
    expect(errors).toEqual([]);
  });
}

test('capabilities support keyboard, independent disclosures and reduced motion', async ({
  page,
}) => {
  await page.goto('/en/about');
  const buttons = page.locator('#capabilities button');
  const first = buttons.nth(0),
    second = buttons.nth(1);
  await first.focus();
  await page.keyboard.press('Space');
  await expect(first).toHaveAttribute('aria-expanded', 'true');
  await expect(first.locator('svg')).toHaveCSS('transform', 'matrix(-1, 0, 0, -1, 0, 0)');
  await page.keyboard.press('Tab');
  await expect(second).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(second).toHaveAttribute('aria-expanded', 'true');
  await expect(first).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Enter');
  await expect(second).toHaveAttribute('aria-expanded', 'false');
  await expect(second).toBeFocused();
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(first.locator('svg')).toHaveCSS('transition-duration', '0s');
  await expect(page.locator('.disclosure-panel').first()).toHaveCSS('transition-duration', '0s');
  await first.click();
  await expect(page.locator('.disclosure-panel').first()).toBeHidden();
  await first.click();
  await first.click();
  await expect(first).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('.disclosure-panel').first()).toBeHidden();
});
