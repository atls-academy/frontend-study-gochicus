import React                from 'react'

import { Button }           from '@ui/button'
import { HeartIcon }        from '@ui/icons'
import { StarIcon }         from '@ui/icons'
import { TrashIcon }        from '@ui/icons'
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
          <StarIcon />
        </Button>
        <Layout flexBasis='30px' />
        <Button color='yellow'>
          <TrashIcon />
        </Button>
        <Layout flexBasis='30px' />
        <Button>
          <HeartIcon />
        </Button>
      </Box>
    </Row>
  )
}
