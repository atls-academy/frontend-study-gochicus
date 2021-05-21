import React, { useState }  from 'react'

import { Button }           from '@ui/button'
import { HeartIcon }        from '@ui/icons'
import { StarIcon }         from '@ui/icons'
import { TrashIcon }        from '@ui/icons'
import { Box, Layout, Row } from '@ui/layout'
import { Text }             from '@ui/text'
import { usePostData }      from '@store/post-data'

export const Item = ({ deleteItem, importantItem, likeItem, postObject }) => {
  const [postData, setPostData] = usePostData()
  const [important, setImportant] = useState(false)
  const [like, setLike] = useState(false)
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Box backgroundColor='lightGrey' minWidth='250px'>
        <Box
          border='none'
          justifyContent='space-between'
          minWidth='328px'
          cursor='pointer'
          onMouseOver={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          <Layout flexBasis='15px' />

          <Button minWidth='215px' minHeight='40px' justifyContent='flex-start' alignItems='center'>
            <Row>
              <Text fontFamily='primary'>{postObject.post}</Text>
            </Row>
          </Button>
          <Layout flexBasis='10px' />
          <Box justifyContent='space-around' alignItems='center' minWidth='100px'>
            <Button
              minWidth='30px'
              minHeight='30px'
              display={visible === true ? 'border-box' : 'none'}
              backgroundColor={postObject.important === true ? 'white' : 'purple'}
              onClick={() => {
                setPostData(importantItem(postData, postObject.id, !important))
                setImportant(!important)
              }}
            >
              <StarIcon color={postObject.important === true ? '#8f49e7' : 'white'} />
            </Button>
            <Layout flexBasis='10px' />
            <Button
              minWidth='30px'
              minHeight='30px'
              display={visible === true ? 'border-box' : 'none'}
              backgroundColor={postObject.like === true ? 'white' : 'purple'}
              onClick={() => {
                setPostData(likeItem(postData, postObject.id, !like))
                setLike(!like)
              }}
            >
              <HeartIcon color={postObject.like === true ? '#8f49e7' : 'white'} />
            </Button>
            <Layout flexBasis='10px' />
            <Button
              minWidth='30px'
              minHeight='30px'
              backgroundColor='lightRed'
              display={visible === true ? 'border-box' : 'none'}
              onClick={() => setPostData(deleteItem(postData, postObject.id))}
            >
              <TrashIcon color='white' />
            </Button>
          </Box>
          <Layout flexBasis='10px' />
        </Box>
      </Box>
      <Layout flexBasis='10px' />
    </>
  )
}
