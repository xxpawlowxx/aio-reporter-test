import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=nO7OCd1eady3f6B4hG9HoGEVndW3a2ibxKhZ3LBLIgg%3D&redirect_uri=http://192.168.137.2:8600/login/oauth2/code/keycloak&nonce=V4fOFiqohGx4TJ8BZf47SPwo2TJJi38sTHmzZ5Iq9TE&code_challenge=_FoK1h_I3E7mHHzOYZFP2eamBS6CdT_pQTJBsXhhMYg&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'person_add New Client' }).click();
});