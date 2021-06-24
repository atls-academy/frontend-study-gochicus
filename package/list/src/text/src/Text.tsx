import styled                       from '@emotion/styled'
import { color, space, typography } from 'styled-system'

export const Text = styled.span<any>(color, typography, space)

Text.defaultProps = {
  fontSize: 'small',
  textAlign: 'center',
}
