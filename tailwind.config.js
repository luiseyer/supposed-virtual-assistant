/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true
    },
    colors: {
      ...colors,
      primary: {
        DEFAULT: colors.green[600],
        300: colors.green[300],
        400: colors.green[400],
        500: colors.green[500],
        600: colors.green[600],
        700: colors.green[700],
        800: colors.green[800],
        900: colors.green[900],
        950: colors.green[950]
      },
      secondary: {
        DEFAULT: colors.neutral[400],
        200: colors.neutral[200],
        300: colors.neutral[300],
        400: colors.neutral[400],
        500: colors.neutral[500],
        600: colors.neutral[600],
        700: colors.neutral[700],
        800: colors.neutral[800]
      },
      dark: {
        DEFAULT: colors.neutral[900],
        900: colors.neutral[900],
        950: colors.neutral[950]
      },
      light: {
        DEFAULT: colors.neutral[50],
        100: colors.neutral[100],
        250: colors.neutral[250]
      }
    }
  },
  plugins: []
}
