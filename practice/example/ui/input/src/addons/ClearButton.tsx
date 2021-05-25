import React                from 'react'
import styled               from '@emotion/styled'

import { Text }             from '@ex-ui/text'

import { ClearButtonProps } from './ClearButton.interface'
import { createBaseStyles } from './ClearButton.styles'

// TODO rewrite with @ex-ui button
const StyledButton = styled.button(createBaseStyles())

export const ClearButton = ({ ...props }: ClearButtonProps) => (
  <StyledButton {...props}>
    <Text>Clear</Text>
  </StyledButton>
)
