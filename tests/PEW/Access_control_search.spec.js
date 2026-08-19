import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=FaNesmBCOaCNrbZ7O6NTpvWqpZpLkWNW-XAtkq5CUn8%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=4VF6jfwfWGwM85Vt-Cu8Ncl2fa3e2pR3xttnCcYy3xQ&code_challenge=45MrwmXjqpHD1x1BUTNF_Y2eyNi4T0sen6TJUfoXOWE&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Access Control' }).click();
  await page.getByRole('link', { name: ' User Administration' }).click();
  await page.getByRole('textbox', { name: 'Search User (Ctrl K)' }).click();
  await page.getByRole('textbox', { name: 'Search User (Ctrl K)' }).fill('admin');
  await page.getByRole('textbox', { name: 'Search User (Ctrl K)' }).press('Tab');
  await page.getByRole('row', { name: 'ADMIN     ADMIN      ADMIN', exact: true }).press('Enter');
  await page.getByText('Usr Actor 1').click();
  await page.getByRole('button', { name: ' Accessible Clients' }).click();
});