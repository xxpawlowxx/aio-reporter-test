import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:8500/signin?url=%2Fclients_list');
  await page.locator('#sign-in-username').click();
  await page.locator('#sign-in-username').fill('admin');
  await page.locator('#sign-in-username').press('Tab');
  await page.locator('#sign-in-password').fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'TONY STARK' }).click();
  await page.getByRole('link', { name: 'list Trade Order Blotter' }).click();
  await page.locator('#pn_id_66').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByRole('combobox', { name: 'Compliance' }).click();
  await page.getByText('Portfolio Managers').click();
  await page.getByRole('combobox', { name: 'Portfolio Managers' }).click();
  await page.getByText('Full access').click();
  await page.locator('#pn_id_66').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByText('Orders I created').click();
  await page.getByRole('row', { name: '102 15/Jan/26 BUY EQUITY 100' }).getByRole('button').click();

 // Find the element by its class name
  const readOnlyInput = page.locator('form.value.CASH_ACCOUNT_CCY');

  // Get and log the text content (works well for general display)
  const content = await readOnlyInput.textContent();
  console.log('Content:', content);

  // Assert the content is what you expect (for general display)

});