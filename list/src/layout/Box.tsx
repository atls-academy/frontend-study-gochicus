import {
  border,
  color,
  display,
  flexbox,
  layout,
  position,
  shadow,
  size,
  space,
  system,
} from 'styled-system'

import styled from '@emotion/styled'

export const Box = styled.div(
  system({ overflow: true, hyphens: true }),
  layout,
  space,
  color,
  flexbox,
  shadow,
  position,
  border,
  display,
  size,
)

Box.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
