import { styleFn }             from 'styled-system'

import { InputBaseShapeProps } from './shape.interface'

export const createBaseShape = ({ size }: InputBaseShapeProps): styleFn => () => ({
  width: size,
})
