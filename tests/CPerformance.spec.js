import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:8500/signin?url=%2Fclients_list');
  await page.locator('#sign-in-username').click();
  await page.locator('#sign-in-username').fill('admin');
  await page.locator('#sign-in-username').press('Tab');
  await page.locator('#sign-in-password').fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'TONY STARK' }).click();
  await page.getByRole('link', { name: 'timeline Performance' }).click();
  await page.locator('fin-comm-page-filter').getByRole('button').click();
  await page.locator('#pn_id_66').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByText('US DOLLAR').click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('fin-comm-page-filter').getByRole('button').click();
  await page.getByRole('cell', { name: '-1.45% keyboard_arrow_right' }).locator('span').click();
  await page.getByRole('cell', { name: '-0.32% keyboard_arrow_right' }).locator('span').click();
  await page.getByRole('cell', { name: '-0.46% keyboard_arrow_right' }).locator('span').click();
  await page.locator('#pn_id_64').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByText('Transaction').click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByRole('cell', { name: '-1.45% keyboard_arrow_right' }).locator('span').click();
  await page.getByRole('cell', { name: '-0.32% keyboard_arrow_right' }).locator('span').click();
  await page.getByRole('cell', { name: '-0.46% keyboard_arrow_right' }).locator('span').click();
});