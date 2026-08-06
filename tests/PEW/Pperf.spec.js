import { test, expect } from '@playwright/test';

test('test @FP-TC-315', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=dupj7oFqpJMb1TeMvlIUDhWvBoC6CcwEluEbK5sLXZg%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=dMbxHTKYzzY4izCSFj4MhL3SL2p-fGeYzHernShUgHQ&code_challenge=pVwzLot07rr0ddstkiKidKdPJs6B5KmDnzNn5i3DiXk&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: ' Evaluation' }).click();
  await page.locator('div').filter({ hasText: 'Portfolio #Portfolio' }).nth(4).click();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('cell').nth(3).click();
  await page.locator('ng-component').getByRole('button', { name: 'Run Valuation' }).click();
  await page.getByText('Asset ClassAsset TypeCurrencyIndustryRegionRisk CountrySectorAsset ClassAsset').click();
  await page.getByRole('button', { name: ' Performances' }).click();
  await page.locator('div').filter({ hasText: 'Portfolio PerformanceIRON MAN' }).nth(1).click();
});