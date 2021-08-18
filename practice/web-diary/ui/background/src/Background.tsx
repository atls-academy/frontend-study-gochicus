import styled                               from '@emotion/styled'
import { background, color, layout, space } from 'styled-system'

export const Background = styled<any>('div')(
  ({ theme, gradient }: any) => ({
    background: gradient ? theme.backgrounds[gradient] : 'none',
  }),
  color,
  layout,
  space,
  background
)

Background.defaultProps = {
  overflowY: 'auto',
  height: '100%',
  width: '100%',
}
