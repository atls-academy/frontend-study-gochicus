import styled                       from '@emotion/styled'
import { color, space, typography } from 'styled-system'

export const Text = styled('span')(color, typography, space)

Text.defaultProps = {
  fontFamily: 'primary',
  fontSize: '16px',
  textAlign: 'center',
  padding: '10px 15px',
  display: 'inline-block',
}
