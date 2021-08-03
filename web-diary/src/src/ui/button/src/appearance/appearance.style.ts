import { styleFn }             from 'styled-system'

import { AppearanceInterface } from './appearance.interface'

export const createColorStyles =
  (backgroundColor, borderColor): styleFn =>
  () => ({
    backgroundColor,
    borderColor,
  })

export const createAppearanceStyles =
  ({ backgroundColor, borderColor }: AppearanceInterface): styleFn =>
  () => ({
    ...createColorStyles(backgroundColor, borderColor)(),
  })
