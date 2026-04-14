import { test, expect } from '@playwright/test';

// Test chargement de la page
test('la page se charge sans erreur', async ({ page }) => {
  const response = await page.goto('/');
  expect(response.status()).toBe(200);
});

// Test que le canvas a bien été initialisé avec WebGL
test('le canvas est initialisé avec WebGL', async ({ page }) => {
  await page.goto('/');

  const webglReady = await page.evaluate(() => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return false;

    // test si le canvas a les bonnes dimensions
    if (canvas.width === 0 || canvas.height === 0) return false;

    // Vérifie l'utilisatioon de WebGL2
    const gl = canvas.getContext('webgl2');
    return gl !== null && !gl.isContextLost();
  });

  expect(webglReady).toBe(true);
});

// Test que l'affichage HUD se met à jour quand le jeu tourne
test("le HUD affiche le score et les points de vie après le démarrage du jeu", async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('canvas');

  // Démarre le jeu (simule un clic dcp)
  await page.evaluate(() => window.dispatchEvent(new MouseEvent('click'))); 

  // Vérifie que le HUD existe et affiche la vie et le score
  const healthAfter = await page.locator('.h').textContent();
  const scoreAfter = await page.locator('.s').textContent();

  // expect(Number(healthAfter)).toBeGreaterThan(0);
  // expect(Number(healthAfter)).toBeLessThanOrEqual(100);
  expect(Number(scoreAfter)).toBeGreaterThanOrEqual(0);
  expect(Number(healthAfter)).toBe(100); // La santé doit etre 100 normalement au début du jeu
});