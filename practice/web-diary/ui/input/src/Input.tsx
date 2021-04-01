import React                            from 'react'
import styled                           from '@emotion/styled'
import { ReactJSXElement }              from '@emotion/react/types/jsx-namespace'
import { border, borderRadius, system, color } from 'styled-system'

import { InputCSS }                     from './Types'



const Input = styled('input')(({display}) => ({
   display
}))

