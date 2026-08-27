import { test, expect } from '@playwright/test';

test('test @FP-TC-339', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=5g4hihl4NsE5S6L6tVfiHqdjApAm-Y7MIcFzc486_Eo%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=l5D0UNSaTWpxCbqJOv6YhMcnyfUo2tmHTfduAYAANHM&code_challenge=TgwxbgUd9V2a1xFiv1oEjuqHKG75gnHcabua5HTpqIM&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Portfolio Administration' }).click();
  await page.locator('a').filter({ hasText: 'Portfolio Lists' }).click();
  await page.getByRole('link', { name: 'Blotter' }).nth(1).click();
  await page.getByRole('button', { name: 'Refresh' }).click();
  await page.getByRole('gridcell', { name: 'test paw portfolio list' }).click();
  await page.getByRole('gridcell', { name: 'portfolio test list' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();
  await page.getByRole('button', { name: 'Close' }).click();
});

