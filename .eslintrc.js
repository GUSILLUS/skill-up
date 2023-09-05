module.exports = {
  globals: {
    React: 'readonly',
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'import', 'jsx-a11y', 'react-hooks'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-duplicate-imports': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'index'],
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'react/display-name': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  ignorePatterns: ['node_modules', 'dist', 'public'],
};
