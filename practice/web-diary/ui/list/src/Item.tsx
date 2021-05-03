import React, { useState }  from 'react'

import { Button }           from '@ui/button'
import { HeartIcon }        from '@ui/icons'
import { StarIcon }         from '@ui/icons'
import { TrashIcon }        from '@ui/icons'
import { Box, Layout, Row } from '@ui/layout'
import { Text }             from '@ui/text'
import { usePostData }      from '@store/post-data'

export const Item = ({ deleteItem, importantItem, likeItem, postObject, theme }) => {
  const [postData, setPostData] = usePostData()
  const [important, setImportant] = useState(false)
  const [like, setLike] = useState(false)
  return (
    <>
      <Box minWidth={theme.minWidth.normal}>
        <Row justifyContent='space-around'>
          <Box minWidth={theme.minWidth.small}>
            <Text>{postObject.post}</Text>
          </Box>
          <Box justifyContent='space-around' alignItems='center' minWidth={theme.minWidth.small}>
            <Button
              backgroundColor={
                postObject.important === true ? theme.color.black : theme.color.white
              }
              onClick={() => {
                setPostData(importantItem(postData, postObject.id, !important))
                setImportant(!important)
              }}
            >
              <StarIcon />
            </Button>
            <Layout flexBasis={theme.indent.big} />
            <Button color='yellow' onClick={() => setPostData(deleteItem(postData, postObject.id))}>
              <TrashIcon />
            </Button>
            <Layout flexBasis={theme.indent.big} />
            <Button
              backgroundColor={postObject.like === true ? theme.color.yellow : theme.color.white}
              onClick={() => {
                setPostData(likeItem(postData, postObject.id, !like))
                setLike(!like)
              }}
            >
              <HeartIcon />
            </Button>
          </Box>
        </Row>
      </Box>
      <Layout flexBasis={theme.indent.small} />
    </>
  )
}
