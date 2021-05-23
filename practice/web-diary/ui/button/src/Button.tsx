import styled                          from '@emotion/styled'
import { border, color, flex, layout } from 'styled-system'
import { styleFn }                     from 'styled-system'

export const createBaseStyles: styleFn = () => () => ({
  cursor: 'pointer',
  padding: 0,
  outline: 'none',
  border: '1px solid',
  borderColor: 'lightGrey',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '50px',
  minHeight: '40px',
})

export const Button = styled('div')(createBaseStyles, color, layout, border, flex)
