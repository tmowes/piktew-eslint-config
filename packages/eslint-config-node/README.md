# TMoweS ESLint config

[![npm version](https://badgen.net/npm/v/@piktew/eslint-config-node)](https://npm.im/@piktew/eslint-config-node)
ESLint configuration used by Piktew.

## Whats included?

- Airbnb config base
- SonarJS plugin
- Prettier

## ⚙️ Setup

Install the dependencies

```bash
npm i -D eslint @piktew/eslint-config-node
# Or Yarn
yarn add -D eslint @piktew/eslint-config-node
```

Create a `.eslintrc` file extending the config:

```json
{
  "extends": "@piktew/eslint-config-node"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.

## 📖 Usage

Add lint script to `package.json` file:

```json
  "scripts": {
    ...
    "lint": "eslint src/**/*.ts* --fix"
  }
```
