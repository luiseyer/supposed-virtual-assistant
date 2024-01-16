module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended'
  ],
  plugins: ['react', 'react-hooks', 'react-refresh'],
  overrides: [
    {
      env: { node: true },
      files: ['.eslintrc.cjs'],
      parserOptions: { sourceType: 'script' }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname
  },
  rules: {
    indent: ['error', 2],
    'jsx-quotes': ['error', 'prefer-single'],
    'import/no-absolute-path': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-refresh/only-export-components': 'warn',
    'react/self-closing-comp': ['error', {
      component: true,
      html: true
    }]
  }
}
