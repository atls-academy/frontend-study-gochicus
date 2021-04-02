import styled                                            from '@emotion/styled'
import { color, flexbox, layout, position, size, space } from 'styled-system'

import { LayoutType }                                    from './types'

export const Layout = styled.div<LayoutType>(layout, space, flexbox, position, color, size)

Layout.defaultProps = {
  display: 'flex',
}
