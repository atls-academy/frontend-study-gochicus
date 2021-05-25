import { switchProp }             from 'styled-tools'

import { createAppearanceStyles } from './appearance'
import { createBaseStyles }       from './base'
import { creatShapeStyles }       from './shape/shape.styels'

export const baseStyles = createBaseStyles()
export const redColorStyles = createAppearanceStyles({
  backgroundColor: 'darkRed',
  borderColor: 'red',
})
export const greenColorStyles = createAppearanceStyles({
  backgroundColor: 'darkGreen',
  borderColor: 'green',
})
export const blueColorStyles = createAppearanceStyles({
  backgroundColor: 'darkBlue',
  borderColor: 'blue',
})
export const normalSizeStyles = creatShapeStyles({ size: '40px' })
export const smallSizeStyles = creatShapeStyles({ size: '20px' })
export const roundedBottomStyles = creatShapeStyles({ borderRadius: '0 0 20px 20px' })
export const roundedTopStyles = creatShapeStyles({ borderRadius: '20px 20px' })
export const roundedBorderStyles = switchProp('borderRadiusPosition', () => ({
  top: roundedTopStyles,
  bottom: roundedBottomStyles,
}))
export const sizeStyles = switchProp('size', () => ({
  small: smallSizeStyles,
  normal: normalSizeStyles,
}))

export const colorStyles = switchProp('color', () => ({
  red: redColorStyles,
  green: greenColorStyles,
  blue: blueColorStyles,
}))
