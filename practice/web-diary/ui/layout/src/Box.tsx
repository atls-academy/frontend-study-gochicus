import styled from '@emotion/styled'
import {
  border,
  boxShadow,
  color,
  display,
  flexbox,
  layout,
  position,
  size,
  space,
  system,
} from 'styled-system'

interface Row {
  system?: {
    boxSizing: boolean
    overflowX: boolean
    overflowY: boolean
  }
  layout?: string
  space?: string
  color?: string
  flexbox?: string
  boxShadow?: string
  boxSizing?: string
  position?: string
  border?: string
  display?: string
  justifyContent?: string
  alignItems?: string
  minWidth?: string
  flexBasis?: string
}

export const Box = styled.div<Row>(
  system({
    boxSizing: true,
    overflowX: true,
    overflowY: true,
  }),
  layout,
  space,
  color,
  flexbox,
  boxShadow,
  position,
  border,
  display,
  size,
)

Box.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
