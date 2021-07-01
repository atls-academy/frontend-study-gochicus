import { color, flexbox, layout, position } from 'styled-system'

import styled                               from '@emotion/styled'

export const Box = styled.div(layout, flexbox, position, color)

Box.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
