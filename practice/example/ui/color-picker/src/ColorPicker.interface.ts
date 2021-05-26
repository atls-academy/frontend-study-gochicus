import { ButtonHTMLAttributes } from 'react'

export interface ColorPickerInterface extends ButtonHTMLAttributes<any> {
  colors?: string[]
  currentValue?: string
  updateState?: any
}
