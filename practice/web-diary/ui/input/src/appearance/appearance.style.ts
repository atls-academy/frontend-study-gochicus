import { styleFn } from 'styled-system'

export const createColorStyles = (borderColor): styleFn => () => ({
  borderColor,
})

export const createFontStyles = (fontFamily, fontSize): styleFn => () => ({
  fontFamily,
  fontSize,
})

export const createAppearanceStyles = ({ borderColor, fontFamily, fontSize }): styleFn => () => ({
  ...createColorStyles(borderColor)(),
  ...createFontStyles(fontFamily, fontSize)(),
})
