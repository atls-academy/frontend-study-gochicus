import { prop, switchProp }       from 'styled-tools'

import { createAppearanceStyles } from './appearance'
import { createBaseStyles }       from './base'
import { createShapeStyles }      from './shape'

export const baseStyles = createBaseStyles()

export const whiteColorStyles = ({ theme }) =>
  createAppearanceStyles({
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.purple,
  })
export const purpleColorStyles = ({ theme }) =>
  createAppearanceStyles({
    backgroundColor: theme.colors.purple,
    borderColor: theme.colors.grey,
  })
export const redColorStyles = ({ theme }) =>
  createAppearanceStyles({
    backgroundColor: theme.colors.lightRed,
    borderColor: theme.colors.grey,
  })
export const greyColorStyles = ({ theme }) =>
  createAppearanceStyles({
    backgroundColor: theme.colors.lightGrey,
    borderColor: 'transparent',
  })

export const normaHeightStyles = createShapeStyles({ height: '40px' })
export const smallHeightStyles = createShapeStyles({ height: '30px' })

export const normaWidthStyles = createShapeStyles({ width: '50px' })
export const smallWidthStyles = createShapeStyles({ width: '30px' })
export const bigWidthStyles = createShapeStyles({ width: '80px' })

export const sizeStyles = switchProp(prop('height', 'normal'), () => ({
  small: smallHeightStyles,
  normal: normaHeightStyles,
}))
export const widthStyles = switchProp(prop('width', 'normal'), () => ({
  small: smallWidthStyles,
  normal: normaWidthStyles,
  big: bigWidthStyles,
}))

export const colorStyles = switchProp(prop('color', 'purple'), () => ({
  purple: purpleColorStyles,
  white: whiteColorStyles,
  red: redColorStyles,
  grey: greyColorStyles,
}))
