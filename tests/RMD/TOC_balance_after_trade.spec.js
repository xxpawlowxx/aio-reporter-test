import { test, expect } from '@playwright/test';

test('Balance After Trade matches between order creation and the blotter', async ({ page }) => {
  // --- Login ---
  await page.goto('http://192.168.137.2:8600/');
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // --- Create a trade order (Trade Order Capture) ---
  await page.getByRole('link', { name: 'note_add Trade Order Capture' }).click();
  await page.locator('fin-comm-trade-order-capture-portfolio').getByRole('button').click();
  await page.locator('.p-radiobutton-box').first().click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('fin-comm-trade-order-capture-security button').click();
  await page.locator('tr:nth-child(3) > td > .p-element > .p-radiobutton > .p-radiobutton-box').click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('.p-inputtext.p-component.p-element.ng-untouched').first().click();
  await page.locator('.p-inputtext.p-component.p-element.ng-untouched').first().fill('200');
  await page.getByRole('button', { name: 'Submit Order' }).click();

  // --- Capture the order id and Balance After Trade from the review screen ---
  await page.waitForURL(/trade_order_capture\/review\/\d+/, { timeout: 20000 });
  const orderId = page.url().match(/review\/(\d+)/)[1];

  const batAtCreationField = page.locator('fin-comm-input-read-only[label="Balance After Trade"] input').first();
  await expect(batAtCreationField).not.toHaveValue('', { timeout: 20000 });
  const balanceAfterTradeAtCreation = await batAtCreationField.inputValue();

  // --- Open the Trade Order Blotter ---
  await expect(async () => {
    await page.getByRole('link', { name: 'list Trade Order Blotter' }).click();
    await expect(page).toHaveURL(/trade_order_blotter/, { timeout: 5000 });
  }).toPass({ timeout: 30000 });

  // Scope to "Orders I created" so the order created above is listed
  await expect(page.locator('p-dropdown')).toHaveCount(3, { timeout: 20000 });
  await expect(page.locator('.p-dropdown-panel')).toHaveCount(0);
  await page.locator('p-dropdown').nth(0).getByRole('button', { name: 'dropdown trigger' }).click();
  await page.locator('li[role="option"][aria-label="Orders I created"]:visible').click();
  await expect(page.locator('.p-dropdown-panel')).toHaveCount(0);

  // --- Find the created transaction by id and open its review view ---
  const orderRow = page.locator('tbody tr').filter({
    has: page.getByRole('cell', { name: orderId, exact: true }),
  }).first();
  await expect(orderRow).toBeVisible({ timeout: 20000 });
  await orderRow.locator('button', { has: page.locator('span.ui-icon-keyboard-arrow-right') }).click();

  // --- Read Balance After Trade from the blotter order and compare ---
  await page.waitForURL(new RegExp(`trade_order_capture/review/${orderId}`), { timeout: 20000 });
  const batInBlotterField = page.locator('fin-comm-input-read-only[label="Balance After Trade"] input').first();
  await expect(batInBlotterField).not.toHaveValue('', { timeout: 20000 });
  const balanceAfterTradeInBlotter = await batInBlotterField.inputValue();

  expect(balanceAfterTradeInBlotter).toBe(balanceAfterTradeAtCreation);

  console.log(`Order ID: ${orderId}`);
  console.log(`Balance After Trade (at creation): ${balanceAfterTradeAtCreation}`);
  console.log(`Balance After Trade (in blotter):  ${balanceAfterTradeInBlotter}`);
});
