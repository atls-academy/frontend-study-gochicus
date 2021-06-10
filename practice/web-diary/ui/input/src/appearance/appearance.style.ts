import { styleFn } from 'styled-system'

export const createColorStyles = (borderColor): styleFn => () => ({
  borderColor,
})

export const createFontStyles = (fontSize): styleFn => () => ({
  fontSize,
})

export const createAppearanceStyles = ({ borderColor, fontSize }): styleFn => () => ({
  ...createColorStyles(borderColor)(),
  ...createFontStyles(fontSize)(),
})
