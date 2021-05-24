import { InputHTMLAttributes, MouseEventHandler } from 'react'

export interface InputProps extends InputHTMLAttributes<any> {
  clear?: boolean
  onClear?: MouseEventHandler<any>
}
