import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
});

test("主要コンテンツが画面幅に応じて表示される", async ({ page }, testInfo) => {
  await expect(
    page.getByRole("heading", { name: "TkymHrtのポートフォリオ" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Skills" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Works" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Blog / Notes" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
  await expect(page.locator(".project-card")).toHaveCount(3);

  const navigation = page.getByRole("navigation", {
    name: "メインナビゲーション",
  });
  if (testInfo.project.name.startsWith("mobile")) {
    await expect(navigation).toBeHidden();

    const initialFold = await page.evaluate(() => {
      const hero = document.querySelector<HTMLElement>("#about");
      const skills = document.querySelector<HTMLElement>("#skills");
      if (!hero || !skills) throw new Error("Required sections are missing.");

      return {
        heroBottom: hero.getBoundingClientRect().bottom,
        skillsTop: skills.getBoundingClientRect().top,
        viewportHeight: window.visualViewport?.height ?? window.innerHeight,
      };
    });

    expect(initialFold.heroBottom).toBeGreaterThanOrEqual(
      initialFold.viewportHeight,
    );
    expect(initialFold.skillsTop).toBeGreaterThanOrEqual(
      initialFold.viewportHeight,
    );

    await page.locator("#skills").scrollIntoViewIfNeeded();
    await expect(
      page.getByRole("heading", { name: "Skills" }),
    ).toBeInViewport();
  } else {
    await expect(navigation).toBeVisible();
  }

  const hasPageOverflow = await page.evaluate(
    () => document.body.scrollWidth > document.documentElement.clientWidth + 1,
  );
  expect(hasPageOverflow).toBe(false);
});

test("両テーマでWCAG 2.2 AAの自動検査違反がない", async ({ page }) => {
  const lightResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(lightResults.violations).toEqual([]);

  await page.locator("[data-theme-toggle]").click();
  const darkResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(darkResults.violations).toEqual([]);
});

test("テーマ切替が永続化される", async ({ page }) => {
  const toggle = page.locator("[data-theme-toggle]");
  await expect(toggle).toHaveAccessibleName("ダークテーマに切り替える");
  await expect(toggle).toHaveAttribute("aria-pressed", "false");
  await toggle.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(toggle).toHaveAttribute("aria-pressed", "true");
  await expect(toggle).toHaveAccessibleName("ライトテーマに切り替える");

  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(
    page.getByRole("button", { name: "ライトテーマに切り替える" }),
  ).toHaveAttribute("aria-pressed", "true");
});

test("動きを減らす設定を尊重する", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  const behavior = await page.evaluate(
    () => getComputedStyle(document.documentElement).scrollBehavior,
  );
  expect(behavior).toBe("auto");
});
