import { colors, commonColors, nextui } from '@nextui-org/react'
import twColors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: twColors.gray,
      ...commonColors,
    },
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            background: colors.zinc[50],
            primary: {
              DEFAULT: colors.yellow[500],
              50: colors.yellow[900],
              100: colors.yellow[800],
              200: colors.yellow[700],
              300: colors.yellow[600],
              400: colors.yellow[500],
              500: colors.yellow[400],
              600: colors.yellow[300],
              700: colors.yellow[200],
              800: colors.yellow[100],
              900: colors.yellow[50],
            },
            secondary: {
              DEFAULT: colors.blue[400],
              50: colors.blue[900],
              100: colors.blue[800],
              200: colors.blue[700],
              300: colors.blue[600],
              400: colors.blue[500],
              500: colors.blue[400],
              600: colors.blue[300],
              700: colors.blue[200],
              800: colors.blue[100],
              900: colors.blue[50],
            },
            default: {
              DEFAULT: twColors.gray[300],
              50: twColors.gray[950],
              100: twColors.gray[900],
              200: twColors.gray[800],
              300: twColors.gray[700],
              400: twColors.gray[600],
              500: twColors.gray[500],
              600: twColors.gray[400],
              700: twColors.gray[300],
              800: twColors.gray[200],
              900: twColors.gray[100],
              950: twColors.gray[50],
            },
          },
        },
        dark: {
          colors: {
            background: twColors.zinc[950],
            primary: {
              DEFAULT: colors.yellow[400],
              ...colors.yellow,
            },
            secondary: {
              DEFAULT: colors.blue[300],
              ...colors.blue,
            },
            default: {
              DEFAULT: twColors.gray[600],
              ...twColors.gray,
            },
          },
        },
      },
    }),
  ],
}
