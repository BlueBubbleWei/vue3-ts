module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/airbnb", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": ["warn"],
    semi: [0, "always"],
    "no-trailing-spaces": 2,
    "no-tabs": "off",
    "comma-dangle": [2, "never"], //对象字面量项尾不能有逗号
    "object-curly-spacing": [
      2,
      "always",
      {
        // 大括号内是否允许不必要的空格 always始终允许；never始终不允许
        objectsInObjects: false,
        arraysInObjects: false
      }
    ],
    "comma-dangle": [2, "never"],
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)"],
      env: {
        mocha: true
      }
    }
  ]
};
