import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=N1_pBOcLFuQstTRgfffdUbDUjx9a5ZpGtW6L0_bpD7s%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=zfs805YtCFtBMDA2CkWkj4ON6kQba9iprHdcJZ9dhnU&code_challenge=bHkPxOVq-7S68UQ1kkKU5LZp7o-KnyqaHymCIQMlQ5k&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Security Master Database' }).click();
  await page.getByRole('link', { name: ' Blotter' }).click();
  await page.getByRole('textbox', { name: 'Search Security (Ctrl K)' }).click();
  await page.getByRole('textbox', { name: 'Search Security (Ctrl K)' }).fill('paw');
  await page.goto('http://192.168.137.2:8800/1/securities/567');
});