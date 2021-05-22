import styled                                from '@emotion/styled'
import { border, color, layout, typography } from 'styled-system'
import { system }                            from 'styled-system'

export const Button = styled('button')(
  () => ({
    padding: 0,
    outline: 'none',
    color: 'inherit',
    background: 'none',
  }),
  border,
  color,
  layout,
  typography,
  system({
    cursor: true,
  }),
)

Button.defaultProps = {
  border: '1px solid',
  borderColor: 'lightGrey',
  textAlign: 'center',
  padding: '6px 12px',
  fontSize: 'small',
  cursor: 'pointer',
}
