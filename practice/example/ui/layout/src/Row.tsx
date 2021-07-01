import { flexbox, layout, position } from 'styled-system'

import styled                        from '@emotion/styled'

export const Row = styled.div(layout, flexbox, position)

Row.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
}
