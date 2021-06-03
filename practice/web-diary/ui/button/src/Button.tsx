import styled                                                        from '@emotion/styled'
import { system }                                                    from 'styled-system'

import { ButtonProps }                                               from './Button.interface'
import { baseStyles, colorStyles, justifyContentStyles, sizeStyles } from './Button.style'

export const Button = styled.div<ButtonProps>(
  system({ overflow: true, hyphens: true }),
  baseStyles,
  sizeStyles,
  colorStyles,
  justifyContentStyles,
)
