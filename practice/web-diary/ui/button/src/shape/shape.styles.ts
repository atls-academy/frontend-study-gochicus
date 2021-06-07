import { styleFn }        from 'styled-system'

import { ShapeInterface } from './shape.interface'

export const createBaseShape = (
  height: number | string,
  width: number | string,
): styleFn => () => ({
  height,
  width,
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
  height,
  width,
  borderStyle,
  borderRadius,
  borderWeight,
  borderWidth,
}: ShapeInterface): styleFn => () => ({
  ...createBaseShape(height, width)(),
  ...createBorderStyles(borderStyle, borderRadius, borderWeight, borderWidth)(),
})
