import { styleFn } from 'styled-system'

export const createBaseStyles = (): styleFn => () => ({
  outline: 'none',
  padding: 0,
  margin: 0,
  border: '1px solid',
  width: '100%',
  '&::placeholder ': {
    fontFamily: 'Gordita, sans-serif',
    fontSize: '12px',
    padding: '6px 6px',
  },
})
