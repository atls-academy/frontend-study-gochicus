import styled                                from '@emotion/styled'
import { border, color, layout, typography } from 'styled-system'

export const Button = styled('button')(border, color, layout, typography)

Button.defaultProps = {
  border: '1px solid #6c757d',
  borderColor: '#6c757d',
  height: '40px',
  minWidth: '50px',
  fontSize: '17px',
  fontWeight: '400',
  textAlign: 'center',
  padding: '6px 12px',
  borderRadius: '0px',
  cursor: 'pointer',
}
