import styled from '@emotion/styled'
import { color, flexbox, layout, position, size, space } from 'styled-system'

export const Layout = styled.div(layout, space, flexbox, position, color, size)

Layout.defaultProps = {
  display: 'flex',
}
