import { styleFn }             from 'styled-system'

import { InputBaseShapeProps } from './shape.interface'

export const createBaseShape =
  ({ size }: InputBaseShapeProps): styleFn =>
  () => ({
    height: size,
  })
