import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=_n-Ff9NCjcJUMkyPS1XnrWDr67tp79UDKTtkJtR6XJQ%3D&redirect_uri=http://192.168.137.2:8600/login/oauth2/code/keycloak&nonce=yGHxZVkOQJCe2dX62klEoIGcAsZE6ig3dFH1lZqHLP0&code_challenge=_0p1uWU9tScXxCm7XRWLMbzMgCkruxL8mJDQR-Sh4WQ&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'note_add Trade Order Capture' }).click();
});