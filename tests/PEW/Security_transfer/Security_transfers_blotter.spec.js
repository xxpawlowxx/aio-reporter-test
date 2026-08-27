import { test, expect } from '@playwright/test';

test('test @FP-TC-346', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=uPJQvjkmkSvNwzZ2vz0snaPecy9v6O0OX7dBVViGQYs%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=fCz5ir5rREU4VIRRvmXnkIOAgG4qkijVcOm3BRjK8n0&code_challenge=0S6YrFs6LupMPxzkCeZMWLHhXA0gHZkUOKwaF8BKips&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Back Office' }).click();
  await page.locator('a').filter({ hasText: 'Security Transfers' }).click();
  await page.getByRole('link', { name: 'Blotter' }).click();
  await page.getByRole('button', { name: 'Refresh' }).click();
});

