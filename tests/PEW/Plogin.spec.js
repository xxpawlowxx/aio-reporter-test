import { test, expect } from '@playwright/test';

test('test @FP-TC-313', async ({ page }) => {

 
  // This assertion will FAIL - expecting wrong title
  // await expect(page).toHaveTitle('This Title Does Not Exist');

  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=PwMTaH9zBO-UlezWMwXqhVoS92Hx5TAOHKCMRFLqxXE%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=lyFjKN3ZV50LlS3T0vbLCyB3F9np5RNT9yDYknl3sNk&code_challenge=K-SLmQr6Xm_ly5MwQQoi0AtT78m1sJ77mumDf5g43go&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
});