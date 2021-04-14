import React                from 'react'

import { Box }              from '@ui/layout'

import { Item as ListItem } from './Item'

export const List = ({ data }: any) =>
  data.map(item => (
    <Box marginTop='10px' minWidth='300px' key={item.id}>
      <ListItem content={item.post} />
    </Box>
  ))
