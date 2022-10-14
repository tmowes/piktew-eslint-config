# Piktew ESLint config

## Whats included?

- Airbnb config base;
- SonarJS plugin;
- Prettier;

## Setup for node

Install the dependencies

```bash
npm i -D eslint @piktew/eslint-config-node
```

Create a `.eslintrc` file extending the config:

```bash
{
  "extends": "@piktew/eslint-config-node"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.

## Setup for react

Install the dependencies

```bash
npm i -D eslint @piktew/eslint-config-react
```

Create a `.eslintrc` file extending the config:

```bash
{
  "extends": "@piktew/eslint-config-react"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.
