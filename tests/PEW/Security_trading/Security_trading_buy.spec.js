import { test, expect } from '@playwright/test';

test('test @FP-TC-344', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=wauR1luOtlPXjtpAlE61AoZ-fqoQonzV9Shu9DRPT78%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=80NWXGV6WxFzqv2WCVStw201NwC7EnpIki6MAETXB4U&code_challenge=2h0qv9A5Q_M4GroM_1q5r1mrP6hrBX3syKEQIloRa8w&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Back Office' }).click();
  await page.locator('a').filter({ hasText: 'Security Trading' }).click();
  await page.getByRole('link', { name: 'Buy' }).click();
  await page.locator('#security').getByRole('textbox').click();
  await page.locator('#security').getByRole('textbox').fill('%');
  await page.getByRole('cell', { name: 'WALT DISNEY' }).click();
  await page.getByRole('textbox', { name: 'Quantity' }).click();
  await page.getByRole('textbox', { name: 'Quantity' }).fill('1000');
  await page.getByRole('spinbutton', { name: 'Price USD' }).click();
  await page.getByRole('spinbutton', { name: 'Price USD' }).fill('5');
  await page.locator('input[type="text"]').nth(4).click();
  await page.locator('input[type="text"]').nth(4).fill('paw');
  await page.getByRole('cell', { name: 'PAW PORTFOLIO', exact: true }).click();
  await page.locator('#custodian > lib-autocomplete > .ac-no-scroll > .dropdown-toggle > .ac-border > .ac-input-box > .ac-input-wrapper > .form-control').click();
  await page.locator('#custodian > lib-autocomplete > .ac-no-scroll > .dropdown-toggle > .ac-border > .ac-input-box > .ac-input-wrapper > .form-control').fill('%');
  await page.getByRole('cell', { name: 'BCV' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
});

