import { styleFn } from 'styled-system'

export const createBaseStyles = (): styleFn => () => ({
  outline: 'none',
  margin: 0,
  border: '1px solid',
  width: '100%',

  '&::placeholder': {
    fontFamily: 'Gordita, sans-serif',
    fontSize: '14px',
    padding: '6px 6px',
  },
  '&:first-of-type': {
    padding: '6px',
  },
})
