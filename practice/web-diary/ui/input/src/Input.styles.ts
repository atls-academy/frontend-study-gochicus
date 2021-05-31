import { prop, switchProp }       from 'styled-tools'

import { createAppearanceStyles } from './appearance'
import { createBaseStyles }       from './base'
import { createBaseShape }        from './shape'

export const baseStyles = createBaseStyles()

export const createBigWidthStyles = createBaseShape({ size: 46 })
export const createSmallWidthStyles = createBaseShape({ size: 164 })

export const widthStyles = switchProp(prop('size', 'small'), () => ({
  big: createBigWidthStyles,
  small: createSmallWidthStyles,
}))

export const greyColorStyles = ({ theme }) =>
  createAppearanceStyles({
    borderColor: theme.colors.lightGrey,
  })
