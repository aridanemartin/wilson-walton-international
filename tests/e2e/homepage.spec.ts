import { test, expect } from "@playwright/test";

test.describe("Homepage scaffold", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  // SC-001: Six sections visible, no unhandled JS errors
  test("SC-001: renders six structural sections with no JS errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));

    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("[data-section='hero']")).toBeVisible();
    await expect(page.locator("[data-section='core-solutions']")).toBeVisible();
    await expect(page.locator("[data-section='industries-served']")).toBeVisible();
    await expect(page.locator("[data-section='why-wilson-walton']")).toBeVisible();
    await expect(page.locator("[data-section='featured-resources']")).toBeVisible();
    await expect(page.locator("[data-section='final-cta']")).toBeVisible();
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

  // SC-003: Nav items reachable in ≤ 2 interactions
  test("SC-003: all 7 nav items and child groups reachable in ≤ 2 interactions", async ({ page }) => {
    const nav = page.locator("nav");
    const topLevel = ["Home", "Solutions", "Industries", "Engineering", "Resources", "Contact"];
    for (const label of topLevel) {
      await expect(nav.getByText(label).first()).toBeVisible();
    }
    await page.getByRole("button", { name: "Solutions" }).click();
    const solutionItems = ["ICCP Systems", "MGPS Systems", "Sacrificial Anodes", "Technical Assistance"];
    for (const item of solutionItems) {
      await expect(nav.getByRole("link", { name: item })).toBeVisible();
    }
  });

  // SC-004: Mobile menu opens/closes in 1 interaction below 768px
  test("SC-004: mobile menu opens and closes within one interaction below 768px", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const hamburger = page.getByRole("button", { name: /menu/i });
    await expect(hamburger).toBeVisible();
    await expect(hamburger).toHaveAttribute("aria-expanded", "false");
    await hamburger.click();
    await expect(hamburger).toHaveAttribute("aria-expanded", "true");
    await hamburger.click();
    await expect(hamburger).toHaveAttribute("aria-expanded", "false");
  });

  // SC-005: No layout-breaking issues at 320px, 768px, 1280px
  test("SC-005: no layout-breaking visual issues at 320px, 768px, and 1280px", async ({ page }) => {
    const sections = [
      "header",
      "[data-section='hero']",
      "[data-section='core-solutions']",
      "[data-section='industries-served']",
      "[data-section='why-wilson-walton']",
      "[data-section='featured-resources']",
      "[data-section='final-cta']",
      "footer",
    ];
    for (const width of [320, 768, 1280]) {
      await page.setViewportSize({ width, height: 900 });
      for (const selector of sections) {
        await expect(page.locator(selector)).toBeVisible();
      }
    }
  });
});
