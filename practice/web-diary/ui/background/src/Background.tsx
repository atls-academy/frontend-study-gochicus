import styled                   from '@emotion/styled'
import { color, layout, space } from 'styled-system'

export const Background = styled('div')(color, layout, space)

Background.defaultProps = {
  padding: '0',
  backgroundColor: '#eaf5fc',
}
