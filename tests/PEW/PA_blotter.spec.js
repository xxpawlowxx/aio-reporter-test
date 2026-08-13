import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=8vUF2Exm1RbOg8XsnVM09wUFaMm0045fPKBvX1lPzEc%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=q7yeISVPwSHCOz-T1abd0c55c2MvQ-ZcxRS16fhpsbY&code_challenge=__XRnLe6bDit7rpUwyahp8eQHxmz8TIPXOUScBOa75c&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Portfolio Administration' }).click();
  await page.getByRole('link', { name: ' Blotter' }).click();
  await page.getByRole('button', { name: 'Refresh' }).click();
  await page.getByRole('textbox', { name: 'Search Portfolio (Ctrl K)' }).click();
  await page.getByRole('textbox', { name: 'Search Portfolio (Ctrl K)' }).fill('star');
  await page.getByText('Portfolio Name *Portfolio').click();
});