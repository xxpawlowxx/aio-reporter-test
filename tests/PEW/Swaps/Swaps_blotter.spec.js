import { test, expect } from '@playwright/test';

test('test @FP-TC-354', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=iuXrWLYTC0vTe4ujfqsw5oONtDqsb_C0-Pu5gFN7m4s%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=TEJ9X4STZ9dQkkH8cPMRoYSJeTR6wgMORS2TjiQSkEc&code_challenge=f31bjObHqSFIgDyjoxXLcOO4LMwRxd7Xb5FuRXma0B4&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Back Office' }).click();
  await page.locator('a').filter({ hasText: /^Swaps$/ }).click();
  await page.getByRole('link', { name: 'Swaps Blotter' }).click();
  await page.getByRole('button', { name: 'Refresh' }).click();
});

