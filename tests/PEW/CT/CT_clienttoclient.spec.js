import { test, expect } from '@playwright/test';

test('test @FP-TC-327', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=yAkZ2YETaXUHUDv1Y8R2WavhL1ycXFpX4CcBVO7CDY4%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=C9a7-pKIZ26Kzq8st03X466GZ5CBShFt3xKXLjudSYY&code_challenge=w_0itnFNLPL3KYVs6fsQwzc-SOBf8DFjeBi3XUzYZrE&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Back Office' }).click();
  await page.locator('a').filter({ hasText: 'Cash Transactions' }).click();
  await page.getByRole('link', { name: 'Client to Client' }).click();
  await page.locator('#trtype').getByRole('textbox').click();
  await page.getByRole('cell', { name: 'TRSFR-INT' }).click();
  await page.getByLabel('Transaction Ccy').selectOption('CHF');
  await page.getByRole('textbox', { name: 'Amount CHF' }).click();
  await page.getByRole('textbox', { name: 'Amount CHF' }).fill('1500');
  await page.locator('#debitPortfolio input[type="text"]').click();
  await page.locator('#debitPortfolio input[type="text"]').fill('star');
  await page.locator('#debitPortfolio input[type="text"]').press('Tab');
  await page.getByRole('row', { name: 'IRON MAN 1010A-01 TONY' }).press('Enter');
  await page.locator('#creditPortfolio2 > lib-autocomplete > .ac-no-scroll > .dropdown-toggle > .ac-border > .ac-input-box > .ac-input-wrapper > .form-control').click();
  await page.locator('#creditPortfolio2 > lib-autocomplete > .ac-no-scroll > .dropdown-toggle > .ac-border > .ac-input-box > .ac-input-wrapper > .form-control').fill('paw');
  await page.locator('#creditPortfolio2 > lib-autocomplete > .ac-no-scroll > .dropdown-toggle > .ac-border > .ac-input-box > .ac-input-wrapper > .form-control').press('Tab');
  await page.getByRole('row', { name: 'PAW PORTFOLIO 56567 paw' }).press('Enter');
  await page.getByRole('button', { name: 'Save' }).click();
});

