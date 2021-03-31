import React      from 'react'

import { Button } from '@ui/button'

export const CommonButton = ({ children, color }) => {
  return <Button color={color}>{children}</Button>
}
