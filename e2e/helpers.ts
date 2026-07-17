import type { Page } from '@playwright/test';

/**
 * Navigates to the app and clears persisted state (localStorage) so each test
 * starts from a clean slate, regardless of execution order.
 */
export async function freshApp(page: Page) {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
}

export interface RequiredPersonalInfo {
  fullName: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
}

export const DEFAULT_PERSONAL_INFO: RequiredPersonalInfo = {
  fullName: 'Ada Lovelace',
  title: 'Senior Software Engineer',
  location: 'London, UK',
  email: 'ada.lovelace@example.com',
  phone: '+44 20 7946 0958',
  bio: 'Pioneering software engineer with a passion for analytical engines and elegant algorithms.',
};

/** Fills every required top-level personal info field via its RHF `name` attribute. */
export async function fillRequiredPersonalInfo(
  page: Page,
  overrides: Partial<RequiredPersonalInfo> = {}
) {
  const data = { ...DEFAULT_PERSONAL_INFO, ...overrides };

  await page.locator('[name="fullName"]').fill(data.fullName);
  await page.locator('[name="title"]').fill(data.title);
  await page.locator('[name="location"]').fill(data.location);
  await page.locator('[name="email"]').fill(data.email);
  await page.locator('[name="phone"]').fill(data.phone);
  await page.locator('[name="bio"]').fill(data.bio);

  return data;
}

export type SectionName = 'experiences' | 'education' | 'projects' | 'certificates';

/**
 * Toggles ON a collapsible section (Experience/Education/Projects/Certificates)
 * and expands it. The switch and the expand/collapse chevron are independent
 * pieces of state in CollapsibleSection, so both actions are required before
 * the section's fields become visible. `PersonalInfoForm` wraps each section
 * in a `data-section` container, which we use as a stable scoping anchor.
 */
export async function enableAndExpandSection(
  page: Page,
  section: SectionName,
  switchLabel: string
) {
  const container = page.locator(`[data-section="${section}"]`);
  // The switch's own input is visually hidden (sr-only) behind a styled
  // track div that intercepts pointer events, so click its text label
  // instead - exactly what a real user would do.
  await container.getByText(switchLabel, { exact: true }).click();
  await container.getByRole('button').first().click();
}
