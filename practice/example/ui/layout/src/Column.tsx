import styled                        from '@emotion/styled'
import { flexbox, layout, position } from 'styled-system'

import { Row }                       from './Row'

export const Column = styled.div(layout, flexbox, position)

Row.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
}
