import React               from 'react'

import { Item as ListItem } from './Item'
import { Column }           from './layout/src'

export const List = ({ items, deleteItem, importantItem, likeItem, setPostData }) => {
  return (
    <Column width='100%' justifyContent='center'>
      {items.map((item) => (
        <ListItem
          key={item.id}
          deleteItem={deleteItem}
          importantItem={importantItem}
          likeItem={likeItem}
          postObject={item}
          setPostData={setPostData}
          postData={items}
        />
      ))}
    </Column>
  )
}
