import { styleFn }        from 'styled-system'

import { ShapeInterface } from './shape.interface'

export const createBaseShape = (height: number | string): styleFn => () => ({
  height,
})

export const createOverflowStyles = (overflowValue: string): styleFn => () => ({
  overflowY: overflowValue,
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
  overflowValue,
  height,
  borderStyle,
  borderRadius,
  borderWeight,
  borderWidth,
}: ShapeInterface): styleFn => () => ({
  ...createBaseShape(height)(),
  ...createBorderStyles(borderStyle, borderRadius, borderWeight, borderWidth)(),
  ...createOverflowStyles(overflowValue)(),
})
