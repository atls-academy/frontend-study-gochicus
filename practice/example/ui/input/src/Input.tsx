import React           from 'react'

import { Layout }      from '@ex-ui/layout'

import { ClearButton } from './addons'
import { InputProps }  from './Input.interface'
import { StyledInput } from './parts'
import { Wrapper }     from './parts'

export const Input = ({ clear, value, onClear, ...props }: InputProps) => {
  return (
    <Wrapper>
      <StyledInput {...props} value={value} />
      <Layout flexBasis='5px' />
      {clear && value !== '' && <ClearButton onClick={onClear} />}
    </Wrapper>
  )
}
