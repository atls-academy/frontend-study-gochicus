import styled                               from '@emotion/styled'
import { background, color, layout, space } from 'styled-system'

export const Background = styled('div')(
  ({ theme, blueAndGreenGradient }: any) => ({
    background: blueAndGreenGradient ? theme.backgrounds[blueAndGreenGradient] : 'none',
  }),
  color,
  layout,
  space,
  background,
)

Background.defaultProps = {
  padding: '0',
}
