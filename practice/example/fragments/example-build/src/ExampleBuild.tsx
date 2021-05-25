import React, { useState }   from 'react'

import { Row }               from '@ex-ui/layout'
import { Controls }          from '@fragments/controls'
import { View }              from '@fragments/view'
import { ColorDataProvider } from '@store/color-data'
import { InputDataProvider } from '@store/input-data'

export const ExampleBuild = () => {
  const [value, setValue] = useState('')
  const [data, setData] = useState('')
  return (
    <InputDataProvider value={[data, setData]}>
      <ColorDataProvider value={[value, setValue]}>
        <Row justifyContent={'center'}>
          <Controls />
          <View />
        </Row>
      </ColorDataProvider>
    </InputDataProvider>
  )
}
