import { test, expect } from '@playwright/test';
import path from 'path';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:8500/signin?url=%2Fclients_list');
  await page.locator('#sign-in-username').click();
  await page.locator('#sign-in-username').fill('ADMIN');
  await page.locator('#sign-in-username').press('Tab');
  await page.locator('#sign-in-password').fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'TONY STARK' }).click();
  await page.getByRole('link', { name: 'list Trade Order Blotter' }).click();
  await page.locator('#pn_id_66').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByRole('option', { name: 'Orders I created' }).click();
  await page.getByRole('combobox', { name: 'Compliance' }).click();
  await page.getByText('Portfolio Managers').click();
  await page.getByRole('row', { name: '108 22/Jan/26 BUY EQUITY 100' }).getByRole('button').click();
  
await page.screenshot({ path: 'screenshots/fullpage-screenshot1.png', fullPage: true });

// Locate the fin-comm-input-read-only whose label starts with "Balance Before Trade on"
const balanceBeforeTrade = page.locator('fin-comm-input-read-only label')
  .filter({ hasText: /^Balance Before Trade on/ })
  .locator('..') // Go up to the parent span
  .locator('input[disabled]');

// Wait for the input to be visible
await balanceBeforeTrade.waitFor({ state: 'visible' });

// Extract the value from the input field
const value = await balanceBeforeTrade.inputValue();

console.log('Balance Before Trade value:', value);

// Locate the fin-comm-input-read-only whose label is "Balance After Trade"
const balanceAfterTrade = page.locator('fin-comm-input-read-only label')
  .filter({ hasText: /^Balance After Trade$/ })
  .locator('..') // Go up to the parent span
  .locator('input[disabled]');

// Wait for the input to be visible                     
await balanceAfterTrade.waitFor({ state: 'visible' });

// Extract the value from the input field
const afterTradeValue = await balanceAfterTrade.inputValue();

console.log('Balance After Trade value:', afterTradeValue);



});