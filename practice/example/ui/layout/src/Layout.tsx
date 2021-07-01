import styled                        from '@emotion/styled'
import { flexbox, layout, position } from 'styled-system'

export const Layout = styled.div(layout, flexbox, position)

Layout.defaultProps = {
  display: 'flex',
}
