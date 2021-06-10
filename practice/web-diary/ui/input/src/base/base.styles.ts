import { styleFn } from 'styled-system'

export const createBaseStyles = (): styleFn => () => ({
  outline: 'none',
  display: 'flex',
  border: '1px solid transparent',
  boxSizing: 'border-box',
  width: '100%',
})
