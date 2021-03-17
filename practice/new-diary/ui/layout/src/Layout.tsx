import styled from '@emotion/styled'
import { color, flexbox, layout, position, space, system } from 'styled-system'

interface Column {
  width: string
  flexDirection: string
  display: string
}

interface Row {
  width: string
  flexDirection: string
  display: string
}
interface Layout {
  display?: string
}
const boxSizing = system({
  boxSizing: true,
})

export const Column = styled.div<Column>(layout, space, flexbox, position, boxSizing)

Column.defaultProps = {
  width: '100%',
  flexDirection: 'column',
  display: 'flex',
}

export const Row = styled.div<Row>(layout, space, flexbox, position, boxSizing)

Row.defaultProps = {
  width: '100%',
  flexDirection: 'row',
  display: 'flex',
}

export const Layout = styled.div<Layout>(layout, space, flexbox, position, color, boxSizing)

Layout.defaultProps = {
  display: 'flex',
}
