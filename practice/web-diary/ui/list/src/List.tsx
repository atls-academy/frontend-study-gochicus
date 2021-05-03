import React                from 'react'

import { Column }           from '@ui/layout'

import { Item as ListItem } from './Item'

export const List = ({ items, deleteItem, importantItem, likeItem, theme }) => {
  return (
    <Column>
      {items.map(item => (
        <ListItem
          key={item.id}
          deleteItem={deleteItem}
          importantItem={importantItem}
          likeItem={likeItem}
          postObject={item}
          theme={theme}
        />
      ))}
    </Column>
  )
}
