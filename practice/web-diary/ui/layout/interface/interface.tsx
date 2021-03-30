import { system } from 'styled-system'

export interface Row {
  system?: {
    boxSizing: boolean
    overflowX: boolean
    overflowY: boolean
  }
  layout?: string
  space?: string
  color?: string
  boxShadow?: string
  boxSizing?: string
  position?: string
  border?: string
  display?: string
  flexBasis?: string
  justifyContent?: string
  alignItems?: string
  minWidth?: string
}

export interface RowType {
  width: string
  flexDirection: string
  display: string
}
export interface LayoutType {
  display?: string
  margin?: string
  flexDirection?: string
  alignItems?: string
  maxWidth?: string
  justifyContent?: string
}
export const boxSizing = system({
  boxSizing: true,
})
