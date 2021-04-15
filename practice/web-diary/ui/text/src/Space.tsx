import React    from 'react'

import { Text } from './Text'

export const Space = ({ count = 1 }) => {
  let space = ''
  let rundownCounter = count
  while (rundownCounter >= 1) {
    space += space
    rundownCounter -= 1
  }
  return <Text>{space} </Text>
}
