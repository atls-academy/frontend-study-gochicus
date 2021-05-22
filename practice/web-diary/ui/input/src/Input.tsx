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
  display: 'flex',
  fontSize: '14px',
  minWidth: '200px',
  padding: '6px 10px',
  background: 'white',
  border: '1px solid',
  borderColor: 'grey',
  borderRadius: 4,
}
