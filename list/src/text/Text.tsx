import { color, space, typography } from 'styled-system'

import styled                       from '@emotion/styled'

export const Text = styled.span<any>(color, typography, space)

Text.defaultProps = {
  fontSize: 'small',
  textAlign: 'center',
}
