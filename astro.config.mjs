// @ts-check
import { globSync, readFileSync } from "node:fs";

import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const sourceText = globSync("src/**/*.{astro,ts}", {
  cwd: import.meta.dirname,
}).map((file) => readFileSync(new URL(file, import.meta.url), "utf8"));

const contentFiles = globSync("src/content/**/[^_]*.{md,mdx}", {
  cwd: import.meta.dirname,
}).map((file) => ({
  file,
  content: readFileSync(new URL(file, import.meta.url), "utf8"),
}));

const contentText = contentFiles.map(({ content }) => content);

const homeSourceFiles = [
  "src/pages/index.astro",
  "src/layouts/Layout.astro",
  "src/components/Header.astro",
  "src/components/Footer.astro",
  "src/components/Hero.astro",
  "src/components/Skills.astro",
  "src/components/Works.astro",
  "src/components/WorkCard.astro",
  "src/components/WorkVisual.astro",
  "src/components/BlogNotes.astro",
  "src/components/Contact.astro",
  "src/components/SocialLinks.astro",
  "src/data/portfolio.ts",
  "src/lib/content.ts",
].map((file) => readFileSync(new URL(file, import.meta.url), "utf8"));

const homeContentText = contentFiles.map(({ file, content }) => {
  const frontmatter = content.match(/^---\s*([\s\S]*?)\s*---/u)?.[1] ?? "";
  return frontmatter
    .split("\n")
    .filter((line) =>
      file.includes("/works/")
        ? /^(title|summary):|^\s+-\s/u.test(line)
        : /^title:/u.test(line),
    )
    .join("\n");
});

/** @param {string[]} sources */
const collectGlyphs = (sources) => [
  ...new Set(
    sources
      .flatMap((source) => [...source])
      .filter((character) => /[\p{L}\p{N}\p{P}\p{S}\p{Zs}]/u.test(character)),
  ),
];

const homeFontGlyphs = collectGlyphs([
  ...homeSourceFiles,
  ...homeContentText,
  "年月日",
]);
const contentFontGlyphs = collectGlyphs([...sourceText, ...contentText]);

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: process.env.SITE_URL,
  build: {
    inlineStylesheets: "always",
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "LINE Seed JP",
      options: {
        experimental: {
          glyphs: homeFontGlyphs,
        },
      },
      cssVariable: "--font-line-seed-jp-home",
      weights: [400],
      styles: ["normal"],
      subsets: ["latin", "japanese"],
      fallbacks: [
        "Hiragino Kaku Gothic ProN",
        "Yu Gothic",
        "system-ui",
        "sans-serif",
      ],
      display: "optional",
    },
    {
      provider: fontProviders.google(),
      name: "LINE Seed JP",
      options: {
        experimental: {
          glyphs: contentFontGlyphs,
        },
      },
      cssVariable: "--font-line-seed-jp-content",
      weights: [400, 700],
      styles: ["normal"],
      subsets: ["latin", "japanese"],
      fallbacks: [
        "Hiragino Kaku Gothic ProN",
        "Yu Gothic",
        "system-ui",
        "sans-serif",
      ],
      display: "optional",
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
