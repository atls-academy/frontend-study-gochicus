import React           from 'react'

import { Button }      from '@ui/button'
import { Box, Layout } from '@ui/layout'
import { Text }        from '@ui/text'

export const ListItem: any = ({ content }: any) => {
  return (
    <Layout justifyContent='space-around'>
      <Box minWidth='100px'>
        <Text>{content} </Text>
      </Box>
      <Box justifyContent='space-around' alignItems='center' minWidth='100px'>
        <Button color='red'>
          <i className='fa fa-star' />
        </Button>
        <Box flexBasis='30px' />
        <Button color='yellow'>
          <i className='fa fa-trash-o' />
        </Button>
        <Box flexBasis='30px' />
        <Button>
          <i className='fa fa-heart' />
        </Button>
      </Box>
    </Layout>
  )
}
