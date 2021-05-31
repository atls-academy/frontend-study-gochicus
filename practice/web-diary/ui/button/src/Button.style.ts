import { prop, switchProp }       from 'styled-tools'

import { createAppearanceStyles } from './appearance'
import { createBaseStyles }       from './base'
import { createShapeStyles }      from './shape/shape.styles'

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

export const displayShowStyles = createAppearanceStyles({
  display: 'flex',
})
export const displayHideStyles = createAppearanceStyles({
  display: 'none',
})

export const normalSizeStyles = createShapeStyles({ size: '40px' })
export const smallSizeStyles = createShapeStyles({ size: '30px' })

export const sizeStyles = switchProp(prop('size', 'normal'), () => ({
  small: smallSizeStyles,
  normal: normalSizeStyles,
}))

export const colorStyles = switchProp(prop('color', 'purple'), () => ({
  purple: purpleColorStyles,
  white: whiteColorStyles,
  red: redColorStyles,
  grey: greyColorStyles,
}))

export const displayStyles = switchProp(prop('display', 'hide'), () => ({
  show: displayShowStyles,
  hide: displayHideStyles,
}))
