import { test, expect } from '@playwright/test';

test('test @FP-TC-347', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=uShYqBnL9sZapHtpPiX7jufFpBUuGYlyigWNJ__b2gY%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=6OjW4moAAL1SGxgdqPsbDMcg6mJUpcTPUdTU9m5cUBk&code_challenge=yo7KgOsZHaWp5aPqW7hnVlw2Aca_AQQBT4Zrp2sE1HQ&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Back Office' }).click();
  await page.locator('a').filter({ hasText: 'Security Transfers' }).click();
  await page.getByRole('link', { name: 'Custodian' }).click();
  await page.getByRole('textbox', { name: 'Select Transaction Type' }).click();
  await page.getByRole('cell', { name: 'CUSTODIAN SECURITIES TRANSFER' }).click();
  await page.getByRole('textbox').nth(5).click();
  await page.getByRole('textbox').nth(5).fill('%');
  await page.getByRole('cell', { name: 'IRON MAN' }).click();
  await page.locator('input[type="text"]').nth(3).click();
  await page.locator('input[type="text"]').nth(3).fill('%');
  await page.getByRole('cell', { name: '1012A-' }).click();
  await page.getByTitle('Add Line').click();
  await page.locator('.d-block.ng-untouched.ng-dirty > lib-autocomplete > .ac-no-scroll > .dropdown-toggle > .ac-border > .ac-input-box > .ac-input-wrapper > .form-control').first().click();
  await page.locator('.d-block.ng-untouched.ng-dirty > lib-autocomplete > .ac-no-scroll > .dropdown-toggle > .ac-border > .ac-input-box > .ac-input-wrapper > .form-control').first().fill('%');
  await page.getByRole('cell', { name: 'SWISSCOM 0', exact: true }).click();
  await page.locator('.text-end.form-control').first().click();
  await page.locator('.text-end.form-control').first().fill('1000');
  await page.locator('div').filter({ hasText: 'Security TransferAction' }).nth(1).click();
  await page.getByRole('button', { name: 'Save' }).click();
});

