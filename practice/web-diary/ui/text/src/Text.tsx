import styled                       from '@emotion/styled'
import { color, space, typography } from 'styled-system'
import { styleFn }                  from 'styled-system'

export const createTextStyles: styleFn = () => () => ({
  fontFamily: 'primary',
  fontSize: '16px',
  textAlign: 'center',
  padding: '10px 15px',
})

export const Text = styled('span')(createTextStyles, color, typography, space)
