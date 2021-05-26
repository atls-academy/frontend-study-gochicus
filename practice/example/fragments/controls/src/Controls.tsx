import React                   from 'react'

import { ColorPicker }         from '@ex-ui/color-picker'
import { Input }               from '@ex-ui/input'
import { Column, Layout, Row } from '@ex-ui/layout'
import { useInputData }        from '@store/input-data'

export const Controls = () => {
  const [data, setData] = useInputData()
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
          }}
        />
        <ColorPicker colors={['red', 'green', 'blue']} />
      </Column>
      <Layout flexBasis='100%' />
    </Row>
  )
}
