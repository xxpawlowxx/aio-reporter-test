import { test, expect } from '@playwright/test';

let page; 

test.beforeEach(async ({browser})=>{
  page=await browser.newPage();
  await page.goto('http://192.168.137.2:8600/');
  await page.locator('#sign-in-username').click();
  await page.locator('#sign-in-username').fill('admin');
  await page.locator('#sign-in-username').press('Tab');
  await page.locator('#sign-in-password').fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
 
} 
); 

test.afterEach(async () => {
 /* await page.getByRole('link', { name: 'person', exact: true }).click();
  await page.getByText('exit_to_appSign Out').click();
  await page.getByRole('button', { name: 'No' }).click(); */
  await page.getByRole('link', { name: 'person', exact: true }).click();
  await page.getByText('exit_to_appSign Out').click();
  await page.getByRole('button', { name: 'Yes' }).click();
  
} );
test('Submit Order', async () => {
 /*
await page.goto('http://192.168.137.2:8600/signin?url=%2Fdashboard%2Fdefault%2Fdefault%2Fdefault%2Fdefault%2Fdefault%2Fdefault%2Fdefault');
  await page.locator('#sign-in-username').click();
  await page.locator('#sign-in-username').fill('admin');
  await page.locator('#sign-in-username').press('Tab');
  await page.locator('#sign-in-password').fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  
  */
  await page.getByRole('link', { name: 'note_add Trade Order Capture' }).click();
  await page.locator('#pn_id_109').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByText('BUY EQUITY').click();
  await page.getByRole('combobox', { name: 'Trading' }).click();
  await page.getByText('Portfolio Managers').click();
  await page.locator('fin-comm-trade-order-capture-portfolio').getByRole('button').click();
  await page.getByRole('cell', { name: 'HOTCHNER' }).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('fin-comm-trade-order-capture-security').getByRole('button').click();
  await page.getByRole('row', { name: 'GOLD USD COM PREME N/A' }).locator('div').nth(2).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('.app-content > div > div:nth-child(4)').click();
  await page.locator('.app-content > div > div:nth-child(4)').click();
  await page.locator('.app-content > div > div:nth-child(4)').click();
  await page.locator('.app-content > div > div:nth-child(6)').click();
  await page.locator('fin-comm-input-text-2').getByRole('textbox').click();
  await page.locator('fin-comm-input-text-2').getByRole('textbox').fill('100');
  await page.locator('.app-content > div > div:nth-child(6)').click();
  await page.getByRole('button', { name: 'Submit Order' }).click();
  
  });

test('blotter', async () => {

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

  test('Portfolio Valuation', async () => {
    /*
  await page.goto('http://192.168.137.2:8600/signin?url=%2Fdashboard%2Fdefault%2Fdefault%2Fdefault%2Fdefault%2Fdefault%2Fdefault%2Fdefault');
  await page.locator('#sign-in-username').click();
  await page.locator('#sign-in-username').fill('admin');
  await page.locator('#sign-in-username').press('Tab');
  await page.locator('#sign-in-password').fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  */
  await page.getByRole('link', { name: 'people Accounts' }).click();
  await page.getByRole('row', { name: 'YANG 1015A-01 HKD YIN YANG' }).getByRole('button').nth(1).click();
  await page.waitForTimeout (2000)
}); 