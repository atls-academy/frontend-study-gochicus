import { color, space, typography } from 'styled-system'

import styled                       from '@emotion/styled'

export const Text = styled.span(typography, color, space)

Text.defaultProps = {
  fontFamily: 'primary',
  color: 'white',
}
