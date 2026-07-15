import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:8600/signin?url=%2Fdashboard%2Fdefault%2Fdefault%2Fdefault%2Fdefault%2Fdefault%2Fdefault%2Fdefault');
  await page.locator('#sign-in-username').click();
  await page.locator('#sign-in-username').fill('admin');
  await page.locator('#sign-in-password').click();
  await page.locator('#sign-in-password').fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'list Trade Order Blotter' }).click();
  await page.locator('#pn_id_103').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByRole('option', { name: 'Full access' }).click();
  await page.locator('#pn_id_103').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByText('Portfolio Managers').click();
  await page.getByRole('row', { name: '132 17/Jul/25 BUY EQUITY 100' }).getByRole('button').first().click();
  await page.locator('.app-content > div > div:nth-child(4)').click();
  await page.locator('.app-content > div > div:nth-child(4)').click();
  await page.locator('.app-content > div > div:nth-child(4)').click();
  await page.locator('.app-content > div > div:nth-child(4)').click();
  await page.getByRole('button', { name: 'Back to account list' }).click();
});