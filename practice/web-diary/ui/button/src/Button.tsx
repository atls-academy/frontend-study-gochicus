import styled                                from '@emotion/styled'
import { border, color, layout, typography } from 'styled-system'
import { system }                            from 'styled-system'

export const Button = styled('button')(
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
  borderColor: 'backgroundWhite',
  textAlign: 'center',
  padding: '6px 12px',
  fontSize: 'small',
  cursor: 'pointer',
}
