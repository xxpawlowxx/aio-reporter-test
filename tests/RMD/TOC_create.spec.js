import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=tpIV146BBBo_8uNaKcKYCRm--Hy8OpDc8aAytfZHBnw%3D&redirect_uri=http://192.168.137.2:8600/login/oauth2/code/keycloak&nonce=0zNocEz9d7P6lD9gksiHunKNJbtc0l4rBLLKn9TK0-g&code_challenge=GXnLHMLhx5kKp-I_1pZAfl0GATOalZZeBhSObIrB8RA&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'note_add Trade Order Capture' }).click();
  await page.locator('fin-comm-trade-order-capture-portfolio').getByRole('button').click();
  await page.locator('.p-radiobutton-box').first().click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('fin-comm-trade-order-capture-security button').click();
  await page.locator('tr:nth-child(3) > td > .p-element > .p-radiobutton > .p-radiobutton-box').click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('.p-inputtext.p-component.p-element.ng-untouched').first().click();
  await page.locator('.p-inputtext.p-component.p-element.ng-untouched').first().fill('200');
  await page.getByRole('button', { name: 'Submit Order' }).click();

  const validationDialog = page.getByRole('dialog', { name: /Validate this order/i });
  const dialogVisible = await validationDialog.isVisible().catch(() => false);

  if (dialogVisible) {
    await validationDialog.locator('textarea').click();
    await validationDialog.locator('textarea').fill('test');
    await page.getByRole('button', { name: 'Send Order' }).click();
  } else {
    await expect(page.getByRole('button', { name: 'Edit Order' })).toBeVisible({ timeout: 15000 });
  }
});