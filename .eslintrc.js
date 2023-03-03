module.exports = {
   parser: '@typescript-eslint/parser',
   plugins: ['@typescript-eslint'],
   extends: ['prettier'],
   rules: {
      quotes: ['error', 'single'],
      indent: ['error', 3],
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-unused-vars': [
         'error',
         { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'object-curly-spacing': ['error', 'always'],
      'no-console': 'warn',
      'arrow-body-style': ['error', 'as-needed'],
   },
};
