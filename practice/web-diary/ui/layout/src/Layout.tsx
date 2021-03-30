import styled                                            from '@emotion/styled'
import { color, flexbox, layout, position, size, space } from 'styled-system'

import { LayoutType, RowType, boxSizing }                from '../interfaces/LayoutInterface'

export const Row = styled.div<RowType>(layout, space, flexbox, position, boxSizing)

Row.defaultProps = {
  width: '100%',
  flexDirection: 'row',
  display: 'flex',
}

export const Layout = styled.div<LayoutType>(
  layout,
  space,
  flexbox,
  position,
  color,
  boxSizing,
  size,
)

Layout.defaultProps = {
  display: 'flex',
}
