import { test, expect } from '@playwright/test';

test('test @FP-TC-334', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=eZxql8qCyqCj_IeczD7dCCpHMgpXpWquMH4TOi0nyt8%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=4BYKzNTMd9fCw_Whku7JSmltohwgbUIWOGPmK3OZ7Ts&code_challenge=qmzxX9NIquSP7lvcyOMduqYBgaQ7O_blXButaT9_cfo&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Back Office' }).click();
  await page.locator('a').filter({ hasText: 'Foreign Exchange' }).click();
  await page.getByRole('link', { name: 'New Contract' }).click();
  await page.getByRole('combobox').first().selectOption('1: Object');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('star');
  await page.getByRole('cell', { name: 'IRON MAN' }).click();
  await page.getByRole('combobox').nth(1).selectOption('CHF');
  await page.getByRole('textbox').nth(5).click();
  await page.getByRole('textbox').nth(5).fill('1500');
  await page.getByRole('combobox').nth(2).selectOption('USD');
  await page.locator('input[type="text"]').nth(2).click();
  await page.locator('input[type="text"]').nth(2).fill('1');
  await page.getByRole('cell', { name: '1010A01.CHF.0' }).click();
  await page.locator('input[type="text"]').nth(3).click();
  await page.locator('input[type="text"]').nth(3).fill('1');
  await page.getByRole('cell', { name: '1010A01.USD.0' }).click();
  await page.locator('input[type="text"]').nth(4).click();
  await page.locator('input[type="text"]').nth(4).fill('ros');
  await page.getByRole('cell', { name: 'ROSS', exact: true }).click();
  await page.locator('input[type="text"]').nth(5).click();
  await page.locator('input[type="text"]').nth(5).fill('1');
  await page.getByRole('cell', { name: '1012A01.USD.0' }).click();
  const finalAccountInput = page.getByRole('textbox').last();
  await finalAccountInput.click();
  await finalAccountInput.fill('1');
  await page.getByRole('cell', { name: '1012A01.CHF.0' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
});

