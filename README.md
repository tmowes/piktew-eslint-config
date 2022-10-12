# Piktew ESLint config

## Whats included?

- Airbnb config base;
- SonarJS plugin;
- Prettier;

## Setup for node

Install the dependencies

```bash
npm i -D eslint @piktew/eslint-node
```

Create a `.eslintrc` file extending the config:

```bash
{
  "extends": "@piktew/eslint-node"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.

## Setup for react

Install the dependencies

```bash
npm i -D eslint @piktew/eslint-react
```

Create a `.eslintrc` file extending the config:

```bash
{
  "extends": "@piktew/eslint-react"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.
