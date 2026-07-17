import { test, expect } from '@playwright/test';
import { freshApp } from './helpers';

test.describe('App shell', () => {
  test.beforeEach(async ({ page }) => {
    await freshApp(page);
  });

  test('loads the app and shows the header', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Clean CV Maker' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Version History' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Personal Information' })).toBeVisible();
    await expect(
      page.getByText(/designed primarily for IT professionals/)
    ).toBeVisible();
  });

  test('toggles dark mode and persists the choice across reloads', async ({ page }) => {
    const html = page.locator('html');
    await expect(html).not.toHaveClass(/dark/);

    await page.getByRole('button', { name: 'Switch to dark mode' }).click();

    await expect(html).toHaveClass(/dark/);
    expect(await page.evaluate(() => localStorage.getItem('theme'))).toBe('dark');

    await page.reload();
    await expect(html).toHaveClass(/dark/);
  });

  test('switches language and applies RTL direction for Arabic', async ({ page }) => {
    await page.getByRole('button', { name: 'English' }).click();
    await page.getByRole('button', { name: 'العربية' }).click();

    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    await expect(page.getByRole('heading', { name: 'منشئ السيرة الذاتية' })).toBeVisible();

    // Switching back to a LTR language restores dir="ltr".
    await page.getByRole('button', { name: 'العربية' }).click();
    await page.getByRole('button', { name: 'English' }).click();
    await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');
    await expect(page.getByRole('heading', { name: 'Clean CV Maker' })).toBeVisible();
  });

  test('resolves hyphenated locale codes (pt-BR, zh-CN) correctly', async ({ page }) => {
    // Regression test: i18next's `supportedLngs` + `nonExplicitSupportedLngs`
    // combination used to silently fall back to English for any registered
    // language code containing a region subtag, even on an exact match.
    for (const [code, sectionHeading] of [
      ['pt-BR', 'Informações Pessoais'],
      ['zh-CN', '个人信息'],
    ] as const) {
      await page.evaluate((c) => localStorage.setItem('i18nextLng', c), code);
      await page.reload();

      await expect(page.getByRole('heading', { name: sectionHeading })).toBeVisible();
      await expect(page.locator('html')).toHaveAttribute('lang', code);
    }
  });
});
