import styled                   from '@emotion/styled'
import { color, layout, space } from 'styled-system'

export const Background = styled<any>('div')(color, layout, space)

Background.defaultProps = {
  margin: '50px 0 0 0',
  padding: '0',
  backgroundColor: '#eaf5fc',
}
