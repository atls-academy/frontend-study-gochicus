import { styleFn }                                          from 'styled-system'

import { InputBaseShapeProps, InputShapeBorderBottomProps } from './shape.interfaces'

export const createBorderBottomStyles = ({
  borderWeight,
}: InputShapeBorderBottomProps): styleFn => () => ({
  borderBottom: `${borderWeight}px solid`,
})

export const createBaseShape = ({
  size,
  fontFamily,
  fontSize,
}: InputBaseShapeProps): styleFn => () => ({
  height: size,
  fontFamily,
  fontSize,
})
