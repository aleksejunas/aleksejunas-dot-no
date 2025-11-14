import { test, expect } from "@playwright/test";

test("homepage links render as navigation tiles", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "BLOG" })).toBeVisible();
  await expect(page.getByRole("link", { name: "WORKS" })).toBeVisible();
});
