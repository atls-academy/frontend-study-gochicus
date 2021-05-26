import React            from 'react'

import { Background }   from '@ex-ui/background'
import { Box, Column }  from '@ex-ui/layout'
import { Text }         from '@ex-ui/text'
import { useColorData } from '@store/color-data'
import { useInputData } from '@store/input-data'

export const View = () => {
  const [value] = useColorData()
  const [data] = useInputData()
  return (
    <Background backgroundColor={value} justifyContent='center' width='100%'>
      <Column justifyContent='center'>
        <Box>
          <Text color='black'> Value is {data}</Text>
        </Box>
        <Box>
          <Text color='black'> color is {value}</Text>
        </Box>
      </Column>
    </Background>
  )
}
