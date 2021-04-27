import React, { useState }  from 'react'

import { Button }           from '@ui/button'
import { HeartIcon }        from '@ui/icons'
import { StarIcon }         from '@ui/icons'
import { TrashIcon }        from '@ui/icons'
import { Box, Layout, Row } from '@ui/layout'
import { Text }             from '@ui/text'
import { usePostData }      from '@store/post-data'

import { importantPost }    from '../actions'
import { importantColor }   from '../actions'
import { deleteItem }       from '../actions'

export const Item = ({ content, id }) => {
  const [postData, setPostData] = usePostData()
  const [color, setColor] = useState('red')
  return (
    <Row justifyContent='space-around'>
      <Box minWidth='100px'>
        <Text>{content}</Text>
      </Box>
      <Box justifyContent='space-around' alignItems='center' minWidth='100px'>
        <Button
          backgroundColor={color}
          onClick={() => {
            setPostData(importantPost(postData, postData.id, true))
            setColor(importantColor(postData))
          }}
        >
          <StarIcon />
        </Button>
        <Layout flexBasis='30px' />
        <Button color='yellow' onClick={() => setPostData(deleteItem(postData, id))}>
          <TrashIcon />
        </Button>
        <Layout flexBasis='30px' />
        <Button
          onClick={() => {
            setPostData(importantPost(postData, postData.id, true))
          }}
        >
          <HeartIcon />
        </Button>
      </Box>
    </Row>
  )
}
