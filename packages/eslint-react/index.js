module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:sonarjs/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
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
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'sonarjs',
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
    'import-helpers',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 96,
        tabWidth: 2,
        arrowParens: 'always',
        trailingComma: 'all',
        endOdLine: 'lf',
        bracketSpacing: true,
        singleQuote: true,
        semi: false,
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'implicit-arrow-linebreak': 'off',
    camelcase: 'off',
    'class-methods-use-this': 'off',
    'prefer-template': 'error',
    'func-names': 'off',
    'no-useless-constructor': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    'no-unneeded-ternary': 'error',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'no-empty-pattern': 'off',
    'no-shadow': 'off',
    'no-alert': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-shadow': ['error'],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'react/no-namespace': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-duplicates': 'off',
    'import/no-named-as-default': 'off',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
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
          order: 'asc',
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
