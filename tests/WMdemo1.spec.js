import { test, expect } from '@playwright/test';

let page;

test.beforeEach(async ({browser})=>{
 const page = await browser.newPage();
  await page.goto('http://192.168.137.2:8500/signin?url=%2Fclients_list');
  await page.locator('#sign-in-username').click();
  await page.locator('#sign-in-username').fill('admin');
  await page.locator('#sign-in-password').click();
  await page.locator('#sign-in-password').fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
   
} 
); 


test('test', async () => {
  
 
  await page.getByRole('link', { name: 'TONY STARK' }).click();
  await page.getByRole('link', { name: 'donut_large Valuations' }).click();
  await page.getByRole('row', { name: 'Cash 99.26 %' }).getByRole('button').click();
  await page.getByRole('link', { name: 'person' }).click();
  await page.getByText('exit_to_appSign Out').click();
  await page.getByRole('button', { name: 'Yes' }).click();
});