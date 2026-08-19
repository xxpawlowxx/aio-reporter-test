import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=0UJnmq08b6UTEX6RsKSDcIczgbUv-OqkPQcy7lvyzpA%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=v8b6hB5vN8t77pi8MZtId53pLzoqgSN2DKxp0TazCBY&code_challenge=MQGEcDCDKJ5ygceCVSAYAdIx-Z9YEkPZoVZ1tMVSAW4&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Back Office' }).click();
  await page.locator('a').filter({ hasText: 'Cash Transactions' }).click();
  await page.getByRole('link', { name: ' Outgoing' }).click();
  await page.locator('#trtype').getByRole('textbox').click();
  await page.getByRole('cell', { name: 'TRSFR-OUT' }).click();
  await page.getByLabel('Transaction Ccy').selectOption('CHF');
  await page.getByRole('textbox', { name: 'Amount CHF' }).click();
  await page.getByRole('textbox', { name: 'Amount CHF' }).fill('1500');
  await page.locator('#debitPortfolio input[type="text"]').click();
  await page.locator('#debitPortfolio input[type="text"]').fill('star');
  await page.locator('#debitPortfolio input[type="text"]').press('Tab');
  await page.getByRole('row', { name: 'IRON MAN     1010A-01   TONY' }).press('Enter');
  await page.getByRole('button', { name: 'Save' }).click();
});