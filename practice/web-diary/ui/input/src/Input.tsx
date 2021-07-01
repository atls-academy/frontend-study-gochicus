import React                                         from 'react'

import styled                                        from '@emotion/styled'

import { InputProps }                                from './Input.interface'
import { baseStyles, greyColorStyles, heightStyles } from './Input.styles'

export const StyledInput = styled.input<any>(baseStyles, heightStyles, greyColorStyles, () => ({
  '&::placeholder': {
    padding: '6px 6px',
  },
  '&:first-of-type': {
    padding: '6px',
  },
}))

export const Input = (props: InputProps) => <StyledInput {...props} />
