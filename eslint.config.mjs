import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import daStyle from "eslint-config-dicodingacademy";

export default defineConfig([
  daStyle,
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: { "linebreak-style": "off", quotes: "off" },
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
  },
]);
