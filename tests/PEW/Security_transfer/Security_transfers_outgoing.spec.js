import { test, expect } from '@playwright/test';

test('test @FP-TC-350', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=rdWiHJuU5PNFPxBtLaet7wV1QxJuFyYCsszvMPlzbvM%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=Hksb40p26dxv_SHCtJP_1-4E5OQkHtavc5EGXY70n_I&code_challenge=iiPQ8-mC35kuz7XanfIbkJTeHU_0FRlsZMPEROnOxuI&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: 'Back Office' }).click();
  await page.locator('a').filter({ hasText: 'Security Transfers' }).click();
  await page.getByRole('link', { name: 'Outgoing' }).click();
  await page.getByRole('textbox', { name: 'Select Transaction Type' }).click();
  await page.getByRole('cell', { name: 'OUTGOING SECURITIES TRANSFER' }).click();
  await page.getByRole('button', { name: 'Toggle calendar' }).first().click();
  await page.getByLabel('Friday, 28 August').getByText('28').click();
  await page.getByRole('button', { name: 'Toggle calendar' }).nth(1).click();
  await page.getByLabel('Friday, 28 August').getByText('28').click();
  await page.getByRole('button', { name: 'Toggle calendar' }).nth(2).click();
  await page.getByLabel('Friday, 28 August').getByText('28').click();
  await page.locator('lib-portfolio-selector').getByRole('textbox').click();
  await page.locator('lib-portfolio-selector').getByRole('textbox').fill('paw');
  await page.getByRole('cell', { name: 'PAW PORTFOLIO', exact: true }).click();
  await page.getByTitle('Add Line').click();
  await page.locator('lib-security-selector input[type="text"]').click();
  await page.locator('lib-security-selector input[type="text"]').fill('%');
  await page.getByRole('cell', { name: 'WALT DISNEY 0', exact: true }).click();
  await page.locator('.text-end.form-control').first().click();
  await page.locator('.text-end.form-control').first().fill('500');
  await page.getByRole('button', { name: 'Save' }).click();
});

