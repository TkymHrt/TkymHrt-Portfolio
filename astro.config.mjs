// @ts-check
import { globSync, readFileSync } from "node:fs";

import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const fontGlyphs = [
  ...new Set(
    [
      ...globSync("src/**/*.astro", { cwd: import.meta.dirname }),
      ...globSync("src/**/*.ts", { cwd: import.meta.dirname }),
    ]
      .flatMap((file) => [
        ...readFileSync(new URL(file, import.meta.url), "utf8"),
      ])
      .filter((character) => /[\p{L}\p{N}\p{P}\p{S}\p{Zs}]/u.test(character)),
  ),
];

// https://astro.build/config
export default defineConfig({
  output: "static",
  build: {
    inlineStylesheets: "always",
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "LINE Seed JP",
      options: {
        experimental: {
          glyphs: fontGlyphs,
        },
      },
      cssVariable: "--font-line-seed-jp",
      weights: [400, 700],
      styles: ["normal"],
      subsets: ["latin", "japanese"],
      fallbacks: [
        "Hiragino Kaku Gothic ProN",
        "Yu Gothic",
        "system-ui",
        "sans-serif",
      ],
      display: "swap",
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
