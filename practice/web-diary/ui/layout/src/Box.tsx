import styled from '@emotion/styled'
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

export const Box = styled.div<any>(
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
