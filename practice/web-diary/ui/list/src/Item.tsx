import React, { useState }  from 'react'

import { Button }           from '@ui/button'
import { HeartIcon }        from '@ui/icons'
import { StarIcon }         from '@ui/icons'
import { TrashIcon }        from '@ui/icons'
import { Box, Layout, Row } from '@ui/layout'
import { Text }             from '@ui/text'
import { usePostData }      from '@store/post-data'

export const Item = ({ content, id, deleteItem, importantItem, likeItem }) => {
  const [postData, setPostData] = usePostData()
  const [important, setImportant] = useState(false)
  const [like, setLike] = useState(false)
  return (
    <>
      <Box minWidth='300px'>
        <Row justifyContent='space-around'>
          <Box minWidth='100px'>
            <Text>{content}</Text>
          </Box>
          <Box justifyContent='space-around' alignItems='center' minWidth='100px'>
            <Button
              backgroundColor={important ? 'black' : 'white'}
              onClick={() => {
                setPostData(importantItem(postData, id, !important))
                setImportant(!important)
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
              backgroundColor={like ? 'yellow' : 'white'}
              onClick={() => {
                setPostData(likeItem(postData, id, !like))
                setLike(!like)
              }}
            >
              <HeartIcon />
            </Button>
          </Box>
        </Row>
      </Box>
      <Layout flexBasis='10px' />
    </>
  )
}
