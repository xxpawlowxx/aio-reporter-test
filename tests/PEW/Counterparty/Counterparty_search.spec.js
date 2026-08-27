import { test, expect } from '@playwright/test';

test('test @FP-TC-326', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=xluS8sp6VdhEoa1-kvMZopXcd0Wq5pc_tLwvn6rm6AE%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=xuzuR8HfVY9TZ4RFtbbk_oOztstYCHgfWl19H-vEm3s&code_challenge=gI5nWjikdRVLHKJMuEz6679w3M5jiHj3BvQuEHrTyjE&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Bank / Counterparty' }).click();
  await page.getByRole('link', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search Bank / Counterparty (' }).click();
  await page.getByRole('textbox', { name: 'Search Bank / Counterparty (' }).fill('paw');
  await page.getByRole('cell', { name: 'test paw counterparty' }).first().click();
  await page.getByText('Identifiers & Attributes NameDescriptionExternal ReferenceSwift (BIC)Bank /').click();
});

