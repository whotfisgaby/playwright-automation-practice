// @ts-check
import { defineConfig, devices } from '@playwright/test';
/**
 * @see https://playwright.dev/docs/test-configuration
*/
const config = ({
  testDir: './tests',
  timeout: 40000, // timeout for every step
  expect: {
    timeout: 40000, //timeout for assertion validation
  },
  reporter: 'html',

  use: {

    browserName: 'chromium'
  },


});
module.exports = config

