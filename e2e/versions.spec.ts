import { test, expect } from '@playwright/test';
import { freshApp, fillRequiredPersonalInfo } from './helpers';

// The version-history panel is a right-hand overlay; scoping to its root
// avoids clashing with any similarly-styled elements in the page behind it.
const panelLocator = (page: import('@playwright/test').Page) =>
  page.locator('div.fixed.right-0.top-0');

test.describe('Version history', () => {
  test.beforeEach(async ({ page }) => {
    await freshApp(page);
  });

  test('autosaves a draft on blur and lists it in the history panel', async ({ page }) => {
    const data = await fillRequiredPersonalInfo(page);
    await expect(page.getByText('CV auto-saved as draft')).toBeVisible();

    await page.getByRole('button', { name: 'Version History' }).click();
    const panel = panelLocator(page);
    await expect(panel.getByRole('heading', { name: 'Version History' })).toBeVisible();
    await expect(panel.getByText(data.fullName)).toBeVisible();
    await expect(panel.getByText('Draft')).toBeVisible();
  });

  test('saving a completed version replaces any existing drafts', async ({ page }) => {
    await fillRequiredPersonalInfo(page);
    await expect(page.getByText('CV auto-saved as draft')).toBeVisible();

    await page.getByRole('button', { name: 'Save Completed Version' }).click();
    await expect(page.getByText('CV saved as completed version')).toBeVisible();

    await page.getByRole('button', { name: 'Version History' }).click();
    const panel = panelLocator(page);
    await expect(panel.getByText('Completed')).toBeVisible();
    await expect(panel.getByText('Draft')).toHaveCount(0);
  });

  test('renames, exports, loads, and deletes a saved version', async ({ page }) => {
    const data = await fillRequiredPersonalInfo(page);
    await page.getByRole('button', { name: 'Save Completed Version' }).click();
    await expect(page.getByText('CV saved as completed version')).toBeVisible();

    await page.getByRole('button', { name: 'Version History' }).click();
    const panel = panelLocator(page);
    const card = panel.locator('div.rounded-lg.p-3').first();
    await expect(card).toBeVisible();

    // Rename: icon buttons have no accessible name, so they're targeted by
    // their fixed position within the card's action row (Edit, Export, Delete).
    const [editButton, exportButton, deleteButton] = [
      card.locator('button').nth(0),
      card.locator('button').nth(1),
      card.locator('button').nth(2),
    ];

    await editButton.click();
    await expect(page.getByRole('heading', { name: 'Rename Version' })).toBeVisible();
    const nameInput = page.getByPlaceholder('Enter version name');
    await nameInput.fill('Grant Application Draft');
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    await expect(card.getByText('Grant Application Draft')).toBeVisible();

    // Export downloads a JSON snapshot of the version.
    const [download] = await Promise.all([page.waitForEvent('download'), exportButton.click()]);
    expect(download.suggestedFilename()).toBe(
      `cv-${data.fullName.toLowerCase().replace(/\s+/g, '-')}-completed.json`
    );

    // Load repopulates the form with the version's data.
    await card.getByRole('button', { name: 'Load Version' }).click();
    await expect(page.locator('[name="fullName"]')).toHaveValue(data.fullName);

    // Delete removes the card and shows the empty state.
    await page.getByRole('button', { name: 'Version History' }).click();
    await deleteButton.click();
    await expect(panel.getByText('No versions saved yet.')).toBeVisible();
  });

  test('imports a valid version JSON file', async ({ page }) => {
    await page.getByRole('button', { name: 'Version History' }).click();
    const panel = panelLocator(page);

    const validVersion = {
      id: '123e4567-e89b-12d3-a456-426614174000',
      name: 'Imported Version',
      timestamp: Date.now(),
      status: 'draft',
      data: {
        fullName: 'Grace Hopper',
        title: 'Rear Admiral',
        location: 'Arlington, VA',
        email: 'grace.hopper@example.com',
        phone: '+1 555 010 2020',
        githubUrl: '',
        linkedinUrl: '',
        willRelocate: false,
        bio: 'Pioneer of computer programming and COBOL.',
      },
    };

    await page.getByLabel('Import CV Version').setInputFiles({
      name: 'cv-version.json',
      mimeType: 'application/json',
      buffer: Buffer.from(JSON.stringify(validVersion)),
    });

    await expect(panel.getByText(/Grace Hopper/)).toBeVisible();
  });

  test('rejects an invalid version JSON file', async ({ page }) => {
    await page.getByRole('button', { name: 'Version History' }).click();

    await page.getByLabel('Import CV Version').setInputFiles({
      name: 'broken.json',
      mimeType: 'application/json',
      buffer: Buffer.from(JSON.stringify({ not: 'a valid version' })),
    });

    await expect(page.getByText('Invalid CV format')).toBeVisible();
  });
});
