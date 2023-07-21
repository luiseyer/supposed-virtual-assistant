export const BUTTON_VARIANT = {
  CONTAINED: 'contained'
} as const

export const BUTTONS_VARIANTS = {
  [BUTTON_VARIANT.CONTAINED]:
    'text-white mb-2 mr-2  rounded-lg bg-primary px-5 py-2.5 text-sm font-medium hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-800'
} as const
