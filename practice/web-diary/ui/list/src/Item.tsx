import React, { useState }          from 'react'

import { Background }               from '@ui/background'
import { Button }                   from '@ui/button'
import { HeartIcon }                from '@ui/icons'
import { StarIcon }                 from '@ui/icons'
import { TrashIcon }                from '@ui/icons'
import { Box, Column, Layout, Row } from '@ui/layout'
import { Text }                     from '@ui/text'
import { usePostData }              from '@store/post-data'

export const Item = ({ deleteItem, importantItem, likeItem, postObject }) => {
  const [postData, setPostData] = usePostData()
  const [important, setImportant] = useState(false)
  const [like, setLike] = useState(false)
  const [visible, setVisible] = useState('invisible')
  return (
    <>
      <Background backgroundColor='backgroundPost' minWidth='250px'>
        <Row
          justifyContent='space-between'
          minWidth='320px'
          onMouseOver={() => setVisible('visible')}
          onMouseLeave={() => setVisible('invisible')}
        >
          <Row jstifyContent='center'>
            <Box minWidth='150px' minHeight='40px' justifyContent='flex-start'>
              <Layout flexBasis='10px' />
              <Column justifyContent='center'>
                <Row>
                  <Text fontFamily='secondary'>{postObject.post}</Text>
                </Row>
              </Column>
            </Box>
            <Layout flexBasis='20px' />
            <Box justifyContent='space-around' alignItems='center' minWidth='180px'>
              <Button
                display={visible === 'visible' ? 'border-box' : 'none'}
                backgroundColor={postObject.important === true ? 'red' : 'backgroundStarButton'}
                onClick={() => {
                  setPostData(importantItem(postData, postObject.id, !important))
                  setImportant(!important)
                }}
              >
                <StarIcon />
              </Button>
              <Layout flexBasis='20px' />
              <Button
                display={visible === 'visible' ? 'border-box' : 'none'}
                backgroundColor={postObject.like === true ? 'black' : 'backgroundLikeButton'}
                onClick={() => {
                  setPostData(likeItem(postData, postObject.id, !like))
                  setLike(!like)
                }}
              >
                <HeartIcon />
              </Button>
              <Layout flexBasis='20px' />
              <Button
                backgroundColor='backgroundTrashButton'
                display={visible === 'visible' ? 'border-box' : 'none'}
                onClick={() => setPostData(deleteItem(postData, postObject.id))}
              >
                <TrashIcon color='white' />
              </Button>
            </Box>
          </Row>
        </Row>
      </Background>
      <Layout flexBasis='10px' />
    </>
  )
}
