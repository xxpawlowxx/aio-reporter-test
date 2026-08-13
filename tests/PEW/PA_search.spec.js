import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=ZLoqmDfpq4XhCI-v_TA6KimRyDYT8sx-fomgJ56ep8I%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=FxVIF_e_w4GwBti0s2kzZZx-96ciHnhLHCzcGxvRUU4&code_challenge=FE6zCdtYdq5f50Tf7wsMXIE8ZnxGu4vhseoe9xg_2WE&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Portfolio Administration' }).click();
  await page.getByRole('link', { name: ' Search' }).click();
  await page.getByRole('textbox', { name: 'Search Portfolio (Ctrl K)' }).click();
  await page.getByRole('textbox', { name: 'Search Portfolio (Ctrl K)' }).fill('star');
  await page.getByText('# Signature(s)').click();
});