import React                                       from 'react'
import styled                                      from '@emotion/styled'
import { border, flexbox, layout, padding,color } from 'styled-system'

import { ButtonInterface }                         from '../interfaces/ButtonInterface'

const Button = styled('button')<ButtonInterface>(border, flexbox, layout, padding, color)

export const CommonButton = ({ children }) => {
  return <Button color={color}>{children}</Button>
}
