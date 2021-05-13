import styled     from '@emotion/styled'
import { system } from 'styled-system'
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
} from 'styled-system'

export const Box = styled.div(
  layout,
  space,
  color,
  flexbox,
  shadow,
  position,
  border,
  display,
  size,
  system({
    cursor: true,
  }),
)

Box.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
