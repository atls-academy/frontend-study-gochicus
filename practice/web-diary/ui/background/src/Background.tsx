import styled                               from '@emotion/styled'
import { background, color, layout, space } from 'styled-system'

export const Background = styled('div')(
  ({ theme, Gradient }: any) => ({
    background: Gradient ? theme.backgrounds[Gradient] : 'none',
  }),
  color,
  layout,
  space,
  background,
)

Background.defaultProps = {
  padding: '0',
}
