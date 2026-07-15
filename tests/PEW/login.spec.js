import { test, expect } from '@playwright/test';

test('test @FP-TC-311', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=wd3zIOpUa0sbidQTPmnaJvcomcS6tE1Sv6ZDhMvlbWQ%3D&redirect_uri=http://192.168.137.2:8800/login/oauth2/code/keycloak&nonce=bc_mqdzIYPMZ-H_sjc1i-6qDnmSJE2KfRa6l5UOOitA&code_challenge=6_It6z5Sbj1DZHRqxdsgdsw9MYgybOitjLnT1_kcSYE&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('http://192.168.137.2:8800/1/home');
  await page.getByRole('link', { name: ' Home' }).click();
  await page.getByRole('link', { name: ' Evaluation' }).click();
  await page.locator('.col-8 > .form-control').first().click();
  await page.locator('.col-8 > .form-control').first().fill('stark');
  await page.locator('.col-8 > .form-control').first().press('Tab');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
});