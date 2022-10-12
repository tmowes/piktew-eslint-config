# TMoweS ESLint config

[![npm version](https://badgen.net/npm/v/@piktew/eslint-config-react)](https://npm.im/@piktew/eslint-config-react)
ESLint configuration used by Piktew.

## Whats included?

- Airbnb config
- SonarJS plugin
- React Hooks plugin
- React plugin
- JSX a11y plugin
- Prettier

## ⚙️ Setup

Install the dependencies

```bash
npm i -D eslint @piktew/eslint-config-react
# Or Yarn
yarn add -D eslint @piktew/eslint-config-react
```

Create a `.eslintrc` file extending the config:

```json
{
  "extends": "@piktew/eslint-config-react"
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
