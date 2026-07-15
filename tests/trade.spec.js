import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:8500/signin?url=%2Fclients_list');
  await page.locator('#sign-in-username').click();
  await page.locator('#sign-in-username').fill('admin');
  await page.locator('#sign-in-username').press('Tab');
  await page.locator('#sign-in-password').fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'TONY STARK' }).click();
  await page.getByRole('link', { name: 'note_add Trade Order Capture' }).click();
  await page.locator('#pn_id_74').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByText('BUY EQUITY').click();
  await page.locator('#pn_id_72').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByText('Portfolio Managers').click();
  await page.locator('fin-comm-trade-order-capture-portfolio').getByRole('button').click();
  await page.getByRole('row', { name: '1010A-01 IRON MAN USD' }).locator('div').nth(2).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('fin-comm-trade-order-capture-security').getByRole('button').click();
  await page.getByRole('row', { name: 'DISNEY USD EQTY ODSH N/A' }).locator('div').nth(2).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('fin-comm-input-text-2').getByRole('textbox').click();
  await page.locator('fin-comm-input-text-2').getByRole('textbox').fill('100');
  await page.getByRole('button', { name: 'Submit Order' }).click();
  await page.getByRole('button', { name: 'Submit Order' }).click();
  await page.getByRole('button', { name: 'Send Order' }).click();
});