import React                from 'react'

import { Button }           from '@ui/button'
import { Box, Layout, Row } from '@ui/layout'
import { Text }             from '@ui/text'

export const Item = ({ content }) => {
  return (
    <Row justifyContent='space-around'>
      <Box minWidth='100px'>
        <Text>{content}</Text>
      </Box>
      <Box justifyContent='space-around' alignItems='center' minWidth='100px'>
        <Button color='red'>
          <i className='fa fa-star' />
        </Button>
        <Layout flexBasis='30px' />
        <Button color='yellow'>
          <i className='fa fa-trash-o' />
        </Button>
        <Layout flexBasis='30px' />
        <Button>
          <i className='fa fa-heart' />
        </Button>
      </Box>
    </Row>
  )
}
