import styled                                                from '@emotion/styled'
import { border, color, display, layout, space, typography } from 'styled-system'

export const Input = styled('input')(
  () => ({
    outline: 'none',
  }),
  border,
  layout,
  color,
  typography,
  space,
  display,
)

Input.defaultProps = {
  display: 'block',
  fontSize: '14px',
  minWidth: '200px',
  padding: '6px 10px',
  background: '#fff',
  border: '1px solid #ced4da',
  borderRadius: 4,
}
