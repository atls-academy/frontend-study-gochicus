import styled                            from '@emotion/styled'
import { color, flexbox, layout, space } from 'styled-system'

export const Background = styled('div')(color, layout, space, flexbox)

Background.defaultProps = {
  backgroundColor: 'silver',
  display: 'flex',
  width: '100%',
}
