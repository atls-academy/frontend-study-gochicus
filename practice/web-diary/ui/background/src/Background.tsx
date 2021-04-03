import styled                                       from '@emotion/styled'
import { border, color, layout, space, typography } from 'styled-system'

export const Background = styled<any>('div')(border, color, layout, space, typography)

Background.defaultProps = {
  margin: '50px 0 0 0',
  padding: '0',
  backgroundColor: '#eaf5fc',
  fontFamily: ' -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen"',
}
