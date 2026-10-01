import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=qRyAqwiaV6AcBaMw0RzutnmMHRyr6k7Yb7-H7fJI3Ok%3D&redirect_uri=http://192.168.137.2:8600/login/oauth2/code/keycloak&nonce=BSkKdWht5FcA0ful2NyPEJRjq-ggPWtakGACQfdUoYU&code_challenge=s-1XwP0lrPA0kOunLDdoTfakgvVl_tSN4p5QUWSPQW4&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
});