import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=TTiUdn1xfMIAyf46wOW-QF1TbFgf9SnSlFcbzMoRqa8%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=mshjhR3NpgFxfibIqby-Y9epBy-RJZlLM3X573F2ve4&code_challenge=rl6MoilaueXoDFKX2Rg22SzPg_nXhqGY5IgAfS9sRxI&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: ' Positions' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
});