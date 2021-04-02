export interface Row {
  system?: {
    boxSizing: boolean
    overflowX: boolean
    overflowY: boolean
  }
}

export interface RowType {
  width: string
  display: string
  flexDirection?: string
}
export interface LayoutType {
  display?: string
  margin?: string
  maxWidth?: string
  flexDirection?: string
  justifyContent?: string
  alignItems?: string
}
