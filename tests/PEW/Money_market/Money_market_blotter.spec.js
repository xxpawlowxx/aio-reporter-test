import { test, expect } from '@playwright/test';

test('test @FP-TC-335', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=suL29PLVPgy124j4G2Xv8pCgew30szJE5op6Ha9V1Fg%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=Jw-5Hu90-Tej9jthI81irbCqGqyJIjjXN6Yht__GUbI&code_challenge=r9sPo4MfHWGmpJu44aORCg3qPJBS2lsP8XWX1niFrXk&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Back Office' }).click();
  await page.locator('a').filter({ hasText: 'Money Market Deposits' }).click();
  await page.getByRole('link', { name: 'Deposit Blotter' }).click();
  await page.getByRole('button', { name: 'Refresh' }).click();
});

