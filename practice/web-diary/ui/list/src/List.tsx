import React                from 'react'

import { Box }              from '@ui/layout'

import { Item as ListItem } from './Item'

export const List = ({ data }: any) => {
  return data.map(item => (
    <Box marginTop='10px' padding='20px 35px 10px 35px' minWidth='300px' key={item.id}>
      <ListItem content={item.post} />
    </Box>
  ))
}
