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
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Box backgroundColor='lightGrey' width='100%'>
        <Button
          display='show'
          color='grey'
          onMouseOver={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          <Box justifyContent='flex-start' borderColor='transparent' cursor='pointer'>
            <Text>{postObject.post}</Text>
          </Box>
          <Box justifyContent='space-around' alignItems='center' width='70%'>
            <Layout flexBasis='70px' />
            <Box width='20%'>
              <Button
                size='small'
                display={visible === true ? 'show' : 'hide'}
                color={important === true ? 'white' : 'purple'}
                onClick={() => {
                  updateState(importantItem(data, postObject.id, !important))
                  setImportant(!important)
                }}
              >
                <StarIcon color={postObject.important === true ? '#8f49e7' : 'white'} />{' '}
              </Button>
            </Box>
            <Layout flexBasis='5px' />
            <Box width='20%'>
              <Button
                size='small'
                display={visible === true ? 'show' : 'hide'}
                color={like === true ? 'white' : 'purple'}
                onClick={() => {
                  updateState(likeItem(data, postObject.id, !like))
                  setLike(!like)
                }}
              >
                <HeartIcon color={postObject.like === true ? '#8f49e7' : 'white'} />
              </Button>
            </Box>
            <Layout flexBasis='5px' />
            <Box width='20%'>
              <Button
                size='small'
                display={visible === true ? 'show' : 'hide'}
                color='red'
                onClick={() => updateState(deleteItem(data, postObject.id))}
              >
                <TrashIcon color='white' />
              </Button>
            </Box>
          </Box>
        </Button>
      </Box>
      <Layout flexBasis='10px' />
    </>
  )
}
