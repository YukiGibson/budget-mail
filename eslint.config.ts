import js from "@eslint/js";
import type { Linter } from "eslint";

export default [
  js.configs.recommended,
  {
    ignores: [
      "**/node_modules/**",
      "**/.git/**",
      "**/dist/**",
      "**/*.d.ts",
    ]
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        browser: true,
        node: true,
        es2021: true,
      },
    },
    rules: {
      "no-await-in-loop": 1,
      "no-async-promise-executor": 1,
      "no-const-assign": 1,
      "no-import-assign": 0,
      "no-useless-assignment": 0,
      "camelcase": ["error", { "properties": "always" }],
      "prefer-const": "error", // Use `const` if a variable is never reassigned
      "no-console": "warn", // Warn on `console.log` (optional)
      "eqeqeq": ["error", "always"], // Use === instead of ==
      "no-var": "error", // Prefer `let`/`const` over `var`
      "indent": ["error", 2], // 2-space indentation
      "quotes": ["error", "single"], // Prefer single quotes
      "semi": ["error", "always"], // Enforce semicolons
      "comma-dangle": ["error", "never"], // No trailing commas
      "object-curly-spacing": ["error", "always"], // Spaces inside { }
      "array-bracket-spacing": ["error", "never"], // No spaces inside []
      "arrow-parens": ["error", "always"], // Always use parens in arrow functions
    },
  },
] satisfies Linter.Config[];
