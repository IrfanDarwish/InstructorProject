import { test, expect } from "@playwright/test";

test("admin can login and see dashboard", async ({ page }) => {
  await page.goto("/login");

  await page.getByLabel("Email:").fill("admin@gmail.com");
  await page.getByLabel("Password:").fill("password123");

  await page.getByRole("button", { name: /login/i }).click();

  await page.waitForURL("**/dashboard");

  await expect(page.getByRole("heading", { name: /dashboard/i })).toBeVisible();

});

test("admin can search instructors", async ({ page }) => {
  await page.goto("/login");

  await page.getByLabel("Email:").fill("admin@gmail.com");
  await page.getByLabel("Password:").fill("password123");

  await page.getByRole("button", { name: /login/i }).click();

  await page.goto("/instructors");

  const searchBox = page.locator(".search-box input");
  await expect(searchBox).toBeVisible();

  await searchBox.fill("JWT");

  await expect(page.getByText(/showing/i)).toBeVisible();
});