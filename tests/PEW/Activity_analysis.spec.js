import { test, expect } from '@playwright/test';

test('test @FP-TC-319', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=9p4FfKqYPnOufRAeqLRyy6MT_pHr06yc96r80mV13GM%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=IKHvtbU3Z1NGr9tft09yZ1J0v-4uiHi-dHJk_9VrOzE&code_challenge=hDhZ1jINPwSjOoV3g3kVk932JcU8QekLI8qXN4LoUXs&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: ' Activity Analysis' }).click();
  await page.getByRole('textbox', { name: 'Search Portfolio' }).click();
  await page.getByRole('textbox', { name: 'Search Portfolio' }).click();
  await page.getByRole('textbox', { name: 'Search Portfolio' }).fill('stark');
  await page.getByRole('cell', { name: '1010A-' }).click();
  await page.locator('header').getByRole('button', { name: 'Run Analysis' }).click();
  await page.getByRole('button', { name: ' Asset Summary' }).click();
  await page.getByRole('button', { name: ' Realized / Unrealized P&L' }).click();
});