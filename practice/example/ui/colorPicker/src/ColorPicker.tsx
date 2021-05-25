import React      from 'react'

import { Button } from '@ex-ui/button'

export const ColorPicker = ({ colors }) => (
  <>
    {colors.map(item => (
      <Button color={item}>{item}</Button>
    ))}
  </>
)
