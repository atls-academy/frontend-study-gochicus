import styled  from '@emotion/styled'
import {
  border,
  boxShadow,
  color,
  display,
  flexbox,
  layout,
  position,
  size,
  space,
  system,
} from 'styled-system'

import { Row } from './Types'

export const Box = styled.div<Row>(
  system({
    boxSizing: true,
    overflowX: true,
    overflowY: true,
  }),
  layout,
  space,
  color,
  flexbox,
  boxShadow,
  position,
  border,
  display,
  size,
)

Box.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
