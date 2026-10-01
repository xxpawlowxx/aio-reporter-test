import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outputDir = path.join(root, 'ai-scenario-generator', 'output');
const scenarioFile = path.join(outputDir, 'scenarios.json');

const defaultScenarios = [
  {
    id: 'SCN-001',
    title: 'Login success',
    module: 'Authentication',
    type: 'happy-path',
    steps: [
      'Open the login page',
      'Enter valid username and password',
      'Click Sign In',
      'Verify the dashboard loads'
    ],
    expectedResult: 'User is authenticated and main dashboard is visible.'
  },
  {
    id: 'SCN-002',
    title: 'Create a new client',
    module: 'Client Administration',
    type: 'happy-path',
    steps: [
      'Open the client management page',
      'Click New Client',
      'Enter required client information',
      'Submit the form',
      'Verify the client appears in the list'
    ],
    expectedResult: 'New client is created successfully.'
  },
  {
    id: 'SCN-003',
    title: 'Search for a security',
    module: 'Security Master Database',
    type: 'search',
    steps: [
      'Open the security search page',
      'Enter a known symbol or keyword',
      'Click Search',
      'Verify matching securities are displayed'
    ],
    expectedResult: 'Relevant securities are returned based on the search query.'
  },
  {
    id: 'SCN-004',
    title: 'Invalid login handling',
    module: 'Authentication',
    type: 'negative-path',
    steps: [
      'Open the login page',
      'Enter an invalid password',
      'Click Sign In',
      'Observe the error message'
    ],
    expectedResult: 'User remains unauthenticated and sees an invalid credentials error.'
  }
];

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(scenarioFile, JSON.stringify(defaultScenarios, null, 2));

console.log(`AI scenario templates generated at: ${scenarioFile}`);
console.log('Edit this file with real app flows and then convert it into Playwright tests.');
