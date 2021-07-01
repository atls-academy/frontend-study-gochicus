import { color, flexbox, layout, space } from 'styled-system'

import styled                            from '@emotion/styled'

export const Background = styled('div')(color, layout, space, flexbox)

Background.defaultProps = {
  backgroundColor: 'silver',
  display: 'flex',
  width: '100%',
}
