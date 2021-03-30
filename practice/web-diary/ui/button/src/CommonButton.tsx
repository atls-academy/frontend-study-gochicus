import React                                       from 'react'
import styled                                      from '@emotion/styled'
import { border, color, flexbox, layout, padding } from 'styled-system'

import { ButtonInterface }                         from '../interface/interface'

const Button = styled('button')<ButtonInterface>(border, flexbox, layout, padding, color)
export const CommonButton = ({ children }) => {
  return <Button>{children}</Button>
}
