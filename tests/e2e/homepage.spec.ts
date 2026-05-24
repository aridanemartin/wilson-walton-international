import { test, expect } from "@playwright/test";

test.describe("Homepage scaffold", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  // SC-001: Five sections visible, no unhandled JS errors
  test("SC-001: renders five structural sections with no JS errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));

    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("[data-section='hero']")).toBeVisible();
    await expect(page.locator("[data-section='services']")).toBeVisible();
    await expect(page.locator("[data-section='about']")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();

    expect(errors).toHaveLength(0);
  });

  // SC-002: No broken images — all image slots are PlaceholderImage components
  test("SC-002: no broken image indicators anywhere on the page", async ({ page }) => {
    const brokenImages = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("img")).filter(
        (img) => !img.complete || img.naturalWidth === 0
      ).length;
    });
    expect(brokenImages).toBe(0);

    const placeholders = page.locator("[role='img']");
    await expect(placeholders).not.toHaveCount(0);
  });

  // SC-003: Nav items reachable in ≤ 2 interactions — added in US2 task T028
  test("SC-003: all 7 nav items and child groups reachable in ≤ 2 interactions", async ({ page }) => {
    test.skip(true, "TODO: implement in US2 — T028");
  });

  // SC-004: Mobile menu opens/closes in 1 interaction below 768px — added in US2 task T028
  test("SC-004: mobile menu opens and closes within one interaction below 768px", async ({ page }) => {
    test.skip(true, "TODO: implement in US2 — T028");
  });

  // SC-005: No layout-breaking issues at 320px, 768px, 1280px — added in US3 task T034
  test("SC-005: no layout-breaking visual issues at 320px, 768px, and 1280px", async ({ page }) => {
    test.skip(true, "TODO: implement in US3 — T034");
  });
});
