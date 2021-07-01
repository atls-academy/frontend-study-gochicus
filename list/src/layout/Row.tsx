import { color, flexbox, layout, position, size, space } from 'styled-system'

import styled                                            from '@emotion/styled'

export const Row = styled.div(layout, space, flexbox, position, color, size)

Row.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  boxSizing: 'border-box',
}
