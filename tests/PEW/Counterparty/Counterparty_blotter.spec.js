import { test, expect } from '@playwright/test';

test('test @FP-TC-324', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=64IQmtpGELFrKmYZbCThw5pEro0sXPqB8k3XY599Pio%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=9u9oJe9qE9xJX2CePTaUuBEFnzaaKWAl9JRlCn4VlYw&code_challenge=Xc9Y5XLSiqNXIqhZmcBD8FevgfPOgxOZTDMGwV6muhA&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Bank / Counterparty' }).click();
  await page.getByRole('link', { name: 'Blotter' }).click();
  await page.getByRole('button', { name: 'Refresh' }).click();
  await page.getByRole('textbox', { name: 'Search Bank / Counterparty (' }).click();
  await page.getByRole('textbox', { name: 'Search Bank / Counterparty (' }).fill('paw');
});

