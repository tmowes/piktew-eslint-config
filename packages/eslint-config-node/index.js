module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:sonarjs/recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['sonarjs', '@typescript-eslint', 'prettier', 'import-helpers'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 104,
        tabWidth: 2,
        arrowParens: 'always',
        trailingComma: 'all',
        endOfLine: 'lf',
        singleQuote: true,
        semi: false,
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'implicit-arrow-linebreak': 'off',
    'camelcase': 'off',
    'class-methods-use-this': 'off',
    'no-useless-constructor': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    'no-unneeded-ternary': 'error',
    'no-unused-vars': 'off',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsForRegex: ['^acc', '^draft'],
      },
    ],
    'no-shadow': 'off',
    'prefer-template': 'error',
    'no-console': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-shadow': ['error'],
    'import/prefer-default-export': 'off',
    'import/no-duplicates': 'off',
    'import/no-named-as-default': 'off',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/test.ts?(x)',
          '**/*.test.ts?(x)',
          '**/spec.ts?(x)',
          '**/*.spec.ts?(x)',
          '**/stories.ts?(x)',
          '**/*.stories.ts?(x)',
          '**/mocks/**/*',
          '**/utils/tests/**/*',
        ],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react$/', '/^react-(native|dom)$/', '/^next/'],
          'module',
          [
            '/^@(assets|common|components|constants|contexts|hooks|mocks|pages|routes|services|styles|utils|shared|store)/',
            '/^~/',
          ],
          ['parent', 'sibling'],
          'index',
        ],
        alphabetize: {
          order: 'ignore',
          ignoreCase: true,
        },
      },
    ],
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: true,
        allowObject: true,
      },
    ],
  },
}
