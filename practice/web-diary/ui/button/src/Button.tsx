import styled                                from '@emotion/styled'
import { border, color, layout, typography } from 'styled-system'

export const Button = styled('button')(border, color, layout, typography)

Button.defaultProps = {
  border: '1px solid #6c757d',
  borderColor: '#6c757d',
  textAlign: 'center',
  padding: '6px 12px',
  cursor: 'pointer',
  fontSize: 'small',
}
