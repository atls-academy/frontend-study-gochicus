import styled                                            from '@emotion/styled'
import { color, flexbox, layout, position, size, space } from 'styled-system'

export const Row = styled.div(layout, space, flexbox, position, color, size)

Row.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  boxSizing: 'border-box',
}
