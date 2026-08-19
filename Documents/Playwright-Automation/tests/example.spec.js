import { test, expect } from '@playwright/test'

test('Playwright Test', async ({ page }) => {
  await page.goto("https://google.com");
  await expect(page).toHaveTitle("Google")
}) 