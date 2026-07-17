import { test, expect } from '@playwright/test';
import { freshApp, enableAndExpandSection } from './helpers';

test.describe('Work experience section', () => {
  test.beforeEach(async ({ page }) => {
    await freshApp(page);
    await enableAndExpandSection(page, 'experiences', 'I have work experience');
  });

  test('fills a role and adds/removes additional roles', async ({ page }) => {
    await page.locator('[name="experiences.0.companyName"]').fill('Analytical Engines Ltd');
    await page.locator('[name="experiences.0.roles.0.title"]').fill('Lead Engineer');
    await page.locator('[name="experiences.0.roles.0.description"]').fill('Built the first algorithm.');

    await page.getByRole('button', { name: 'Add Role' }).click();
    await expect(page.getByRole('heading', { name: 'Role 2' })).toBeVisible();
    await page.locator('[name="experiences.0.roles.1.title"]').fill('Consultant');

    // Only non-first roles are removable; the remove button is a sibling of
    // the role's own heading, inside their shared header row.
    await page
      .getByRole('heading', { name: 'Role 2' })
      .locator('xpath=..')
      .getByRole('button')
      .click();
    await expect(page.getByRole('heading', { name: 'Role 2' })).toHaveCount(0);
  });

  test('adds an achievement to a role', async ({ page }) => {
    // The role starts with zero achievements, so the first click adds
    // "Achievement 1".
    await page.getByRole('button', { name: 'Add Achievement' }).click();
    await page.getByPlaceholder('Achievement 1').fill('Shipped the analytical engine v2');
    await expect(page.getByPlaceholder('Achievement 1')).toHaveValue(
      'Shipped the analytical engine v2'
    );
  });

  test('adds a second experience entry', async ({ page }) => {
    // "Add Experience" also exists in the always-visible "Experience (in
    // years)" widget elsewhere on the page, so this must be scoped.
    await page
      .locator('[data-section="experiences"]')
      .getByRole('button', { name: 'Add Experience', exact: true })
      .click();
    await expect(page.getByRole('heading', { name: 'Experience 2' })).toBeVisible();
  });

  test('hides the section again when the switch is turned off', async ({ page }) => {
    await page.getByText('I have work experience', { exact: true }).click();
    await expect(page.locator('[name="experiences.0.companyName"]')).toHaveCount(0);
  });
});

test.describe('Education section', () => {
  test.beforeEach(async ({ page }) => {
    await freshApp(page);
    await enableAndExpandSection(page, 'education', 'I want to add education');
  });

  test('fills institution details and adds a topic', async ({ page }) => {
    await page.locator('[name="education.0.institution"]').fill('University of London');
    await page.locator('[name="education.0.degree"]').fill('Mathematics');

    await page.getByRole('button', { name: 'Add Topic' }).click();
    await page.getByPlaceholder('Enter a topic or skill learned').fill('Number theory');
    await expect(page.getByPlaceholder('Enter a topic or skill learned')).toHaveValue(
      'Number theory'
    );
  });

  test('current checkbox disables the end date field', async ({ page }) => {
    const endDate = page.locator('[name="education.0.endDate"]');
    await expect(endDate).toBeEnabled();
    await page.locator('[name="education.0.current"]').check();
    await expect(endDate).toBeDisabled();
  });
});

test.describe('Certificates section', () => {
  test.beforeEach(async ({ page }) => {
    await freshApp(page);
    await enableAndExpandSection(page, 'certificates', 'I have certifications to add');
  });

  test('never expires checkbox disables the expiry date field', async ({ page }) => {
    const expiryDate = page.locator('[name="certificates.0.expiryDate"]');
    await expect(expiryDate).toBeEnabled();
    await page.locator('[name="certificates.0.neverExpires"]').check();
    await expect(expiryDate).toBeDisabled();
  });

  test('shows a warning when marked as a free certification', async ({ page }) => {
    await expect(page.getByText(/Free certifications may be viewed less favorably/)).toHaveCount(
      0
    );
    await page.locator('[name="certificates.0.isPaid"]').uncheck();
    await expect(page.getByText(/Free certifications may be viewed less favorably/)).toBeVisible();
  });
});

test.describe('Projects section', () => {
  test.beforeEach(async ({ page }) => {
    await freshApp(page);
    await enableAndExpandSection(page, 'projects', 'I have projects to showcase');
  });

  test('source code URL field is shown by default (source is open)', async ({ page }) => {
    await expect(page.locator('[name="projects.0.sourceCodeUrl"]')).toBeVisible();

    await page.locator('[name="projects.0.isSourceOpen"]').uncheck();
    await expect(page.locator('[name="projects.0.sourceCodeUrl"]')).toHaveCount(0);
  });

  test('selects a suggested technology and adds a custom one', async ({ page }) => {
    await page.getByRole('button', { name: 'React', exact: true }).click();
    await expect(page.getByText('1/10 technologies selected')).toBeVisible();
    await expect(page.getByRole('button', { name: 'React ×' })).toBeVisible();

    await page.getByPlaceholder('Add custom technology').fill('MyFramework');
    await page.getByRole('button', { name: 'Add', exact: true }).click();
    await expect(page.getByText('2/10 technologies selected')).toBeVisible();
    await expect(page.getByRole('button', { name: 'MyFramework ×' })).toBeVisible();

    // Clicking a selected chip removes it again.
    await page.getByRole('button', { name: 'React ×' }).click();
    await expect(page.getByText('1/10 technologies selected')).toBeVisible();
  });
});
