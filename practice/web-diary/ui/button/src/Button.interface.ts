import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<any> {
  backgroundColor?: string
  borderColor?: string
  maxHeight?: string
  height?: 'small' | 'normal'
  width?: 'small' | 'normal'
  size?: 'small' | 'normal'
  display?: string
  overflow?: string
  justifyContent?: string
  hyphens?: string
}
