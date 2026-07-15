import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:8500/signin?url=%2Fclients_list');
  await page.locator('#sign-in-username').click();
  await page.locator('#sign-in-username').fill('admin');
  await page.locator('#sign-in-password').click();
  await page.locator('#sign-in-password').fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'TONY STARK' }).click();
  await page.getByRole('link', { name: 'person' }).click();
  await page.getByText('exit_to_appSign Out').click();
  await page.getByRole('button', { name: 'Yes' }).click();
});