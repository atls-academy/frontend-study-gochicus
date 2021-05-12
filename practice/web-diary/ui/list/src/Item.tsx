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
          minWidth='328px'
          onMouseOver={() => setVisible('visible')}
          onMouseLeave={() => setVisible('invisible')}
        >
          <Row jstifyContent='center'>
            <Box minWidth='230px' minHeight='40px' justifyContent='flex-start'>
              <Layout flexBasis='10px' />
              <Column justifyContent='center'>
                <Row>
                  <Text fontFamily='secondary'>{postObject.post}</Text>
                </Row>
              </Column>
            </Box>
            <Layout flexBasis='10px' />
            <Box justifyContent='space-around' alignItems='center' minWidth='100px'>
              <Button
                maxWidth='30px'
                minWidth='30px'
                maxHeight='30px'
                minHeight='30px'
                display={visible === 'visible' ? 'border-box' : 'none'}
                backgroundColor={postObject.important === true ? 'white' : 'defaultPurple'}
                onClick={() => {
                  setPostData(importantItem(postData, postObject.id, !important))
                  setImportant(!important)
                }}
              >
                <StarIcon color={postObject.important === true ? '#8f49e7' : 'white'} />
              </Button>
              <Layout flexBasis='10px' />
              <Button
                maxWidth='30px'
                minWidth='30px'
                maxHeight='30px'
                minHeight='30px'
                display={visible === 'visible' ? 'border-box' : 'none'}
                backgroundColor={postObject.like === true ? 'white' : 'defaultPurple'}
                onClick={() => {
                  setPostData(likeItem(postData, postObject.id, !like))
                  setLike(!like)
                }}
              >
                <HeartIcon color={postObject.like === true ? '#8f49e7' : 'white'} />
              </Button>
              <Layout flexBasis='10px' />
              <Button
                maxWidth='30px'
                minWidth='30px'
                maxHeight='30px'
                minHeight='30px'
                backgroundColor='lightRed'
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
