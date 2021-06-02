import React, { useState }            from 'react'

import { Button }                     from '@ui/button'
import { Condition, LayoutCondition } from '@ui/condition'
import { HeartIcon }                  from '@ui/icons'
import { StarIcon }                   from '@ui/icons'
import { TrashIcon }                  from '@ui/icons'
import { Box, Layout }                from '@ui/layout'
import { Text }                       from '@ui/text'

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
          <Box borderColor='transparent' width='50%'>
            <Text>{postObject.post}</Text>
          </Box>
          <LayoutCondition match={visible} />
          <Condition match={visible}>
            <Box width='50%'>
              <Layout flexBasis='70px' />
              <Box width='20%'>
                <Button
                  size='small'
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
                  color='red'
                  onClick={() => updateState(deleteItem(data, postObject.id))}
                >
                  <TrashIcon color='white' />
                </Button>
              </Box>
            </Box>
          </Condition>
        </Button>
      </Box>
      <Layout flexBasis='10px' />
    </>
  )
}
