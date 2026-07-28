import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
});

test("主要コンテンツが画面幅に応じて表示される", async ({ page }, testInfo) => {
  await expect(
    page.getByRole("heading", { name: "I'm TkymHrt" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Skills" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Works" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Blog", exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
  await expect(page.locator(".project-card")).toHaveCount(3);

  const blogSection = page.locator("#blog");
  await expect(blogSection.getByRole("listitem")).toHaveCount(3);
  await expect(blogSection.locator(".writing-tag")).toHaveCount(0);
  await expect(
    blogSection.getByRole("link", { name: "すべての投稿を見る" }),
  ).toBeVisible();
  const blogDates = await blogSection.locator("time").allTextContents();
  expect(blogDates).toHaveLength(3);
  for (const date of blogDates) {
    expect(date.trim()).toMatch(/^\d{4}\.\d{2}\.\d{2}$/);
  }

  const hero = page.locator("#about");
  for (const label of ["X", "Instagram", "GitHub", "Zenn", "メール"]) {
    await expect(
      hero.getByRole("link", { name: `${label}を開く` }),
    ).toBeVisible();
  }

  const navigation = page.getByRole("navigation", {
    name: "メインナビゲーション",
  });
  if (testInfo.project.name.startsWith("mobile")) {
    await expect(navigation).toBeHidden();
    const mobileNavigation = page.getByRole("navigation", {
      name: "モバイルナビゲーション",
    });
    await expect(mobileNavigation).toBeVisible();
    await expect(
      mobileNavigation.getByRole("link", { name: "About", exact: true }),
    ).toBeVisible();

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

    const mobileNavigationPosition = await mobileNavigation.evaluate(
      (element) => ({
        renderedTop: element.getBoundingClientRect().top,
        stickyTop: Number.parseFloat(getComputedStyle(element).top),
      }),
    );
    expect(mobileNavigationPosition.stickyTop).toBeGreaterThan(0);
    expect(
      Math.abs(
        mobileNavigationPosition.renderedTop -
          mobileNavigationPosition.stickyTop,
      ),
    ).toBeLessThanOrEqual(1);
  } else {
    await expect(navigation).toBeVisible();
    await expect(
      navigation.getByRole("link", { name: "About", exact: true }),
    ).toBeVisible();
  }

  const lowerLayout = await page.evaluate(() => {
    const blog = document.querySelector<HTMLElement>("#blog");
    const contact = document.querySelector<HTMLElement>("#contact");
    if (!blog || !contact) throw new Error("Required sections are missing.");

    const blogRect = blog.getBoundingClientRect();
    const contactRect = contact.getBoundingClientRect();
    return {
      blogTop: blogRect.top,
      blogRight: blogRect.right,
      blogBottom: blogRect.bottom,
      contactTop: contactRect.top,
      contactLeft: contactRect.left,
    };
  });

  if (testInfo.project.name.startsWith("mobile")) {
    expect(lowerLayout.contactTop).toBeGreaterThanOrEqual(
      lowerLayout.blogBottom - 1,
    );
  } else {
    expect(
      Math.abs(lowerLayout.blogTop - lowerLayout.contactTop),
    ).toBeLessThanOrEqual(1);
    expect(lowerLayout.contactLeft).toBeGreaterThanOrEqual(
      lowerLayout.blogRight - 1,
    );
  }

  const hasPageOverflow = await page.evaluate(
    () => document.body.scrollWidth > document.documentElement.clientWidth + 1,
  );
  expect(hasPageOverflow).toBe(false);
});

test("About Meからプロフィールページを開ける", async ({ page }) => {
  await expect(page.getByRole("link", { name: "本文へ移動" })).toHaveCount(0);

  await page.getByRole("link", { name: "About Me", exact: true }).click();
  await expect(page).toHaveURL(/\/about\/?$/);
  await expect(
    page.getByRole("heading", { name: "About Me", exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Profile" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Journey" })).toBeVisible();
  await expect(page.locator(".career-item")).toHaveCount(4);
  await expect(page.getByRole("heading", { name: "Skills" })).toBeVisible();
});

test("作品とBlogを一覧から詳細まで読める", async ({ page }) => {
  await page.goto("/works/");
  await expect(page.getByRole("heading", { name: "Works" })).toBeVisible();
  await expect(page.locator(".project-card")).toHaveCount(3);

  await page.getByRole("link", { name: /Plant Log/ }).click();
  await expect(page).toHaveURL(/\/works\/plant-log\/?$/);
  await expect(page.getByRole("heading", { name: "Plant Log" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "意識したこと" }),
  ).toBeVisible();

  await page.goto("/blog/");
  await expect(
    page.getByRole("heading", { name: "Blog", exact: true }),
  ).toBeVisible();
  const writingList = page.getByRole("region", { name: "Blog一覧" });
  await expect(
    writingList.getByRole("link", {
      name: /Next\.jsでApp Routerを使ってみた/,
    }),
  ).toBeVisible();
  await expect(
    writingList.getByRole("link", {
      name: /ポートフォリオに「読める場所」をつくりました/,
    }),
  ).toBeVisible();

  await writingList
    .getByRole("link", { name: /Next\.jsでApp Routerを使ってみた/ })
    .click();
  await expect(page).toHaveURL(/\/articles\/nextjs-app-router\/?$/);
  await expect(
    page.getByRole("heading", { name: "境界は操作から考える" }),
  ).toBeVisible();
  await expect(page.locator('a[aria-current="page"]').first()).toHaveText(
    "Blog",
  );
  await expect(
    page.getByRole("link", { name: "Blogへ戻る" }).first(),
  ).toBeVisible();

  await page.goto("/blog/");
  await page
    .getByRole("link", {
      name: /ポートフォリオに「読める場所」をつくりました/,
    })
    .click();
  await expect(page).toHaveURL(/\/blog\/portfolio-content-pages\/?$/);
  await expect(
    page.getByRole("heading", { name: "追加しやすさも大切に" }),
  ).toBeVisible();
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

test("追加した一覧・詳細ページに自動アクセシビリティ違反がない", async ({
  page,
}) => {
  const routes = [
    "/about/",
    "/works/",
    "/works/plant-log/",
    "/articles/nextjs-app-router/",
    "/blog/",
    "/blog/portfolio-content-pages/",
  ];

  for (const route of routes) {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(results.violations, `${route} のアクセシビリティ違反`).toEqual([]);
  }
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
  const atmosphere = page.locator("[data-hero-atmosphere]");
  const stillLeaves = atmosphere.locator(".still-leaves");

  await expect(atmosphere).toHaveAttribute("data-motion-state", "reduced");
  await expect(stillLeaves).toBeVisible();
  await expect(page.locator("[data-hero-motion-toggle]")).toBeHidden();

  const [washAnimationName, svgAnimationsPaused] = await Promise.all([
    atmosphere
      .locator(".sun-wash--left")
      .evaluate((element) => getComputedStyle(element).animationName),
    atmosphere.locator("[data-wind-field]").evaluate((element) => {
      return (element as SVGSVGElement).animationsPaused();
    }),
  ]);

  expect(washAnimationName).toBe("none");
  expect(svgAnimationsPaused).toBe(true);

  const behavior = await page.evaluate(
    () => getComputedStyle(document.documentElement).scrollBehavior,
  );
  expect(behavior).toBe("auto");
});

test("ヒーロー背景の動きを停止して再開できる", async ({ page }) => {
  const atmosphere = page.locator("[data-hero-atmosphere]");
  const motionToggle = page.getByRole("button", {
    name: "背景の動きを停止",
  });

  await expect(atmosphere).toHaveAttribute("data-motion-state", "running");
  await expect(motionToggle).toHaveAttribute("aria-pressed", "false");
  await motionToggle.click();

  const playToggle = page.getByRole("button", {
    name: "背景の動きを再生",
  });
  await expect(atmosphere).toHaveAttribute("data-motion-state", "paused");
  await expect(playToggle).toHaveAttribute("aria-pressed", "true");
  await expect
    .poll(() => page.evaluate(() => localStorage.getItem("hero-motion")))
    .toBe("paused");

  const svgAnimationsPaused = await atmosphere
    .locator("[data-wind-field]")
    .evaluate((element) => (element as SVGSVGElement).animationsPaused());
  expect(svgAnimationsPaused).toBe(true);

  await page.reload();
  await expect(atmosphere).toHaveAttribute("data-motion-state", "paused");
  await page.getByRole("button", { name: "背景の動きを再生" }).click();
  await expect(atmosphere).toHaveAttribute("data-motion-state", "running");
});

test("ヒーロー背景の動きは表示中だけ再生される", async ({ page }) => {
  const hero = page.locator("#about");
  const atmosphere = page.locator("[data-hero-atmosphere]");

  await expect(hero).toBeInViewport();
  await expect(atmosphere).toHaveAttribute("data-motion-state", "running");

  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, document.documentElement.scrollHeight);
  });

  await expect(hero).not.toBeInViewport();
  await expect(atmosphere).toHaveAttribute("data-motion-state", "paused");

  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(hero).toBeInViewport();
  await expect(atmosphere).toHaveAttribute("data-motion-state", "running");
});
