import { test, expect } from '@playwright/test';

test('test @FP-TC-314', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=lIy34jBc5jRJcFx5E-7bT0k23lKGYtm0NA-4-RFi9mA%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=xL041Qody22HPLDN7xKNCRwIlHX1eNynTVYrcQ9ztR4&code_challenge=G4sBdYMxkZuoNjeIaC60vwremDfZB2OSS1e91z8wJVo&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: ' Evaluation' }).click();
  await page.locator('.d-flex.flex-column.container-fluid.mb-2 > .row').click();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
});