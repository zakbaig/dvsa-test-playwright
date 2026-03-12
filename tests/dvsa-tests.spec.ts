import { test, expect } from '@playwright/test';
import { DvsaPage } from './dvsa-tests-page';

const ERROR_CODES = {
  MOTH_NP_01: {
    code: 'MOTH-NP-01',
    description: 'DVLA ID is required but has not been provided in the request',
  },
} as const;

test.describe('MOT history API documentation', () => {
  test('MOTH-NP-01 is documented correctly', async ({ page }) => {
    const dvsa = new DvsaPage(page);
    const error = ERROR_CODES.MOTH_NP_01;

    await test.step('Given I am on the "Error codes" page', async () => {
      await dvsa.gotoErrorCodes();
    });

    await test.step('Then I should see the heading "Error codes"', async () => {
      await expect(
        page.getByRole('heading', { level: 1, name: 'Error codes' })
      ).toBeVisible();
    });

    await test.step(
      `And I should see error code ${error.code} with the correct description in the table`,
      async () => {
        const errorTable = page.getByRole('table');
        const errorRow = errorTable
          .getByRole('row')
          .filter({ hasText: error.code });

        await expect(errorRow).toHaveCount(1);
        await expect(errorRow).toBeVisible();
        await expect(errorRow).toContainText(error.code);
        await expect(errorRow).toContainText(error.description);
      }
    );
  });
});