import styled                                  from '@emotion/styled'
import { layout }                              from 'styled-system'

import { ButtonProps }                         from './button.interface'
import { baseStyles, colorStyles, sizeStyles } from './button.styles'

export const Button = styled.div<ButtonProps>(baseStyles, sizeStyles, colorStyles, layout)
