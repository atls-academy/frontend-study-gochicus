import React, { useState }                from 'react'

import { Button }                         from '@ui/button'
import { Condition }                      from '@ui/condition'
import { HeartIcon, StarIcon, TrashIcon } from '@ui/icons'
import { Box, Column, Layout, Row }       from '@ui/layout'
import { Text }                           from '@ui/text'

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
      <Row>
        <Row
          backgroundColor='lightGrey'
          onMouseOver={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          alignItems='center'
          cursor='pointer'
        >
          <Column width='100%'>
            <Layout flexBasis='10px' />
            <Box maxHeight='300px' borderColor='transparent'>
              <Layout flexBasis='10px' />
              <Row overflow='auto' hyphens='auto' display='block'>
                <Text>{postObject.post}</Text>
              </Row>
            </Box>
            <Layout flexBasis='10px' />
          </Column>
          <Row>
            <Condition match={visible}>
              <Layout flexBasis='70px' />
              <Box>
                <Button
                  height='small'
                  color={important === true ? 'white' : 'purple'}
                  onClick={() => {
                    setPostData(importantItem(postData, postObject.id, !important))
                    setImportant(!important)
                  }}
                >
                  <StarIcon color={postObject.important === true ? '#8f49e7' : 'white'} />{' '}
                </Button>
              </Box>
              <Layout flexBasis='5px' />
              <Box>
                <Button
                  height='small'
                  color={like === true ? 'white' : 'purple'}
                  onClick={() => {
                    setPostData(likeItem(postData, postObject.id, !like))
                    setLike(!like)
                  }}
                >
                  <HeartIcon color={postObject.like === true ? '#8f49e7' : 'white'} />
                </Button>
              </Box>
              <Layout flexBasis='5px' />
              <Box>
                <Button
                  height='small'
                  color='red'
                  onClick={() => setPostData(deleteItem(postData, postObject.id))}
                >
                  <TrashIcon color='white' />
                </Button>
              </Box>
              <Layout flexBasis='5px' />
            </Condition>
          </Row>
        </Row>
        <Layout flexBasis='10px' />
      </Row>
      <Layout flexBasis='10px' />
    </>
  )
}
