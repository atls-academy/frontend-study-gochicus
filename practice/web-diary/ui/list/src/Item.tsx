import React, { useState } from 'react'

import { Button }          from '@ui/button'
import { HeartIcon }       from '@ui/icons'
import { StarIcon }        from '@ui/icons'
import { TrashIcon }       from '@ui/icons'
import { Box, Layout }     from '@ui/layout'
import { Text }            from '@ui/text'

export const Item = ({ deleteItem, importantItem, likeItem, postObject, updateState, data }) => {
  const [important, setImportant] = useState(false)
  const [like, setLike] = useState(false)
  const [, setVisible] = useState(false)
  return (
    <>
      <Box backgroundColor='lightGrey'>
        <Box
          minWidth='335px'
          border='none'
          justifyContent='space-between'
          cursor='pointer'
          onMouseOver={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          <Box
            justifyContent='flex-start'
            minHeight='40px'
            borderColor='transparent'
            cursor='pointer'
          >
            <Text>{postObject.post}</Text>
          </Box>
          <Layout flexBasis='10px' />
          <Box justifyContent='space-around' alignItems='center' minWidth='100px'>
            <Button
              onClick={() => {
                updateState(importantItem(data, postObject.id, !important))
                setImportant(!important)
              }}
            >
              <StarIcon color={postObject.important === true ? '#8f49e7' : 'white'} />{' '}
            </Button>
            <Layout flexBasis='10px' />
            <Button
              onClick={() => {
                updateState(likeItem(data, postObject.id, !like))
                setLike(!like)
              }}
            >
              <HeartIcon color={postObject.like === true ? '#8f49e7' : 'white'} />
            </Button>
            <Layout flexBasis='10px' />
            <Button onClick={() => updateState(deleteItem(data, postObject.id))}>
              <TrashIcon color='white' />
            </Button>
          </Box>
        </Box>
        <Layout flexBasis='10px' />
      </Box>
      <Layout flexBasis='10px' />
    </>
  )
}
