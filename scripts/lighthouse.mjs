import { spawn } from "node:child_process";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { chromium } from "@playwright/test";
import { launch } from "chrome-launcher";
import lighthouse from "lighthouse";
import desktopConfig from "lighthouse/core/config/desktop-config.js";

const url = "http://127.0.0.1:4321/";
const categories = ["performance", "accessibility", "best-practices", "seo"];

const preview = spawn(
  "bun",
  ["run", "preview", "--", "--host", "127.0.0.1", "--port", "4321"],
  { stdio: "ignore" },
);

const waitForPreview = async () => {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // The preview server has not accepted connections yet.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("Astro preview did not start within 15 seconds.");
};

const profiles = [
  {
    name: "desktop",
    config: desktopConfig,
  },
  {
    name: "mobile",
    flags: {
      formFactor: "mobile",
      screenEmulation: {
        mobile: true,
        width: 390,
        height: 844,
        deviceScaleFactor: 3,
        disabled: false,
      },
    },
    config: undefined,
  },
];

let chrome;
let chromeProfile;

try {
  await waitForPreview();
  chromeProfile = await mkdtemp(join(tmpdir(), "tkymhrt-lighthouse-"));
  chrome = await launch({
    chromePath: chromium.executablePath(),
    // chrome-launcher rewrites profile paths to Windows paths under WSL, even
    // when the supplied browser is Playwright's Linux Chromium. Supply the
    // flag directly so the temporary profile always stays outside the repo.
    chromeFlags: [
      "--headless=new",
      "--no-sandbox",
      "--disable-dev-shm-usage",
      `--user-data-dir=${chromeProfile}`,
    ],
    userDataDir: false,
  });
  await mkdir("lighthouse-reports", { recursive: true });

  let failed = false;
  for (const profile of profiles) {
    const result = await lighthouse(
      url,
      {
        port: chrome.port,
        logLevel: "error",
        output: "json",
        onlyCategories: categories,
        throttlingMethod: "simulate",
        ...profile.flags,
      },
      profile.config,
    );

    if (!result) {
      throw new Error(`Lighthouse returned no result for ${profile.name}.`);
    }

    const scores = Object.fromEntries(
      categories.map((category) => [
        category,
        Math.round((result.lhr.categories[category]?.score ?? 0) * 100),
      ]),
    );

    await writeFile(
      `lighthouse-reports/${profile.name}.json`,
      JSON.stringify(result.lhr, null, 2),
    );
    process.stdout.write(`${profile.name}: ${JSON.stringify(scores)}\n`);

    if (Object.values(scores).some((score) => score !== 100)) failed = true;
  }

  if (failed) {
    throw new Error(
      "Every Lighthouse category must score 100 on every profile.",
    );
  }
} finally {
  if (chrome) chrome.kill();
  preview.kill("SIGTERM");
  if (chromeProfile) {
    await rm(chromeProfile, { recursive: true, force: true });
  }
}
