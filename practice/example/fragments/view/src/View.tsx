import React          from 'react'

import { Box, Column }  from '@ex-ui/layout'
import { Text }         from '@ex-ui/text'
import { useColorData } from '@store/color-data'
import { useInputData } from '@store/input-data'

export const View = () => {
  const [value] = useColorData()
  const [data] = useInputData()
  return (
    <Box backgroundColor={value} justifyContent={'center'}>
      <Column>
        <Box>
          <Text> Value is {data}</Text>
        </Box>
        <Box>
          <Text> color is {value}</Text>
        </Box>
      </Column>
    </Box>
  )
}
