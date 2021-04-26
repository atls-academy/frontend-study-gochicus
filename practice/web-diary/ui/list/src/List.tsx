import React                   from 'react'

import { Box, Column, Layout } from '@ui/layout'
import { usePostData }         from '@store/post-data'

import { Item as ListItem }    from './Item'

export const List = () => {
  const [postData] = usePostData()
  return postData.map(item => (
    <Column>
      <Box minWidth='300px' key={item.id}>
        <ListItem content={item.post} />
      </Box>
      <Layout flexBasis='10px' />
    </Column>
  ))
}
