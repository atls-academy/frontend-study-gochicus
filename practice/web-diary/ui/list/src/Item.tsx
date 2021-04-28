import React, { useState }  from 'react'

import { Button }           from '@ui/button'
import { HeartIcon }        from '@ui/icons'
import { StarIcon }         from '@ui/icons'
import { TrashIcon }        from '@ui/icons'
import { Box, Layout, Row } from '@ui/layout'
import { Text }             from '@ui/text'
import { useFavouredCount } from '@store/favoured-count'
import { usePostData }      from '@store/post-data'

export const Item = ({
  content,
  id,
  deleteItem,
  importantItem,
  likeItem,
  importantColor,
  likeColor,
  favouredCounter,
}) => {
  const [postData, setPostData] = usePostData()
  const [important, setImportant] = useState(false)
  const [like, setLike] = useState(false)
  const [importantButtonColor, setImportantButtonColor] = useState('white')
  const [likeButtonColor, setLikeButtonColor] = useState('white')
  const [favoured, setFavoured] = useFavouredCount()
  return (
    <>
      <Box minWidth='300px'>
        <Row justifyContent='space-around'>
          <Box minWidth='100px'>
            <Text>{content}</Text>
          </Box>
          <Box justifyContent='space-around' alignItems='center' minWidth='100px'>
            <Button
              backgroundColor={importantButtonColor}
              onClick={() => {
                setImportant(!important)
                setPostData(importantItem(postData, id, important))
                setImportantButtonColor(importantColor(important, importantButtonColor))
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
              backgroundColor={likeButtonColor}
              onClick={() => {
                setLike(!like)
                setPostData(likeItem(postData, id, like))
                setLikeButtonColor(likeColor(like, likeButtonColor))
                setFavoured(favouredCounter(favoured, like))
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
