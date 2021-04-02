import styled                                            from '@emotion/styled'
import { color, flexbox, layout, position, size, space } from 'styled-system'

import { LayoutType, RowType }                           from './types'

export const Row = styled.div<RowType>(layout, space, flexbox, position)

Row.defaultProps = {
  width: '100%',
  flexDirection: 'row',
  display: 'flex',
}

export const Layout = styled.div<LayoutType>(layout, space, flexbox, position, color, size)

Layout.defaultProps = {
  display: 'flex',
}
