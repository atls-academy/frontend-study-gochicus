import React                from 'react'

import styled               from '@emotion/styled'
import { Button }           from '@ex-ui/button'
import { Text }             from '@ex-ui/text'

import { ClearButtonProps } from './ClearButton.interface'
import { createBaseStyles } from './base'

const StyledButton = styled(Button)(createBaseStyles)

export const ClearButton = ({ ...props }: ClearButtonProps) => (
  <StyledButton {...props}>
    <Text color='black'>Clear</Text>
  </StyledButton>
)
