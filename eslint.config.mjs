import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig(
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**", ".agents/**"],
  },

  {
    languageOptions: {
      globals: globals.browser,
    },
  },

  {
    files: ["scripts/**/*.{js,mjs,cjs}", "*.{js,ts,mjs,cjs}"],
    languageOptions: {
      globals: globals.node,
    },
  },

  js.configs.recommended,
  tseslint.configs.recommended,

  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],

  eslintConfigPrettier,
);
