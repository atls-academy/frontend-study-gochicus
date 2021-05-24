import { styleFn }               from 'styled-system'

import { InputAppearanceStyles } from './appearance.interfaces'

export const createColorStyles = (
  backgroundColor: string,
  borderColor: string,
  color: string,
): styleFn => () => ({
  backgroundColor,
  borderColor,
  color,
})

export const createBorderFocusStyles = (color): styleFn => () => ({
  '&:hover': {
    borderColor: color,
  },
})

export const createTransition = (seconds): styleFn => () => ({
  transition: seconds,
})

export const createAppearanceStyles = ({
  fontColor,
  backgroundColor,
  borderColor,
  borderActiveColor,
  transition,
}: InputAppearanceStyles): styleFn => () => ({
  ...createColorStyles(fontColor, backgroundColor, borderColor)(),
  ...createBorderFocusStyles(borderActiveColor)(),
  ...createTransition(transition)(),
})
