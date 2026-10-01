import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=RpL69PdWGiIsrh-jG704JUXdaEo9fJvGeeqwngpBjJE%3D&redirect_uri=http://192.168.137.2:8600/login/oauth2/code/keycloak&nonce=flRLCdqs3F1aacHm2Ia2dJ4NPAl43f6psjL40xrgYzM&code_challenge=RjqqIlPOLeyXI6h9SNZtIdVHPIJZqZq6xrg1zCCGdnE&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'description Reports' }).click();
});