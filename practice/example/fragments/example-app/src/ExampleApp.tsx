import React        from 'react'

import { Row }      from '@ex-ui/layout'
import { Controls } from '@fragments/controls'
import { View }     from '@fragments/view'

export const ExampleApp = () => {
  return (
    <Row justifyContent='space-between' height='100%'>
      <Controls />
      <View />
    </Row>
  )
}
