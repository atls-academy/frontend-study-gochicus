import React                from 'react'

import { Box, Layout }      from '@ui/layout'

import { Item as ListItem } from './Item'

export const List = ({ data }: any) =>
  data.map(item => (
    <Layout flexDirection='column'>
      <Box minWidth='300px' key={item.id}>
        <ListItem content={item.post} />
      </Box>
      <Layout flexBasis='10px' />
    </Layout>
  ))
