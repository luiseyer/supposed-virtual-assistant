import { type BUTTON_VARIANT } from './consts'

export type VariantValue = (typeof BUTTON_VARIANT)[keyof typeof BUTTON_VARIANT]
