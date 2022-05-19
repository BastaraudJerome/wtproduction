module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  parser: ["@babel/eslint-parser"],
  ignorePatterns: [
    "bootstrap.js",
    "**/vendor/*.js", 
  ],

  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: ["error", 2],
  },
};
  