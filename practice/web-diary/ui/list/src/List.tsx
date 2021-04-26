import React                   from 'react'

import { Box, Column, Layout } from '@ui/layout'

import { Item as ListItem }    from './Item'

export const List = ({ data }) =>
  data.map(item => (
    <Column>
      <Box minWidth='300px' key={item.id}>
        <ListItem content={item.post} />
      </Box>
      <Layout flexBasis='10px' />
    </Column>
  ))
