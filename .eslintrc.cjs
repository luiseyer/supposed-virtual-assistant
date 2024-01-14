module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended'
  ],
  plugins: ['react', 'react-hooks', 'react-refresh'],
  overrides: [
    {
      env: { node: true },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: { sourceType: 'script' }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    'jsx-quotes': ['error', 'prefer-single'],
    'import/no-absolute-path': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': 'warn'
  }
}
