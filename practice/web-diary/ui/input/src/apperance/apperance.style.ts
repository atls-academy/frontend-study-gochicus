import { styleFn } from 'styled-system'

export const createColorStyles = (borderColor): styleFn => () => ({
  borderColor,
})

export const createAppearanceStyles = ({ borderColor }): styleFn => () => ({
  ...createColorStyles(borderColor)(),
})
