import styled                               from '@emotion/styled'
import { color, layout, space, typography } from 'styled-system'

export const Text = styled('span')(color, typography, space, layout)

Text.defaultProps = {
  fontFamily: 'primary',
  fontSize: '16px',
  textAlign: 'center',
  padding: '0 15px',
}
