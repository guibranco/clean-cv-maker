import { test, expect } from '@playwright/test';
import { freshApp, fillRequiredPersonalInfo, enableAndExpandSection } from './helpers';

test.describe('Personal info form', () => {
  test.beforeEach(async ({ page }) => {
    await freshApp(page);
  });

  test('shows validation errors when saving an empty completed version', async ({ page }) => {
    await page.getByRole('button', { name: 'Save Completed Version' }).click();

    await expect(page.getByText('Full name is required')).toBeVisible();
    await expect(page.getByText('Professional title is required')).toBeVisible();
    await expect(page.getByText('Location is required')).toBeVisible();
    // An empty string fails the schema's .email() check before its .min(1)
    // check runs, so this is the message actually shown, not "Email is
    // required".
    await expect(page.getByText('Invalid email address')).toBeVisible();
    await expect(page.getByText('Phone number is required')).toBeVisible();
    await expect(page.getByText('Professional bio is required')).toBeVisible();
  });

  test('flags an invalid email address', async ({ page }) => {
    await page.locator('[name="email"]').fill('not-an-email');
    await page.locator('[name="fullName"]').click(); // blur the email field
    await expect(page.getByText('Invalid email address')).toBeVisible();
  });

  test('rejects a malformed GitHub URL', async ({ page }) => {
    await page.locator('[name="githubUrl"]').fill('not-a-url');
    await page.locator('[name="fullName"]').click();
    await expect(page.getByText('Invalid GitHub URL')).toBeVisible();
  });

  test('renders a live preview once required data is entered', async ({ page }) => {
    const data = await fillRequiredPersonalInfo(page);

    await expect(page.getByRole('heading', { name: 'CV Preview' })).toBeVisible();
    await expect(page.getByRole('heading', { name: data.fullName, exact: true })).toBeVisible();
    await expect(page.getByText(data.title)).toBeVisible();
    await expect(page.getByText(data.location)).toBeVisible();
    await expect(page.getByRole('link', { name: data.email })).toBeVisible();
  });

  test('willRelocate checkbox reflects in the preview', async ({ page }) => {
    await fillRequiredPersonalInfo(page);
    await page.locator('[name="willRelocate"]').check();

    // A case-sensitive regex distinguishes the preview's "Available for
    // relocation" text from the form's "Available for Relocation" label.
    await expect(page.getByText(/Available for relocation/)).toBeVisible();
  });

  test('showcased projects appear in the live preview', async ({ page }) => {
    // Regression test: the "I have projects to showcase" section used to be
    // captured in the form and included in the HTML/PDF exports, but was
    // silently missing from CVPreview entirely.
    await fillRequiredPersonalInfo(page);
    await enableAndExpandSection(page, 'projects', 'I have projects to showcase');

    await page.locator('[name="projects.0.name"]').fill('Analytical Engine Simulator');
    await page.locator('[name="projects.0.description"]').fill('A simulator for the Analytical Engine.');
    await page.locator('[name="projects.0.startDate"]').fill('2024-01');

    await expect(
      page.getByRole('heading', { name: 'Analytical Engine Simulator' })
    ).toBeVisible();
    await expect(page.getByText('A simulator for the Analytical Engine.')).toBeVisible();
  });
});
