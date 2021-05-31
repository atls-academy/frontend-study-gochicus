import styled                     from '@emotion/styled'

import { ButtonProps }            from './Button.interface'
import { baseStyles, sizeStyles } from './Button.style'
import { colorStyles }            from './Button.style'

export const Button = styled.div<ButtonProps>(baseStyles, sizeStyles, colorStyles)
