import { styleFn }        from 'styled-system'

import { ShapeInterface } from './shape.interface'

export const createBaseShape =
  (height: number | string | undefined): styleFn =>
  () => ({
    height,
  })

export const createBorderStyles =
  (
    borderStyle: string | undefined,
    borderRadius: string | number | undefined,
    borderWeight: string | number | undefined,
    borderWidth: string | number | undefined
  ): styleFn =>
  () => ({
    borderStyle,
    borderRadius,
    borderWeight,
    borderWidth,
  })
export const createShapeStyles =
  ({ height, borderStyle, borderRadius, borderWeight, borderWidth }: ShapeInterface): styleFn =>
  () => ({
    ...createBaseShape(height)(),
    ...createBorderStyles(borderStyle, borderRadius, borderWeight, borderWidth)(),
  })
