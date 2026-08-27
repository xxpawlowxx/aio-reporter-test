import { test, expect } from '@playwright/test';

test('test @FP-TC-329', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=0Z5cflW2hZNzIT-hF13CJgt141g9ngMGmTwgis14kKc%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=7DVet6h9G4oY-ZoYpXK3scpiOegeLp7jpTkuBwvSGw0&code_challenge=L2kWsqYQ6iCSCTFv1lXaYO7q-jw-cTB1QTAsNokS6sY&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Back Office' }).click();
  await page.locator('a').filter({ hasText: 'Cash Transactions' }).click();
  await page.getByRole('link', { name: 'Internal' }).click();
  await page.locator('#trtype').getByRole('textbox').click();
  await page.getByRole('cell', { name: 'TRANSFER NOSTRO-NOSTRO I-I' }).click();
  await page.getByLabel('Transaction Ccy').selectOption('CHF');
  await page.getByRole('textbox', { name: 'Amount CHF' }).click();
  await page.getByRole('textbox', { name: 'Amount CHF' }).fill('1500');
  await page.locator('#debitPortfolio input[type="text"]').click();

  await page.locator('#debitPortfolio input[type="text"]').fill('%');
  await page.getByRole('cell', { name: 'JP MORGAN' }).first().click();
  await page.locator('#creditPortfolio2 > lib-autocomplete > .ac-no-scroll > .dropdown-toggle > .ac-border > .ac-input-box > .ac-input-wrapper > .form-control').click();
  await page.locator('#creditPortfolio2 > lib-autocomplete > .ac-no-scroll > .dropdown-toggle > .ac-border > .ac-input-box > .ac-input-wrapper > .form-control').fill('%');
  await page.getByRole('cell', { name: 'MERRIL LYNCH' }).first().click();
  await page.getByRole('button', { name: 'Save' }).click();
});

