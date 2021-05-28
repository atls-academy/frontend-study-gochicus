import { switchProp }             from 'styled-tools'

import { createAppearanceStyles } from './appearance'
import { createBaseStyles }       from './base'
import { createShapeStyles }      from './shape/shape.styles'

export const baseStyles = createBaseStyles()

export const greyColorStyles = ({ theme }) =>
  createAppearanceStyles({
    backgroundColor: theme.colors.purple,
    borderColor: theme.colors.grey,
  })

export const normalSizeStyles = createShapeStyles({ height: '40px' })
export const smallSizeStyles = createShapeStyles({ height: '30px' })

export const sizeStyles = switchProp('size', () => ({
  small: smallSizeStyles,
  normal: normalSizeStyles,
}))
