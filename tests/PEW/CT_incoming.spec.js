import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=6xtLzYWSgfMwV5UsvS9VriI23aB_Mq0lPs5YXefCbjg%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=Tu3kBRi2mVi-7pX_dANBCXZFpal31VZB78lmeFPR8CE&code_challenge=PT4Vvz4W6d9h278g2fmM_yPjKzd_3NAAw9B1JaQtwxY&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Back Office' }).click();
  await page.locator('a').filter({ hasText: 'Cash Transactions' }).click();
  await page.getByRole('link', { name: ' Incoming' }).click();
  await page.locator('#trtype').getByRole('textbox').click();
  await page.getByRole('cell', { name: 'TRSFR-IN' }).click();
  await page.getByLabel('Transaction Ccy').selectOption('CHF');
  await page.getByRole('textbox', { name: 'Amount CHF' }).click();
  await page.getByRole('textbox', { name: 'Amount CHF' }).fill('1500');
  await page.getByRole('textbox', { name: 'Amount CHF' }).press('Enter');
  await page.locator('#creditPortfolio2 > lib-autocomplete > .ac-no-scroll > .dropdown-toggle > .ac-border > .ac-input-box > .ac-input-wrapper > .form-control').click();
  await page.locator('#creditPortfolio2 > lib-autocomplete > .ac-no-scroll > .dropdown-toggle > .ac-border > .ac-input-box > .ac-input-wrapper > .form-control').fill('sta');
  await page.locator('#creditPortfolio2 > lib-autocomplete > .ac-no-scroll > .dropdown-toggle > .ac-border > .ac-input-box > .ac-input-wrapper > .form-control').press('Tab');
  await page.getByRole('row', { name: 'IRON MAN     1010A-01   TONY' }).press('Enter');
  await page.getByText('Debit PortfolioBNS 200Cash').click();
  await page.getByRole('button', { name: 'Save' }).click();
});