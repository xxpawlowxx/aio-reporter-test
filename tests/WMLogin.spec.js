import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';
import path from 'path';


const userDataFile = path.join(__dirname, '../Data/testdata1.xlsx');




test('test', async ({ page }) => {
  
  const workbook = XLSX.readFile(userDataFile);
  const worksheet = workbook.Sheets["Sheet1"];
  const xlsToJson = XLSX.utils.sheet_to_json(worksheet);
  console.log(xlsToJson);


  

  await page.goto('http://192.168.137.2:8500/signin?url=%2Fclients_list');
  await page.locator('#sign-in-username').click();
  await page.locator('#sign-in-username').fill(`${xlsToJson[1].user}`);
  await page.locator('#sign-in-username').press('Tab');
  await page.locator('#sign-in-password').fill(`${xlsToJson[1].pass}`);
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForTimeout(2000);
});