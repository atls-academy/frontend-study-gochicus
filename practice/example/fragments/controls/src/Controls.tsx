import React           from 'react'

import { ColorPicker } from '@ex-ui/color-picker'
import { Input }       from '@ex-ui/input'
import { Column }      from '@ex-ui/layout'
import { useInputData } from '@store/input-data'

export const Controls = () => {
  const [, setData] = useInputData()
  return (
    <Column>
      <Input
        onChange={() => {
          setData((event) => event.target.value)
        }}
      />
      <ColorPicker colors={['red', 'green', 'blue']} />
    </Column>
  )
}
