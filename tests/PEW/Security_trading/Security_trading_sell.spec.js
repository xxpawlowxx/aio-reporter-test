import { test, expect } from '@playwright/test';

test('test @FP-TC-345', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=WJtrQclXDcW2IZhVXCKxJcoVMyh8dhtMJybBio-ki8I%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=rB014P84obICRXUfoCGVBJIecDPpUNJwIHdCecxltXg&code_challenge=vtvjg_sv952l2KVycuqZQk1h8OgpvzlNP3U-WI5DRXg&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Back Office' }).click();
  await page.locator('a').filter({ hasText: 'Security Trading' }).click();
  await page.getByRole('link', { name: 'Sell' }).click();
  await page.locator('#security').getByRole('textbox').click();
  await page.locator('#security').getByRole('textbox').fill('%');
  await page.getByRole('cell', { name: 'WALT DISNEY' }).click();
  await page.getByRole('textbox', { name: 'Quantity' }).click();
  await page.getByRole('textbox', { name: 'Quantity' }).fill('1000');
  await page.getByRole('spinbutton', { name: 'Price USD' }).click();
  await page.getByRole('spinbutton', { name: 'Price USD' }).fill('6');
  await page.locator('input[type="text"]').nth(4).click();
  await page.locator('input[type="text"]').nth(4).fill('paw');
  await page.getByRole('cell', { name: 'PAW PORTFOLIO', exact: true }).click();
  await page.locator('#custodian > lib-autocomplete > .ac-no-scroll > .dropdown-toggle > .ac-border > .ac-input-box > .ac-input-wrapper > .form-control').click();
  await page.locator('#custodian > lib-autocomplete > .ac-no-scroll > .dropdown-toggle > .ac-border > .ac-input-box > .ac-input-wrapper > .form-control').fill('%');
  await page.getByRole('cell', { name: 'BCV' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
});

