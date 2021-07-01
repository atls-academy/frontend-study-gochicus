import { color, flexbox, layout, position } from 'styled-system'

import styled                               from '@emotion/styled'

export const Column = styled.div(layout, flexbox, position, color)

Column.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}
