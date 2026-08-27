import { test, expect } from '@playwright/test';

test('test @FP-TC-317', async ({ page }) => {
  const uniqueSuffix = Date.now().toString().slice(-6);

  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=h_yUDNmISwv-gf_Sg6HCmU18TMsOOWjxFqR4dqonsOA%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=7R8vwlwU5DTUnale19dwXcrOo1CuNcv6xJ8AiAvshcI&code_challenge=hoiRJGSJ8Y-CSSmuQsA0INh_J-WrnkcEG_2wefTWFYA&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Access Control' }).click();
  await page.getByRole('link', { name: 'User Administration' }).click();
  await page.getByRole('button', { name: 'New' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill(uniqueSuffix);
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill(`auto${uniqueSuffix}`);
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill(`auto${uniqueSuffix}`);
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill(`paw test ${uniqueSuffix}`);
  await page.getByRole('combobox').first().selectOption('99');
  await page.getByRole('textbox').nth(5).click();
  await page.getByRole('textbox').nth(5).fill('testing');
  await page.getByRole('combobox').nth(4).selectOption('99');
  await page.getByRole('checkbox').nth(1).check();
  await page.getByRole('checkbox').nth(3).check();
  await page.getByRole('checkbox').nth(2).check();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('button', { name: 'Accessible Clients' })).toBeVisible();
  await page.getByRole('button', { name: 'Accessible Clients' }).click();
});

