import styled                               from '@emotion/styled'
import { background, color, layout, space } from 'styled-system'

export const Background = styled('div')(
  color,
  layout,
  space,
  background,
  ({ theme, backgroundGradient }: any) => ({ background: theme.backgrounds[backgroundGradient] }),
)

Background.defaultProps = {
  padding: '0',
  backgroundColor: 'backgroundGradient',
}
