import { colors, nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [nextui({
    addCommonColors: true,
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: colors.green[500],
            ...colors.green
          },
          secondary: {
            DEFAULT: colors.blue[500],
            ...colors.blue
          }
        }
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: colors.green[400],
            ...colors.green
          },
          secondary: {
            DEFAULT: colors.blue[400],
            ...colors.blue
          }
        }
      }
    }
  })]
}
