import { styleFn }        from 'styled-system'

import { ShapeInterface } from './shape.interface'

export const createBaseShape = (
  minSize: number | string,
  maxSize: number | string,
): styleFn => () => ({
  minHeight: minSize,
  maxHeight: maxSize,
})

export const createOverflowStyles = (value: string): styleFn => () => ({
  overflowY: value,
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
  value,
  minSize,
  maxSize,
  borderStyle,
  borderRadius,
  borderWeight,
  borderWidth,
}: ShapeInterface): styleFn => () => ({
  ...createBaseShape(minSize, maxSize)(),
  ...createBorderStyles(borderStyle, borderRadius, borderWeight, borderWidth)(),
  ...createOverflowStyles(value)(),
})
