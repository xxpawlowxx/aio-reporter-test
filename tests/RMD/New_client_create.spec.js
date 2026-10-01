import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=XXLtjysE4WxGihl-sfESbuxFUMOQd6atCCP-yM4gC5E%3D&redirect_uri=http://192.168.137.2:8600/login/oauth2/code/keycloak&nonce=LTnDhnFVeFj_NaZ_RvgowCAqDddl-c7-fDwR99Nv71c&code_challenge=VBy1PcyiRLRmvDNskV2e_c2Z3Yn-AP1ImB8n1JNTDyg&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(async () => {
    await page.getByRole('link', { name: 'person_add New Client' }).click();
    await expect(page).toHaveURL(/clientAdministration/, { timeout: 5000 });
  }).toPass({ timeout: 30000 });
  await page.locator('app-client-identification-card').waitFor({ state: 'visible' });
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('test paw port');
  await page.locator('span.p-float-label').filter({ hasText: 'Client Type' }).getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByRole('option', { name: 'Single Accounts', exact: true }).click();
  await page.locator('app-client-beneficial-owners-card').getByRole('button', { name: 'Add' }).click();
  await page.locator('span').filter({ hasText: 'First Name' }).getByRole('textbox').click();
  await page.locator('span').filter({ hasText: 'First Name' }).getByRole('textbox').fill('paw');
  await page.locator('span').filter({ hasText: 'Last Name' }).getByRole('textbox').click();
  await page.locator('span').filter({ hasText: 'Last Name' }).getByRole('textbox').fill('port');
  await page.locator('app-client-addresses-card').getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox').nth(5).click();
  await page.getByRole('textbox').nth(5).fill('everywhere');
  const relatedRoles = page.locator('app-client-related-roles');
  await relatedRoles.getByRole('button', { name: 'Add' }).click();
  await relatedRoles.getByRole('button', { name: 'dropdown trigger' }).first().click();
  await page.getByRole('option', { name: 'Beneficiary', exact: true }).click();
  await relatedRoles.getByRole('button', { name: 'dropdown trigger' }).nth(1).click();
  await page.getByRole('option', { name: 'MICHAEL STARK' }).click();
  await page.getByRole('button', { name: 'Save Modifications' }).click();
});