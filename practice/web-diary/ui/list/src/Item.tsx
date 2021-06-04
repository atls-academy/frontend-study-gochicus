import React, { useState }     from 'react'

import { Button }              from '@ui/button'
import { Condition }           from '@ui/condition'
import { HeartIcon }           from '@ui/icons'
import { StarIcon }            from '@ui/icons'
import { TrashIcon }           from '@ui/icons'
import { Box, Column, Layout } from '@ui/layout'
import { Text }                from '@ui/text'

export const Item = ({ deleteItem, importantItem, likeItem, postObject, setPostData, data }) => {
  const [important, setImportant] = useState(false)
  const [like, setLike] = useState(false)
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Box
        backgroundColor='lightGrey'
        width='100%'
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        alignItems='center'
        cursor='pointer'
      >
        <Column width='100%'>
          <Layout flexBasis='10px' />
          <Box maxHeight='300px' overflow='auto' borderColor='transparent'>
            <Box overflow='auto' display='block'>
              <Text>{postObject.post}</Text>
            </Box>
          </Box>
          <Layout flexBasis='10px' />
        </Column>
        <Box width='100%'>
          <Condition match={visible}>
            <Layout flexBasis='70px' />
            <Box width='20%'>
              <Button
                height='small'
                color={important === true ? 'white' : 'purple'}
                onClick={() => {
                  setPostData(importantItem(data, postObject.id, !important))
                  setImportant(!important)
                }}
              >
                <StarIcon color={postObject.important === true ? '#8f49e7' : 'white'} />{' '}
              </Button>
            </Box>
            <Layout flexBasis='5px' />
            <Box width='20%'>
              <Button
                height='small'
                color={like === true ? 'white' : 'purple'}
                onClick={() => {
                  setPostData(likeItem(data, postObject.id, !like))
                  setLike(!like)
                }}
              >
                <HeartIcon color={postObject.like === true ? '#8f49e7' : 'white'} />
              </Button>
            </Box>
            <Layout flexBasis='5px' />
            <Box width='20%'>
              <Button
                height='small'
                color='red'
                onClick={() => setPostData(deleteItem(data, postObject.id))}
              >
                <TrashIcon color='white' />
              </Button>
            </Box>
          </Condition>
        </Box>
      </Box>
      <Layout flexBasis='10px' />
    </>
  )
}
