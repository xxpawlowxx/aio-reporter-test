import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.137.2:7080/realms/prospero/protocol/openid-connect/auth?response_type=code&client_id=rest-api-client&scope=openid%20profile%20email&state=jXVDH7AKg7jJOk3MlvGMjgbl_uktCXmMeZeXVN2lCng%3D&redirect_uri=http://192.168.137.2:8500/login/oauth2/code/keycloak&nonce=S9F5lJMmUs1uePZ5VAH807XAQbdxft3l0TG6wGTp240&code_challenge=y9eQ15DifaoXyu4QJyfbDyPGmtOC1UBPUIHiruehOs8&code_challenge_method=S256');
});