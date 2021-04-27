import React                   from 'react'

import { Box, Column, Layout } from '@ui/layout'
import { usePostData }         from '@store/post-data'

import { Item as ListItem }    from './Item'

export const List = ({ deleteItem, importantItem, likeItem }) => {
  const [postData] = usePostData()
  return postData.map(item => (
    <Column>
      <Box minWidth='300px' key={item.id}>
        <ListItem
          deleteItem={deleteItem}
          importantItem={importantItem}
          likeItem={likeItem}
          content={item.post}
          id={item.id}
        />
      </Box>
      <Layout flexBasis='10px' />
    </Column>
  ))
}
