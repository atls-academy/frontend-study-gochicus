import styled                                                from '@emotion/styled'
import { border, color, display, layout, space, typography } from 'styled-system'

export const Input = styled<any>('input')(border, layout, color, typography, space, display)

Input.defaultProps = {
  display: 'block',
  fontSize: '14px',
  minWidth: '200px',
  margin: '0 20px 0 0',
  padding: '6px 10px',
  background: '#fff',
  border: '1px solid #ced4da',
  borderRadius: 4,
  fontFamily: ' -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen"',
}
