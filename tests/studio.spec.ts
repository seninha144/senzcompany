import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { dictionaries, locales } from '../src/content';

for (const locale of locales) {
  test(`${locale}: studio compositions and service exploration`, async ({ page }) => {
    const c = dictionaries[locale];
    for (const width of [320, 768, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(`/${locale}/services`);
      const tabs = page.getByRole('tab');
      await expect(tabs).toHaveCount(4);
      for (const service of c.services) {
        const tab = page.getByRole('tab', { name: service.name, exact: true });
        await tab.click();
        await expect(tab).toHaveAttribute('aria-selected', 'true');
        const panel = page.getByRole('tabpanel', { name: service.name, exact: true });
        await expect(panel).toBeVisible();
        await expect(panel).toContainText(service.text);
        for (const item of service.items) await expect(panel).toContainText(item);
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
          true,
        );
      }
      // Wait for the tab panel's restrained entrance before measuring contrast.
      await page.waitForTimeout(400);
      const result = await new AxeBuilder({ page })
        .include('.studio-service-explorer')
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
      expect(
        result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
      ).toEqual([]);
      await expect(page.locator('.studio-path li')).toHaveCount(6);
      await expect(page.locator('.studio-path .mono, .studio-path .section-number')).toHaveCount(0);
      await page.goto(`/${locale}/about`);
      await expect(page.locator('.studio-founder-statement')).toHaveText(c.studio.statement);
      await expect(page.locator('.studio-values article')).toHaveCount(3);
      await expect(
        page.locator('.studio-values .mono, .studio-values .section-number'),
      ).toHaveCount(0);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
        true,
      );
    }
  });
}

test('service tabs support roving keyboard navigation and reduced motion', async ({ page }) => {
  await page.goto('/en/services');
  const tabs = page.getByRole('tab');
  await tabs.first().focus();
  await page.keyboard.press('ArrowDown');
  await expect(tabs.nth(1)).toBeFocused();
  await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');
  await page.keyboard.press('End');
  await expect(tabs.last()).toBeFocused();
  await page.keyboard.press('ArrowDown');
  await expect(tabs.first()).toBeFocused();
  await page.keyboard.press('ArrowUp');
  await expect(tabs.last()).toBeFocused();
  await page.keyboard.press('Home');
  await expect(tabs.first()).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('tabpanel')).toBeFocused();
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await tabs.nth(2).click();
  await expect(page.getByRole('tabpanel')).toHaveCSS('animation-name', 'none');
});
