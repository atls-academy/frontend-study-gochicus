import { color, flexbox, layout, position, size, space } from 'styled-system'

import styled                                            from '@emotion/styled'

export const Layout = styled.div(layout, space, flexbox, position, color, size)

Layout.defaultProps = {
  display: 'flex',
}
