import React                    from 'react'

import { Button }               from '@ex-ui/button'
import { Column, Layout, Row }  from '@ex-ui/layout'
import { Text }                 from '@ex-ui/text'

import { ColorPickerInterface } from './ColorPicker.interface'

export const ColorPicker = ({ colors, updateState }: ColorPickerInterface) => {
  return (
    <Row>
      <Layout flexBasis='100%' />
      <Column width='100%'>
        <Layout flexBasis='20px' />
        {colors.map((item, id) => (
          <>
            <Button
              size='normal'
              borderRadiusPosition={id === 0 ? 'top' : id === colors.length - 1 && 'bottom'}
              color={item}
              onClick={() => updateState(item)}
            >
              <Text color='white'>{item} </Text>
            </Button>
            <Layout flexBasis='10px' />
          </>
        ))}
      </Column>
      <Layout flexBasis='100%' />
    </Row>
  )
}
