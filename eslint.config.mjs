import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import json from "eslint-plugin-json";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}", "**/*.json"],
    plugins: { json },
    processor: "json/json",
    rules: {
      "json/*": ["error", "allowComments"],
      "json/*": ["error", { allowComments: true }],
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
