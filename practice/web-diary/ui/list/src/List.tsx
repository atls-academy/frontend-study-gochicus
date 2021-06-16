import React                from 'react'

import { Item as ListItem } from './Item'

export const List = ({ items, deleteItem, importantItem, likeItem, setPostData }) => {
  return (
    <>
      {items.map(item => (
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
    </>
  )
}
