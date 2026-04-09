import { test, expect } from '@playwright/test';

// Test chargement de la page
test('la page se charge sans erreur', async ({ page }) => {
  const response = await page.goto('/');
  expect(response.status()).toBe(200);
});

// Test présence du canva dans DOM
test('le canvas est présent', async ({ page }) => {
  await page.goto('/');
  const canvas = page.locator('canvas');
  await expect(canvas).toBeVisible();
});

// Test si il y a une réction quand on appuie sur une touche
test('le jeu réagit à une pression de touche', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('canvas');
  await page.keyboard.press('ArrowLeft');

  // Vérification que la page a pas crash a cause de JS
  await expect(page.locator('canvas')).toBeVisible();
});