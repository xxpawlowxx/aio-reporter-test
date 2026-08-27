import { test, expect } from '@playwright/test';

test('test @FP-TC-349', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=OeElE2AK3jmbnMLlVxGo9w26hpfYk-y0DUwsPqtNWkc%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=zQzCOLQjo1NyzJ5PRz3GxobeGGuGbPjvHA_j9ZTEO2Q&code_challenge=F-fxSdY00i6Jo4bEvJzR6Bp9jlkXvFQpuMyzf_6yVrI&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Back Office' }).click();
  await page.locator('a').filter({ hasText: 'Security Transfers' }).click();
  await page.getByRole('link', { name: 'Internal' }).click();
  await page.getByRole('textbox', { name: 'Select Transaction Type' }).click();
  await page.getByRole('cell', { name: 'INTERNAL SECURITIES TRANSFER' }).click();
  await page.getByRole('textbox').nth(5).click();
  await page.getByRole('textbox').nth(5).fill('star');
  await page.getByRole('cell', { name: 'IRON MAN' }).click();
  await page.locator('input[type="text"]').nth(3).click();
  await page.locator('input[type="text"]').nth(3).fill('paw');
  await page.getByRole('cell', { name: 'PAW PORTFOLIO', exact: true }).click();
  await page.getByTitle('Add Line').click();
  await page.locator('.d-block.ng-untouched.ng-dirty > lib-autocomplete > .ac-no-scroll > .dropdown-toggle > .ac-border > .ac-input-box > .ac-input-wrapper > .form-control').first().click();
  await page.locator('.d-block.ng-untouched.ng-dirty > lib-autocomplete > .ac-no-scroll > .dropdown-toggle > .ac-border > .ac-input-box > .ac-input-wrapper > .form-control').first().fill('%');
  await page.getByRole('cell', { name: 'HOLCIM 0', exact: true }).click();
  await page.locator('.text-end.form-control').first().click();
  await page.locator('.text-end.form-control').first().fill('500');
  await page.locator('div').filter({ hasText: 'Security TransferAction' }).nth(1).click();
  await page.getByRole('button', { name: 'Save' }).click();
});

