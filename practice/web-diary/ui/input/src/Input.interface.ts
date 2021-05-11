import { InputHTMLAttributes } from 'react'

export interface InputProps extends Omit<InputHTMLAttributes<any>, 'size'> {
  size?: 'big' | 'small'
}
