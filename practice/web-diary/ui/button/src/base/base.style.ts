import { styleFn } from 'styled-system'

export const createBaseStyles = (): styleFn => () => ({
  cursor: 'pointer',
  display: 'flex',
  border: '1px solid',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  width: '100%',
})
