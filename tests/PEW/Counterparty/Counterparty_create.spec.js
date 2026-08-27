import { test, expect } from '@playwright/test';

test('test @FP-TC-325', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=keAUAfXxChyqfQl1aviDz7la1TOBTMYMjJUMxJQq00Y%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=m16enlb5LoqAtWRjtfWlz1CPQNxqdXRs6gUArHL8vf0&code_challenge=PE2yaDG_JtQAdC4uVWhgk08T1gonDa4CEKSYcL0C7Wk&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Bank / Counterparty' }).click();
  await page.getByRole('link', { name: 'Create' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('test paw counterparty');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('test paw counterparty');
  await page.getByRole('combobox').first().selectOption('3');
  await page.getByRole('checkbox', { name: 'Broker' }).check();
  await page.getByRole('checkbox', { name: 'Intermediary Bank' }).check();
  await page.getByRole('checkbox', { name: 'Placing Bank' }).check();
  await page.getByRole('checkbox', { name: 'FX Counterparty' }).check();
  await page.getByRole('checkbox', { name: 'Funding Bank' }).check();
  await page.getByRole('combobox').nth(2).selectOption('CHF');
  await page.getByRole('combobox').nth(1).selectOption('EU');
  await page.getByRole('combobox').nth(3).selectOption('en');
  await page.getByRole('combobox').nth(4).selectOption('1');
  await page.getByRole('button', { name: 'Toggle calendar' }).first().click();
  await page.getByLabel('Saturday, 1 August').getByText('1', { exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Identifiers & Attributes NameDescriptionExternal ReferenceSwift (BIC)Bank /').click();
});

