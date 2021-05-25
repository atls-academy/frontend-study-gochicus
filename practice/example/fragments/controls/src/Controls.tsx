import React           from 'react'

import { ColorPicker } from '@ex-ui/color-picker'
import { Input }       from '@ex-ui/input'
import { Column }      from '@ex-ui/layout'

export const Controls = () => {
  return (
    <Column>
      <Input />
      <ColorPicker colors={['red', 'green']} />
    </Column>
  )
}
