import { test, expect } from '@playwright/test';

test('test @FP-TC-331', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=u_J0LkD-UwYJLDf4DvkEMA1j_VvBL0t19THJIyvncqA%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=37cnqYNff4Sa7FzHtMix2e2WxPd0E6KJFnNtLm02oQw&code_challenge=Mb5r48XFPlUnD8Um3cWmR9ftwnAH-z3PFtATUTX628g&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Evaluation' }).click();
  await page.getByRole('textbox', { name: 'Search Portfolio (Ctrl K)' }).click();
  await page.getByRole('textbox', { name: 'Search Portfolio (Ctrl K)' }).fill('stark');
  await page.getByRole('cell', { name: 'IRON MAN' }).click();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('row', { name: '1010A-01 IRON MAN TONY STARK' }).getByRole('checkbox').check();
  await page.locator('ng-component').getByRole('button', { name: 'Run Valuation' }).click();
  await page.getByText('Asset ClassAsset TypeCurrencyIndustryRegionRisk CountrySectorAsset ClassAsset').click();
  await page.getByRole('button', { name: 'Statement' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Pending Cash' }).click();
  const page1 = await page1Promise;
  await page1.locator('div').filter({ hasText: 'Cash AccountCurrency 1010A01.' }).nth(2).click();
  await page1.close();
  await page.getByRole('button', { name: 'Performances' }).click();
  await page.locator('section').filter({ hasText: 'PeriodStart DateEnd DateInitial AmountFinal' }).click();
});

