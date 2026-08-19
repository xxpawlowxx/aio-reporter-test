import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=t3N6X4WhN6y_LvHLb5e39sszf_SLTxYTCgPmFFiwpiY%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=lLcNjdocIj9W9mih3eBBjokXxxzHutlsVnCHlJVCeAE&code_challenge=REF6vs_4QYO_gCKE-Au2f7DHyiFRRX7d9NM-L3Ab6wY&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Portfolio Administration' }).click();
  await page.getByRole('link', { name: ' Blotter' }).click();
  await page.getByRole('textbox', { name: 'Search Portfolio (Ctrl K)' }).click();
  await page.getByRole('textbox', { name: 'Search Portfolio (Ctrl K)' }).fill('stark');
  await page.getByRole('textbox', { name: 'Search Portfolio (Ctrl K)' }).press('Tab');
  await page.getByRole('row', { name: 'IRON MAN     1010A-01   TONY' }).press('Enter');
  await page.getByRole('button', { name: ' Client Information' }).click();
  await page.getByRole('button', { name: ' External Custody' }).click();
});