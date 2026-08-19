import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=pUy3EI6znVJhkbG_xwZV5DxtI6w8Kw9icWBQt9n5hlA%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=Du2pG2HfjhIdRerBEoPI5HQvYDo_CL9aPcgsiGknm8M&code_challenge=CZ29LwSxB51wa394H-nJMaw4jyPvy3TtXZ7h_vLTxKE&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Portfolio Administration' }).click();
  await page.getByRole('link', { name: ' Search' }).click();
  await page.getByRole('textbox', { name: 'Search Portfolio (Ctrl K)' }).click();
  await page.getByRole('textbox', { name: 'Search Portfolio (Ctrl K)' }).fill('stark');
  await page.getByRole('textbox', { name: 'Search Portfolio (Ctrl K)' }).press('Tab');
  await page.getByRole('row', { name: 'IRON MAN     1010A-01   TONY' }).press('Enter');
  await page.getByRole('button', { name: ' Client Information' }).click();
  await page.getByRole('button', { name: ' External Custody' }).click();
  await page.getByRole('button', { name: ' Investment & Compliance' }).click();
  await page.getByRole('button', { name: ' Marketing' }).click();
  await page.getByRole('button', { name: ' Current Accounts' }).click();
  await page.getByRole('button', { name: ' Flexible Fields' }).click();
});