import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=nQZKkD04ylcuXViL6IW6GX_3zuN21JOKJeUfqXVlsIQ%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=69W-rz5HY3a0-yU8iXQuvgK3SLYEMqL3FnQteIl53xE&code_challenge=7jU0AOIMBdvh4pZ6yGbEt-ELNGeJYa_jrKfbaOz_Zq8&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Portfolio Administration' }).click();
  await page.locator('a').filter({ hasText: 'Portfolio Lists' }).click();
  await page.getByRole('link', { name: ' Create' }).click();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('row', { name: '1010A-01 IRON MAN TONY STARK' }).getByRole('checkbox').check();
  await page.getByRole('row', { name: '1012A-01 ROSS BARNEY ROSS' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Create Static List' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('test paw portfolio list');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('portfolio test list');
  await page.getByRole('button', { name: 'Create Static List' }).click();
});