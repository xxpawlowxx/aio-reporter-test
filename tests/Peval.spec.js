import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:8600/signin?url=%2Fdashboard%2Fdefault%2Fdefault%2Fdefault%2Fdefault%2Fdefault%2Fdefault%2Fdefault');
  await page.locator('#sign-in-username').click();
  await page.locator('#sign-in-username').fill('admin');
  await page.locator('#sign-in-username').press('Tab');
  await page.locator('#sign-in-password').fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'people Accounts' }).click();
  await page.getByRole('row', { name: 'YANG 1015A-01 HKD YIN YANG' }).getByRole('button').nth(1).click();
  await page.waitForTimeout (2000)
});