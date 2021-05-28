import { styleFn } from 'styled-system'

export const createBaseStyles = (): styleFn => () => ({
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
})
