import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"], // Matches all JavaScript and TypeScript files
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"], // Path to your TypeScript config
        tsconfigRootDir: import.meta.dirname, // Ensures paths resolve correctly
        ecmaVersion: "latest", // Use the latest ECMAScript standard
        sourceType: "module", // Enable ECMAScript modules
      },
      globals: {
        ...globals.browser, // Browser globals like `window` and `document`
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detects the React version
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: reactPlugin,
    },
    rules: {
      // TypeScript Rules
      ...tseslint.configs.strictTypeChecked.rules, // Strict type checking
      ...tseslint.configs.stylisticTypeChecked.rules, // Enforce consistent code style
      "no-unused-vars": "off", // Disable the base rule
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ], // Enforce no unused variables, ignoring those starting with `_`

      // React Rules
      ...reactHooks.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules, // React recommended rules
      ...reactPlugin.configs["jsx-runtime"].rules, // JSX runtime-specific rules
      "react/react-in-jsx-scope": "off", // Not required with new JSX transform
      "react/jsx-uses-react": "off", // Not required with new JSX transform

      // Additional Custom Rules
      "no-console": ["warn", { allow: ["warn", "error"] }], // Allow `console.warn` and `console.error`
      curly: "error", // Enforce consistent use of curly braces
      eqeqeq: ["error", "always"], // Require strict equality
    },
  },
];
