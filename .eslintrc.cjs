module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  globals: {
    module: "readonly",
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "18.0",
    },
  },
  rules: {
    "no-unused-vars": "warn",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
};
