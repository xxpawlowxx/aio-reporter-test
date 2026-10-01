import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=XXLtjysE4WxGihl-sfESbuxFUMOQd6atCCP-yM4gC5E%3D&redirect_uri=http://192.168.137.2:8600/login/oauth2/code/keycloak&nonce=LTnDhnFVeFj_NaZ_RvgowCAqDddl-c7-fDwR99Nv71c&code_challenge=VBy1PcyiRLRmvDNskV2e_c2Z3Yn-AP1ImB8n1JNTDyg&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'person_add New Client' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('test paw port');
  await page.locator('#pn_id_98').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByText('Single Accounts').click();
  await page.locator('app-client-beneficial-owners-card').getByRole('button', { name: 'Add' }).click();
  await page.locator('span').filter({ hasText: 'First Name' }).getByRole('textbox').click();
  await page.locator('span').filter({ hasText: 'First Name' }).getByRole('textbox').fill('paw');
  await page.locator('span').filter({ hasText: 'Last Name' }).getByRole('textbox').click();
  await page.locator('span').filter({ hasText: 'Last Name' }).getByRole('textbox').fill('port');
  await page.locator('app-client-addresses-card').getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox').nth(5).click();
  await page.getByRole('textbox').nth(5).fill('everywhere');
  await page.locator('app-client-related-roles').getByRole('button', { name: 'Add' }).click();
  await page.locator('#pn_id_103').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByRole('option', { name: 'Beneficiary', exact: true }).click();
  await page.locator('#pn_id_105').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByRole('option', { name: 'MICHAEL STARK' }).click();
  await page.getByRole('button', { name: 'Save Modifications' }).click();
});