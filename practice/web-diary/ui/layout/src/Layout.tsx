import styled                                                    from '@emotion/styled'
import { color, flexbox, layout, position, size, space, system } from 'styled-system'

interface RowType {
  width: string
  flexDirection: string
  display: string
}
interface LayoutType {
  display?: string
  margin?: string
  maxWidth?: string
  flexDirection?: string
  alignItems?: string
  justifyContent?: string
}
const boxSizing = system({
  boxSizing: true,
})

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
