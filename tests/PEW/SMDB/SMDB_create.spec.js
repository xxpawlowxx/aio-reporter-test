import { test, expect } from '@playwright/test';

test('test @FP-TC-352', async ({ page }) => {
  const uniqueSuffix = Date.now().toString().slice(-6);

  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=j69PRvu9Q65U8tbbpnEwETsQ6BgKXFwUVwtcynMQgd8%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=HsIqvhJDes9yaG-snBN4yBnbLabhL8HNAsVCeG4OU2w&code_challenge=yAQ9e8Y7TgSpEsaAltI_0m8xI4z-Yvf4N4dLiZlf3xI&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Security Master Database' }).click();
  await page.getByRole('link', { name: 'Create' }).click();
  await page.locator('select[formcontrolname="TYPE"]').selectOption('CASH');
  const subtypeSelect = page.locator('select[formcontrolname="SUBTYPE"]');
  const subtypeEnabled = await subtypeSelect.isEnabled({ timeout: 15000 }).catch(() => false);
  if (subtypeEnabled) {
    await subtypeSelect.selectOption('CASH');
  }
  await page.locator('input[formcontrolname="NAME1"]').click();
  await page.locator('input[formcontrolname="NAME1"]').fill(`paw test cash ${uniqueSuffix}`);
  await page.locator('select[formcontrolname="FRONTTYPE"]').selectOption('#NULL#');
  await page.locator('select[formcontrolname="NOMINAL_CCY"]').selectOption('USD');
  await page.locator('select[formcontrolname="PRICE_CCY"]').selectOption('USD');
  await page.locator('select[formcontrolname="PRICE_METHOD"]').selectOption('6');
  await page.getByRole('button', { name: 'Save' }).click();
});

