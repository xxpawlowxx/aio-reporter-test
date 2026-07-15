import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=UXla-0UExhs1XPW2a43kiURvi4K-GeBl7pD9ivomspY%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=9rfYkFQompYrgj-wo0JHzDjL59op7mrN3EVvgT1pXFs&code_challenge=LFjwF_vdkaADCyDh_CXRMCVhc1Deme3K7r6AtxET6h0&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: ' Evaluation' }).click();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('row', { name: '1010A-01 IRON MAN TONY STARK' }).getByRole('checkbox').check();
  await page.locator('ng-component').getByRole('button', { name: 'Run Valuation' }).click();
  await page.getByRole('button', { name: ' Statement' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: ' Pending Cash' }).click();
  const page1 = await page1Promise;
  await page.getByRole('button', { name: ' Cash Flow Projection' }).click();
  await page.goto('http://192.168.137.2:8800/1/evaluation/run?pids=3&ccy=USD&date=2026-05-21&dateType=1&structure=1&pendingLevel=1&groupLevel=None&secBreakdown=false&displayZeroPos=false')
    await page.getByRole('button', { name: ' Performances' }).click();
});