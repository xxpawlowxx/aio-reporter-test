import { test, expect } from '@playwright/test';

test('test @FP-TC-353', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=5Jn_4gCk6POMqfsdG3JkYvXP6GEtfVPNOlrY9P2Igqc%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=CjCBCd4w01WpAegycs_nJ3h_jSXBjwdwXQelr3Y2Tdc&code_challenge=DtsM5fyrIfL-nHPPpBCxEKnRIH2Uq3ttgZrSZtlhuUU&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Security Master Database' }).click();
  await page.getByRole('link', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search Security (Ctrl K)' }).click();
  await page.getByRole('textbox', { name: 'Search Security (Ctrl K)' }).fill('paw');
  await page.goto('http://192.168.137.2:8800/1/securities/567');
});

