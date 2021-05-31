import { styleFn }             from 'styled-system'

import { InputBaseShapeProps } from './shape.interface'

export const createBaseShape = ({ size, font }: InputBaseShapeProps): styleFn => () => ({
  height: size,
  fontSize: font,
})
