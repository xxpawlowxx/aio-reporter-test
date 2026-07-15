import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // login
  await page.goto('http://192.168.137.2:8600/signin?url=%2Fdashboard%2Fdefault%2Fdefault%2Fdefault%2Fdefault%2Fdefault%2Fdefault%2Fdefault');
  await page.locator('#sign-in-username').fill('admin');
  await page.locator('#sign-in-username').press('Tab');
  await page.locator('#sign-in-password').fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();


//logout
  await page.getByRole('link', { name: 'person', exact: true }).click();
  await page.getByText('exit_to_appSign Out').click();
  await page.getByRole('button', { name: 'Yes' }).click();
});