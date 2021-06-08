import { prop, switchProp }       from 'styled-tools'

import { createAppearanceStyles } from './appearance'
import { createBaseStyles }       from './base'
import { createBaseShape }        from './shape'

export const baseStyles = createBaseStyles()

export const createBigHeightStyles = createBaseShape({ size: '40px' })
export const createSmallHeightStyles = createBaseShape({ size: '30px' })

export const heightStyles = switchProp(prop('size', 'small'), () => ({
  big: createBigHeightStyles,
  small: createSmallHeightStyles,
}))

export const greyColorStyles = ({ theme }) =>
  createAppearanceStyles({
    borderColor: theme.colors.lightGrey,
    fontSize: theme.fontSizes.small,
  })
