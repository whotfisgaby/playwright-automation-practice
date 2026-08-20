import { test, expect } from '@playwright/test'

test('Playwright Test 1', async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.getByRole('textbox', { name: 'Username' }).fill('rahulshettyacademy');
  await page.getByRole('textbox', { name: 'Password' }).fill('Learning@830$3mK2');
  await page.getByRole('checkbox', { name: 'I Agree to the terms and Conditions' }).check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'iphone x' }).click();
  await page.locator('form input[name="name"]').fill('Test');
  await page.locator('form input[name="email"]').fill('test@example.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('checkbox', { name: 'Check me out if you Love IceCreams!' }).check();
  await page.locator('div').filter({ hasText: 'Student' }).nth(4).click()
  await page.locator('input[name="bday"]').fill('2024-06-01');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('div').filter({ hasText: 'Success! The Form has been submitted successfully!.' }); // locate the success message and validate the text
  // await expect(page.locator("[style*='block']")).toContainText('Incorrect'); // locate the sudden error message and validate the text

}) 