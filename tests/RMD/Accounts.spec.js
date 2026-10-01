import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=9a0MKAKWpbndwjzc9hpnvJGXbyYbEKqTxtZGjUi-7I4%3D&redirect_uri=http://192.168.137.2:8600/login/oauth2/code/keycloak&nonce=ouf4e-s5IbcyEHt04drd0SOpI5paVZFwHIQvx6nvB18&code_challenge=0SyBGa5LNY5BjH3gLEGiWzj_TjCBwDYYlieLaCfvj5Q&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'people Accounts' }).click();
});