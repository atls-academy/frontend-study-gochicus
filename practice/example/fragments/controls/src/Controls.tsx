import React                   from 'react'

import { ColorPicker }         from '@ex-ui/color-picker'
import { Input }               from '@ex-ui/input'
import { Column, Layout, Row } from '@ex-ui/layout'
import { useColorData }        from '@store/color-data'
import { useInputData }        from '@store/input-data'

export const Controls = () => {
  const [data, setData] = useInputData()
  const [, setValue] = useColorData()
  return (
    <Row>
      <Layout flexBasis='100%' />
      <Column justifyContent='center' width='100%'>
        <Input
          clear
          value={data}
          onChange={event => {
            setData(event.target.value)
          }}
          onClear={() => {
            setData('')
            setValue('silver')
          }}
        />
        <ColorPicker updateState={setValue} colors={['red', 'green', 'blue']} />
      </Column>
      <Layout flexBasis='100%' />
    </Row>
  )
}
