import React                                        from 'react'
import styled                                       from '@emotion/styled'

import { InputProps }                               from './Input.interface'
import { baseStyles, greyColorStyles, widthStyles } from './Input.styles'

export const StyledInput = styled.input<any>(baseStyles, widthStyles, greyColorStyles, () => ({
  '&::placeholder': {
    padding: '6px 6px',
  },
  '&:first-of-type': {
    padding: '6px',
  },
}))

export const Input = (props: InputProps) => <StyledInput {...props} />
