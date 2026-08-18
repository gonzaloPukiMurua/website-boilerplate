import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

/**
 * Baseline "before" snapshots for the landing page as mounted in app/page.tsx.
 * Sections are selected structurally (main > section, in DOM order) so this
 * spec does not require touching any feature/section code.
 */
const SECTIONS = [
  "hero",
  "categories",
  "why-us",
  "brands",
  "services",
  "testimonials",
  "contact",
] as const;

test.describe("Landing baseline", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("full page visual snapshot", async ({ page }) => {
    await expect(page).toHaveScreenshot("full-page.png", { fullPage: true });
  });

  test("full page accessibility", async ({ page }) => {
    // Exclude third-party iframes (e.g. the Google Maps embed in Contact):
    // axe reaches into same-site-accessible iframe documents, and flags
    // structural issues (missing h1, landmarks) in content we don't control.
    const results = await new AxeBuilder({ page }).exclude("iframe").analyze();
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
  });

  for (const [index, name] of SECTIONS.entries()) {
    const selector = `main > section:nth-of-type(${index + 1})`;

    test(`section ${name} - visual snapshot`, async ({ page }) => {
      const section = page.locator(selector);
      await section.scrollIntoViewIfNeeded();
      await expect(section).toHaveScreenshot(`${name}.png`);
    });

    test(`section ${name} - accessibility`, async ({ page }) => {
      const results = await new AxeBuilder({ page })
        .include(selector)
        .exclude("iframe")
        .analyze();
      expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
    });
  }

  // Footer lives outside <main> (sibling in <body>, features/layout/Footer),
  // added in Fase 2 — no Fase 0 baseline to compare against, this establishes one.
  test("section footer - visual snapshot", async ({ page }) => {
    const footer = page.locator("body > footer");
    await footer.scrollIntoViewIfNeeded();
    await expect(footer).toHaveScreenshot("footer.png");
  });

  test("section footer - accessibility", async ({ page }) => {
    const results = await new AxeBuilder({ page })
      .include("body > footer")
      .exclude("iframe")
      .analyze();
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
  });
});
