import styled                                      from '@emotion/styled'
import { border, color, flexbox, layout, padding } from 'styled-system'

import { ButtonInterface }                         from '../interfaces/ButtonInterface'

export const Button = styled('button')<ButtonInterface>(border, flexbox, layout, padding, color)
