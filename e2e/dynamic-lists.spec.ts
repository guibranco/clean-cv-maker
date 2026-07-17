import { test, expect } from '@playwright/test';
import { freshApp } from './helpers';

// ExperienceYearsSection, ProjectsWorkedSection, and LanguagesSection are
// always rendered (not gated behind a switch), and start with empty arrays,
// so on a fresh page these are the only "Add ..." controls of their kind.
test.describe('Always-on dynamic list widgets', () => {
  test.beforeEach(async ({ page }) => {
    await freshApp(page);
  });

  test('adds and removes a language entry', async ({ page }) => {
    await page.getByRole('button', { name: 'Add Language' }).click();
    await page.locator('[name="languages.0.language"]').fill('Portuguese');
    await page.locator('[name="languages.0.proficiency"]').selectOption('5');
    await expect(page.locator('[name="languages.0.proficiency"]')).toHaveValue('5');

    // The remove button is a sibling in the same row as the language input.
    // The row also has a drag handle (a <div role="button">, for keyboard
    // drag-and-drop), so a tag selector is used to target only the real
    // <button> element.
    await page
      .locator('[name="languages.0.language"]')
      .locator('xpath=../..')
      .locator('button')
      .click();
    await expect(page.locator('[name="languages.0.language"]')).toHaveCount(0);
  });

  test('adds an experience-years entry and shows the computed duration', async ({ page }) => {
    await page.getByRole('button', { name: 'Add Experience' }).click();
    await page.locator('[name="experienceYears.0.technology"]').fill('TypeScript');
    await page.locator('[name="experienceYears.0.startDate"]').fill('2018-01');
    await expect(page.getByText(/\+ years/)).toBeVisible();
  });

  test('adds a projects-worked entry', async ({ page }) => {
    await page.getByRole('button', { name: 'Add Project' }).click();
    await page
      .locator('[name="projectsWorked.0"]')
      .fill('Migrated the billing system to microservices');
    await expect(page.locator('[name="projectsWorked.0"]')).toHaveValue(
      'Migrated the billing system to microservices'
    );
  });
});
