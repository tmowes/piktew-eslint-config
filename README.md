# Piktew ESLint configs

<p align="center">
  <a href="#piktew-eslint-config-for-nodets-projects">Config for Node</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#piktew-eslint-config-for-reactts-projects">Config for React</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-usage">How to use</a>
</p>

---

## PikTew ESLint config for node/ts projects

- Airbnb config base;
- SonarJS plugin;
- Prettier;

## ⚙️ Setup for node projects

Install the dependencies

```bash
npm i -D eslint @piktew/eslint-config-node
# Or Yarn
yarn add -D eslint @piktew/eslint-config-node
```

Create a `.eslintrc` file extending the config:

```bash
{
  "extends": "@piktew/eslint-config-node"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.

---

## PikTew ESLint config for react/ts projects

- Airbnb config
- SonarJS plugin
- React Hooks plugin
- React plugin
- JSX a11y plugin
- Prettier

## ⚙️ Setup for react projects

Install the dependencies

```bash
npm i -D eslint @piktew/eslint-config-react
# Or Yarn
yarn add -D eslint @piktew/eslint-config-react
```

Create a `.eslintrc` file extending the config:

```bash
{
  "extends": "@piktew/eslint-config-react"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.

---

## 📖 Usage

Add lint script to `package.json` file:

```json
  "scripts": {
    ...
    "lint": "eslint src/**/*.ts* --fix"
  }
```

