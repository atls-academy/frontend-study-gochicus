import { color, flexbox, layout, position, size, space } from 'styled-system'

import styled                                            from '@emotion/styled'

export const Column = styled.div(layout, space, flexbox, position, color, size)

Column.defaultProps = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}
