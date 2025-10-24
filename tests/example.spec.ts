import { test, expect } from "@playwright/test";

test("homepage loads and shows site title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/aleksejunas-dot-no/i);
});
