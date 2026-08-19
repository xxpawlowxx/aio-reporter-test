import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=V8a1_8VD8v3wDVZ8gvfw_mkHN4s5xzsG6qvdrosRK-I%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=UwRhfXl5IeajUJgSvatEjfHpEc6F8jUG7e_SMYMZUoA&code_challenge=5fzMACfY5WXkS58wxsx1QAHey9ewmGbd90iH6apCjK8&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: ' Cash Flow Projection' }).click();
  await page.getByRole('textbox', { name: 'Search Portfolio' }).click();
  await page.getByRole('textbox', { name: 'Search Portfolio' }).fill('stark');
  await page.getByRole('textbox', { name: 'Search Portfolio' }).press('Tab');
  await page.getByRole('row', { name: 'IRON MAN     1010A-01   TONY' }).press('Enter');
  await page.locator('header').getByRole('button', { name: 'Search Events' }).click();
});