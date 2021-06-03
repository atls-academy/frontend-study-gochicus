import { styleFn }             from 'styled-system'

import { AppearanceInterface } from './appearance.interface'

export const createColorStyles = (backgroundColor, borderColor): styleFn => () => ({
  backgroundColor,
  borderColor,
})

export const createDisplayStyles = (display): styleFn => () => ({
  display,
})
export const createJustifyContentStyles = (justifyContent): styleFn => () => ({
  justifyContent,
})

export const createAppearanceStyles = ({
  backgroundColor,
  borderColor,
  display,
  justifyContent,
}: AppearanceInterface): styleFn => () => ({
  ...createColorStyles(backgroundColor, borderColor)(),
  ...createDisplayStyles(display)(),
  ...createJustifyContentStyles(justifyContent)(),
})
