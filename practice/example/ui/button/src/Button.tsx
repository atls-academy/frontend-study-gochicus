import React           from 'react'

import styled          from '@emotion/styled'

import { ButtonProps } from './Button.interface'
import {
  baseStyles,
  borderWidthStyles,
  colorStyles,
  roundedBorderStyles,
  sizeStyles,
} from './Button.styles'

const StyledButton = styled.div<any>(
  baseStyles,
  sizeStyles,
  roundedBorderStyles,
  colorStyles,
  borderWidthStyles,
)
export const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />
}
