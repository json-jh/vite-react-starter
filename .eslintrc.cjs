module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["react-refresh", "eslint-plugin-react"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    indent: ["error", 2],
    "comma-dangle": 0,
    "react/jsx-closing-bracket-location": [1, "tag-aligned"],
    "react/jsx-first-prop-new-line": 1,
    "react/jsx-max-props-per-line": [1, { when: "multiline", maximum: 1 }],
    "react/jsx-props-no-multi-spaces": 1,
    "react/jsx-space-before-closing": 1,
    "react/jsx-closing-tag-location": 1,
    "react/jsx-newline": [0, { prevent: true, allowMultilines: true }],
  },
};
