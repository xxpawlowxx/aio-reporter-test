# AI Scenario Generator

This folder is a starter for generating scenario definitions that can later be converted into Playwright tests.

## Usage

```bash
node ai-scenario-generator/src/generate-scenarios.mjs
```

This creates:

- ai-scenario-generator/output/scenarios.json

## What to do next

1. Expose your web app in a test environment.
2. Browse the app with a browser agent or AI tool.
3. Capture real page flows.
4. Update the generated JSON with real scenario steps.
5. Convert those scenarios into automated Playwright tests.

## Example scenario structure

```json
{
  "id": "SCN-001",
  "title": "Login success",
  "module": "Authentication",
  "type": "happy-path",
  "steps": [
    "Open the login page",
    "Enter valid username and password",
    "Click Sign In",
    "Verify the dashboard loads"
  ],
  "expectedResult": "User is authenticated and main dashboard is visible."
}
```
