import styled                             from '@emotion/styled'
import { color, flexbox, layout, position } from 'styled-system'

export const Box = styled.div(layout, flexbox, position, color)

Box.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
