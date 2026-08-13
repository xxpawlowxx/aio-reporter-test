import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=-8wg5UUqrDfDP1sNKc6KqaMid0XrbHi0beFzvZITrPg%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=_pmuN-_wUpsv9ubkCG-o3c03Jakh4ep6ZR62w2Pi9Fk&code_challenge=CilNyyciKnAYNQwi4DOiqNbVC-5RHKIh98tA4-LKOFM&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Client Administration' }).click();
  await page.getByRole('link', { name: ' Create' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('test paw client');
  await page.getByRole('spinbutton').first().click();
  await page.getByRole('spinbutton').first().fill('4324');
  await page.getByRole('combobox').first().selectOption('2');
  await page.getByRole('combobox').nth(1).selectOption('2');
  await page.getByRole('combobox').nth(2).selectOption('CHF');
  await page.getByRole('combobox').nth(3).selectOption('en');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('OriginIntegrationExisting').click();
});