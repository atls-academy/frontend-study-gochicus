import { styleFn }        from 'styled-system'

import { ShapeInterface } from './shape.interface'

export const createBaseShape = (size: number | string): styleFn => () => ({
  height: size,
})

export const createBorderStyles = (
  borderStyle: string,
  borderRadius: string | number,
  borderWeight: string | number,
  borderWidth: string | number,
): styleFn => () => ({
  borderStyle,
  borderRadius,
  borderWeight,
  borderWidth,
})
export const createShapeStyles = ({
  size,
  borderStyle,
  borderRadius,
  borderWeight,
  borderWidth,
}: ShapeInterface): styleFn => () => ({
  ...createBaseShape(size)(),
  ...createBorderStyles(borderStyle, borderRadius, borderWeight, borderWidth)(),
})
