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

export const justifyContentStartStyles = createAppearanceStyles({ justifyContent: 'flex-start' })
export const justifyContentEndStyles = createAppearanceStyles({ justifyContent: 'flex-end' })

export const normalSizeStyles = createShapeStyles({ minSize: '40px', maxSize: '120px' })
export const smallSizeStyles = createShapeStyles({ minSize: '30px', maxSize: '60px' })

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
export const overflowAutoStyles = createShapeStyles({ value: 'auto' })
export const overflowInheritStyles = createShapeStyles({ value: 'inherit' })

export const overflowStyles = switchProp(prop('scroll', 'inherit'), () => ({
  inherit: overflowInheritStyles,
  auto: overflowAutoStyles,
}))

export const justifyContentStyles = switchProp(prop('position', 'center'), () => ({
  start: justifyContentStartStyles,
  end: justifyContentEndStyles,
}))
