import styled                                                        from '@emotion/styled'

import { ButtonProps }                                               from './Button.interface'
import { baseStyles, colorStyles, justifyContentStyles, sizeStyles } from './Button.style'

export const Button = styled.div<ButtonProps>(
  baseStyles,
  sizeStyles,
  colorStyles,
  justifyContentStyles,
)
