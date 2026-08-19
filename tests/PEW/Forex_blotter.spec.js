import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=-2yWv-4Ar7G6Dfeno3Gj3wfgBrkXRT7KD7icqnRe22M%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=B2MSlbqjSthd-oC8KxUqH69KA80QThi-JeebOmvmDRI&code_challenge=JK02WuDTdUqBLGa76bPIZwlc5UmHblTHf_xyoC8zlLw&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Back Office' }).click();
  await page.locator('a').filter({ hasText: 'Foreign Exchange' }).click();
  await page.getByRole('link', { name: ' Forward Blotter' }).click();
  await page.getByRole('combobox').first().selectOption('FOX');
  await page.getByRole('button', { name: 'Refresh' }).click();
});