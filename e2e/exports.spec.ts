import { test, expect } from '@playwright/test';
import { freshApp, fillRequiredPersonalInfo } from './helpers';

test.describe('CV export', () => {
  test.beforeEach(async ({ page }) => {
    await freshApp(page);
  });

  test('downloads an HTML CV once required fields are valid', async ({ page }) => {
    const data = await fillRequiredPersonalInfo(page);

    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Download HTML' }).click(),
    ]);

    expect(download.suggestedFilename()).toBe(
      `${data.fullName.replace(/\s+/g, '-').toLowerCase()}-cv.html`
    );
    await expect(page.getByText('HTML CV generated successfully')).toBeVisible();
  });

  test('blocks HTML export and points to the first invalid field when required data is missing', async ({
    page,
  }) => {
    await page.getByRole('button', { name: 'Download HTML' }).click();
    await expect(
      page.getByText('Please fill in all required fields before generating HTML')
    ).toBeVisible();
    await expect(page.getByText('Full name is required')).toBeVisible();
  });

  test('downloads a PDF CV once required fields are valid', async ({ page }) => {
    const data = await fillRequiredPersonalInfo(page);

    const [download] = await Promise.all([
      page.waitForEvent('download', { timeout: 20_000 }),
      page.getByRole('button', { name: 'Download PDF' }).click(),
    ]);

    expect(download.suggestedFilename()).toBe(
      `${data.fullName.replace(/\s+/g, '-').toLowerCase()}-cv.pdf`
    );
    await expect(page.getByText('PDF CV generated successfully')).toBeVisible();
  });
});
