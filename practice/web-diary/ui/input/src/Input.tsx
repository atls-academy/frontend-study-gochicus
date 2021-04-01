import React                            from 'react'
import styled                           from '@emotion/styled'
import { ReactJSXElement }              from '@emotion/react/types/jsx-namespace'
import { border, borderRadius, system } from 'styled-system'

import { InputCSS }                     from './Types'

const bg = system({
  bg: {
    property: 'backgroundColor',
  },
  border: {
    property: 'border',
  },
  borderRadius: {
    property: 'borderRadius',
  },
})

const StyledInput = styled('input')(({ height, color }) => ({
  display: 'block',
  width: '100%',
  backgroundClip: 'padding-box',
  color,
  height,
  bg,
  border,
  borderRadius,
}))

export const Input = ({ placeholder, style }: InputCSS): ReactJSXElement => {
  return <StyledInput type='text' placeholder={placeholder} style={style} />
}
