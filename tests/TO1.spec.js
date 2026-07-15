import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=hCaxS_JrZcrstyMLYWSsj9Mus1Bk8RGUCk9yABb0wiM%3D&redirect_uri=http://192.168.137.2:8500/login/oauth2/code/keycloak&nonce=Y2faT5XSWfJ4WzFnVMfpUhq94bKsuhTZyShIS77anZo&code_challenge=xB6YR45eJ0oUrQWAITeHsRhlsC8jFzX3JHl76_ELsI8&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('ADMIN');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('cell', { name: 'TONY STARK' }).click();
  await page.getByRole('link', { name: 'TONY STARK' }).click();
  await page.getByRole('link', { name: 'person' }).click();
  await page.getByText('exit_to_appSign Out').click();
  await page.getByRole('button', { name: 'Yes' }).click();
});