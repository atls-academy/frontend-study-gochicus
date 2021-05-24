import { prop, switchProp }                          from 'styled-tools'

import { createAppearanceStyles, createColorStyles } from '../appearance'
import { createBaseStyles }                          from '../base'
import { createBaseShape, createBorderBottomStyles } from '../shape'

export const baseStyles = createBaseStyles()

const normalSizeStyles = createBaseShape({
  size: 15,
  fontFamily: 'Gordita, sans-serif',
  fontSize: 15,
})

const smallSizeStyles = createBaseShape({
  size: 10,
  fontFamily: 'Gordita, sans-serif',
  fontSize: 10,
})

const giantSizeStyles = createBaseShape({
  size: 20,
  fontFamily: 'Gordita, sans-serif',
  fontSize: 20,
})

export const baseBorderBottomStyles = {
  ...createBorderBottomStyles({ borderWeight: 3 })(),
  ...createAppearanceStyles({
    borderColor: 'black',
    borderActiveColor: 'orange',
    transition: '.2s',
  })(),
}

export const shapeStyles = switchProp(prop('size', 'giant'), () => ({
  normal: normalSizeStyles,
  small: smallSizeStyles,
  giant: giantSizeStyles,
}))
