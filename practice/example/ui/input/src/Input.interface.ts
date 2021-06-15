import { InputHTMLAttributes, MouseEventHandler } from 'react'

export interface InputProps extends Omit<InputHTMLAttributes<any>, 'size'> {
  clear?: boolean
  size?: 'normal' | 'small' | 'giant'
  onClear?: MouseEventHandler<any>
}
