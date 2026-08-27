import { test, expect } from '@playwright/test';

test('test @FP-TC-336', async ({ page }) => {
  const dismissInterestDialogIfPresent = async () => {
    const dialog = page.getByRole('dialog').filter({ hasText: 'Client Interest Computation' });
    const isVisible = await dialog.isVisible().catch(() => false);
    if (!isVisible) return;

    const noButton = dialog.getByRole('button', { name: 'No' });
    if (await noButton.isVisible().catch(() => false)) {
      await noButton.click();
    } else {
      const closeButton = dialog.getByRole('button', { name: 'Close' });
      if (await closeButton.isVisible().catch(() => false)) {
        await closeButton.click();
      }
    }

    await expect(dialog).toBeHidden({ timeout: 10000 });
  };

  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=SfOKc5DSMHNgOh7whEQJ7WqrtS6ZI251D-h0ekte2BA%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=3rlV5PaoFj2iUTQulG3zwPZNLtySfWaX_DJYbnJQcNo&code_challenge=vcH6z15ANF0YgqXnFYi7FmkFhnmuXer10hPQwr2ug_U&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Back Office' }).click();
  await page.locator('a').filter({ hasText: 'Money Market Deposits' }).click();
  await page.getByRole('link', { name: ' New Contract' }).click();
  await page.getByRole('combobox').first().selectOption('TERMDEP');
  await page.getByRole('combobox').nth(3).selectOption('USD');
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('500');
  await page.getByRole('button', { name: 'Toggle calendar' }).first().click();
  await page.getByLabel('Friday, 28 August').getByText('28').click();
  await page.getByRole('button', { name: 'Toggle calendar' }).nth(1).click();
  await page.getByLabel('Monday, 31 August').getByText('31').click();
  await page.locator('div:nth-child(16) > .row > .col-auto > .form-select').selectOption('2');
  await page.getByRole('combobox').nth(2).selectOption('5');
  await page.locator('div:nth-child(6) > .row > .col > .form-select').selectOption('6');
  await page.getByRole('textbox').nth(5).click();
  await page.getByRole('textbox').nth(5).fill('0.0400000');
  await page.locator('input[type="text"]').nth(1).click();
  await page.locator('input[type="text"]').nth(1).fill('2');
  await page.locator('lib-deposit-clients').getByRole('button').filter({ hasText: /^$/ }).click();
  await dismissInterestDialogIfPresent();

  const clientPortfolioInput = page.locator('lib-deposit-clients tbody tr').first().getByRole('textbox').first();
  await expect(clientPortfolioInput).toBeVisible({ timeout: 15000 });
  await expect(clientPortfolioInput).toBeEnabled({ timeout: 15000 });
  await clientPortfolioInput.click();
  await clientPortfolioInput.fill('%');
  const clientSuggestionRow = page
    .locator('lib-deposit-clients tbody tr')
    .first()
    .locator('table tr')
    .filter({ hasText: 'TONY STARK' })
    .first();
  await expect(clientSuggestionRow).toBeVisible({ timeout: 15000 });
  await clientSuggestionRow.click();
  await page.locator('lib-external-selector > lib-autocomplete > .ac-no-scroll > .dropdown-toggle > .ac-border > .ac-input-box > .ac-input-wrapper > .form-control').click();
  await page.locator('lib-external-selector > lib-autocomplete > .ac-no-scroll > .dropdown-toggle > .ac-border > .ac-input-box > .ac-input-wrapper > .form-control').fill('%');
  await page.getByRole('cell', { name: 'BANK OF SINGAPORE' }).first().click();
  await page.locator('div:nth-child(3) > .row > .col-8 > lib-portfolio-selector > lib-autocomplete > .ac-no-scroll > .dropdown-toggle > .ac-border > .ac-input-box > .ac-input-wrapper > .form-control').click();
  await page.locator('div:nth-child(3) > .row > .col-8 > lib-portfolio-selector > lib-autocomplete > .ac-no-scroll > .dropdown-toggle > .ac-border > .ac-input-box > .ac-input-wrapper > .form-control').fill('%');
  await page.getByRole('cell', { name: 'IRON MAN', exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).click();
});