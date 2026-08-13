import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=tpLfzgKniO7NbrHcNJYpeuOax3JTHieY6svULCOgPhQ%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=OIaD6i4WHAlhjtt4KPOfqfMWGlNf-nstkzM9CIhzY_k&code_challenge=7Oqv023OMJ5xmxjvsQ2dA5kgMBmI2egIjtKZya4oTDI&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Client Administration' }).click();
  await page.getByRole('link', { name: ' Blotter' }).click();
  await page.getByRole('button', { name: 'Refresh' }).click();
  await page.getByRole('textbox', { name: 'Search Client (Ctrl K)' }).click();
  await page.getByRole('textbox', { name: 'Search Client (Ctrl K)' }).fill('paw');
  await page.goto('http://192.168.137.2:8800/1/clients/192');
  await page.getByText('Identifiers & Attributes NameNumberExternal AliasCompanyTypeJoint').click();
});