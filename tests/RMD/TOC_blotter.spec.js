import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=PDPreRjauEVLFTl6lW9Le3LBpJSCImpu_2co2md1hi8%3D&redirect_uri=http://192.168.137.2:8600/login/oauth2/code/keycloak&nonce=PrDPtfDK-TAAQoYiaAEBSt6jZF0iZA-kmVTcb9_9KLE&code_challenge=mGAWEk_bAMuGElDYwnFguFdZ3uz4yyVCxSNhaYJQIeM&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(async () => {
    await page.getByRole('link', { name: 'list Trade Order Blotter' }).click();
    await expect(page).toHaveURL(/trade_order_blotter/, { timeout: 5000 });
  }).toPass({ timeout: 30000 });
  await expect(page.locator('p-dropdown')).toHaveCount(3, { timeout: 20000 });
  const workgroupDropdown = page.locator('p-dropdown').nth(1);

  const selectWorkgroup = async (name) => {
    // Ensure no stale overlay panel lingers before opening.
    await expect(page.locator('.p-dropdown-panel')).toHaveCount(0);
    await workgroupDropdown.getByRole('button', { name: 'dropdown trigger' }).click();
    await page.locator(`li[role="option"][aria-label="${name}"]:visible`).click();
    // Wait for the overlay panel to fully close before the next interaction.
    await expect(page.locator('.p-dropdown-panel')).toHaveCount(0);
  };

  await selectWorkgroup('Full access');
  await selectWorkgroup('Portfolio Managers');
});