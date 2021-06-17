import styled                                            from '@emotion/styled'
import { color, flexbox, layout, position, size, space } from 'styled-system'

export const Column = styled.div(layout, space, flexbox, position, color, size)

Column.defaultProps = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}
