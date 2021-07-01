import { background, color, layout, space } from 'styled-system'

import styled                               from '@emotion/styled'

export const Background = styled('div')(
  ({ theme, gradient }: any) => ({
    background: gradient ? theme.backgrounds[gradient] : 'none',
  }),
  color,
  layout,
  space,
  background,
)

Background.defaultProps = {
  overflowY: 'auto',
  height: '100%',
  width: '100%',
}
