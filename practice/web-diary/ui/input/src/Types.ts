import React, { CSSProperties } from 'react'

export interface InputCSS extends React.HTMLAttributes<HTMLInputElement> {
  style: CSSProperties
  bg:string
}
