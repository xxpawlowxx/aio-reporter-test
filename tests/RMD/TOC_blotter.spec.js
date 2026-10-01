import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=PDPreRjauEVLFTl6lW9Le3LBpJSCImpu_2co2md1hi8%3D&redirect_uri=http://192.168.137.2:8600/login/oauth2/code/keycloak&nonce=PrDPtfDK-TAAQoYiaAEBSt6jZF0iZA-kmVTcb9_9KLE&code_challenge=mGAWEk_bAMuGElDYwnFguFdZ3uz4yyVCxSNhaYJQIeM&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'list Trade Order Blotter' }).click();
  await page.locator('#pn_id_101').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.locator('#pn_id_101').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.locator('#pn_id_103').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByText('Full access').click();
  await page.locator('#pn_id_103').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByText('Portfolio Managers').click();
});