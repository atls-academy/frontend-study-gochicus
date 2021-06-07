import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<any> {
  backgroundColor?: string
  borderColor?: string
  height?: 'small' | 'normal'
  size?: 'small' | 'normal'
  width?: string
}
