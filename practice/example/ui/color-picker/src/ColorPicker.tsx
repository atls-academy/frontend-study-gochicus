import React                   from 'react'

import { Button }              from '@ex-ui/button'
import { Column, Layout, Row } from '@ex-ui/layout'
import { Text }                from '@ex-ui/text'
import { useColorData }        from '@store/color-data'

export const ColorPicker = ({ colors }) => {
  const [, setValue] = useColorData()
  return (
    <Row>
      <Layout flexBasis='100%' />
      <Column width='100%'>
        <Layout flexBasis='20px' />
        {colors.map(item => (
          <>
            <Button
              size='normal'
              color={item}
              onClick={() => {
                setValue(item)
              }}
            >
              <Text color='white'>{item}</Text>
            </Button>
            <Layout flexBasis='10px' />
          </>
        ))}
      </Column>
      <Layout flexBasis='100%' />
    </Row>
  )
}
