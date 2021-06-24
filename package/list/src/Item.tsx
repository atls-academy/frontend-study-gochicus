import React, { useState }               from 'react'

import { Button }                         from './button/src'
import { Condition }                      from './condition/src'
import { HeartIcon, StarIcon, TrashIcon } from './icons/src'
import { Box, Column, Layout, Row }       from './layout/src'

export const Item = ({
  deleteItem,
  importantItem,
  likeItem,
  postObject,
  setPostData,
  postData,
}) => {
  const [important, setImportant] = useState(false)
  const [like, setLike] = useState(false)
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Row
        backgroundColor='lightGrey'
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        alignItems='center'
        justifyContent='space-between'
      >
        <Box width='200px'>
          <Column width='100%'>
            <Layout flexBasis='10px' />
            <Box maxHeight='300px' borderColor='transparent'>
              <Layout flexBasis='10px' />
              <Row overflow='auto' hyphens='auto'>
                <Text>{postObject.post}</Text>
              </Row>
            </Box>
            <Layout flexBasis='10px' />
          </Column>
        </Box>
        <Condition match={visible}>
          <Box width='150px'>
            <Row>
              <Layout flexBasis='70px' />
              <Button
                height='small'
                color={important === true ? 'white' : 'purple'}
                onClick={() => {
                  setPostData(importantItem(postData, postObject.id, !important))
                  setImportant(!important)
                }}
              >
                <Box padding='5px'>
                  <StarIcon color={postObject.important === true ? '#8f49e7' : 'white'} />
                </Box>
              </Button>
              <Layout flexBasis='5px' />
              <Button
                height='small'
                color={like === true ? 'white' : 'purple'}
                onClick={() => {
                  setPostData(likeItem(postData, postObject.id, !like))
                  setLike(!like)
                }}
              >
                <Box padding='5px'>
                  <HeartIcon color={postObject.like === true ? '#8f49e7' : 'white'} />
                </Box>
              </Button>
              <Layout flexBasis='5px' />
              <Button
                height='small'
                color='red'
                onClick={() => setPostData(deleteItem(postData, postObject.id))}
              >
                <Box padding='5px'>
                  <TrashIcon color='white' />
                </Box>
              </Button>
            </Row>
          </Box>
        </Condition>
      </Row>
      <Layout flexBasis='10px' />
    </>
  )
}
