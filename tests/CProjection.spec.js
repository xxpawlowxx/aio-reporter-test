import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:8500/signin?url=%2Fclients_list');
  await page.locator('#sign-in-username').click();
  await page.locator('#sign-in-username').fill('admin');
  await page.locator('#sign-in-username').press('Tab');
  await page.locator('#sign-in-password').fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'TONY STARK' }).click();
  await page.getByRole('link', { name: 'fast_forward Cash Projection' }).click();
  await page.locator('fin-comm-page-filter').getByRole('button').click();
  await page.getByRole('button', { name: 'Choose Date' }).click();
  await page.getByRole('button', { name: 'Previous Month' }).click();
  await page.getByRole('button', { name: 'Previous Month' }).dblclick();
  await page.getByRole('button', { name: 'Previous Month' }).click();
  await page.getByRole('button', { name: 'Previous Month' }).click();
  await page.getByText('31').nth(2).click();
  await page.locator('#pn_id_59').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByRole('option', { name: '3' }).click();
  await page.locator('#pn_id_61').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByText('Days').click();
  await page.locator('#pn_id_61').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByText('Months').click();
  await page.getByRole('button', { name: 'Apply' }).click();
});