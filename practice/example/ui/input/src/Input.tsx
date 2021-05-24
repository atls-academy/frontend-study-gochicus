import React           from 'react'

import { ClearButton } from './addons'
import { InputProps }  from './Input.interface'
import { StyledInput } from './parts'
import { Wrapper }     from './parts'

export const Input = ({ clear, onClear, ...props }: InputProps) => (
  <Wrapper>
    <StyledInput {...props} />
    {clear && <ClearButton onClick={onClear} />}
  </Wrapper>
)
