import { test, expect } from '@playwright/test';

test('test @FP-TC-322', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=feh9l5mn3dmci8AIgdbIpLQgh_1b7oqeEXWGEnSQukw%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=KjbEvypHWRN8m0r8Z_EdZ9jl0MHpNOXT2v976TetyVI&code_challenge=Om2exuoZ-EonPTOfwWHJ5eA6NBsgI3MknSNBswJqT8s&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Client Administration' }).click();
  await page.getByRole('link', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search Client (Ctrl K)' }).click();
  await page.getByRole('textbox', { name: 'Search Client (Ctrl K)' }).fill('paw');
  await page.getByRole('cell', { name: 'test paw client' }).first().click();
  await page.locator('div:nth-child(17) > .row > .col-8').click();
});

