import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:8500/signin?url=%2Fclients_list');
  await page.locator('#sign-in-username').click();
  await page.locator('#sign-in-username').fill('admin');
  await page.locator('#sign-in-username').press('Tab');
  await page.locator('#sign-in-password').fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'TONY STARK' }).click();
  await page.getByRole('link', { name: 'folder_open Holdings' }).click();
  await page.getByRole('menuitem', { name: 'Cash' }).click();
  await page.getByRole('menuitem', { name: 'Unclassified Assets' }).click();
  await page.getByRole('menuitem', { name: 'Fixed Income' }).click();
  await page.getByRole('menuitem', { name: 'Equities' }).click();
  await page.getByRole('menuitem', { name: 'Funds' }).click();
  await page.getByRole('menuitem', { name: 'Short Term Investments' }).click();
  await page.getByRole('menuitem', { name: 'All' }).click();
  await page.getByRole('row', { name: '1.75 BELL 04/2021-04/2035 1.' }).getByRole('button').first().click();
  await page.getByRole('row', { name: '1.75 BELL 04/2021-04/2035 1.' }).getByRole('button').first().click();
  await page.getByRole('row', { name: '1.75 BELL 04/2021-04/2035 1.' }).getByRole('button').nth(1).click();
  await page.getByRole('link', { name: 'folder_open Holdings' }).click();
  await page.getByRole('link', { name: 'person' }).click();
  await page.getByText('exit_to_appSign Out').click();
  await page.getByRole('button', { name: 'Yes' }).click();
});