import React           from 'react'

import { Button }      from '@ex-ui/button'
import { useColorData } from '@store/color-data'

export const ColorPicker = ({ colors }) => {
  const [, setValue] = useColorData()
  return (
    <>
      {colors.map((item) => (
        <Button
          color={item}
          onClick={() => {
            setValue(item)
          }}
        >
          {item}
        </Button>
      ))}
    </>
  )
}
