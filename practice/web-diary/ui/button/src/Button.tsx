import styled                                from '@emotion/styled'
import { border, color, layout, typography } from 'styled-system'

export const Button = styled<any>('button')(border, color, layout, typography)

Button.defaultProps = {
  border: '1px solid #6c757d',
  borderColor: '#6c757d',
  height: '38px',
  fontSize: '17px',
  fontWeight: '400',
  textAlign: 'center',
  padding: '6px 12px',
  borderRadius: '4px',
  cursor: 'pointer',
  margin: '0 20px 0 0',
  fontFamily: ' -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen"',
}
