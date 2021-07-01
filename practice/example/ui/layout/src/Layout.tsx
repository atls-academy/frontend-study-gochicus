import { flexbox, layout, position } from 'styled-system'

import styled                        from '@emotion/styled'

export const Layout = styled.div(layout, flexbox, position)

Layout.defaultProps = {
  display: 'flex',
}
