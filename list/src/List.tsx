import React                from 'react'
import { ReactJSXElement }  from '@emotion/react/types/jsx-namespace'

import { Item as ListItem } from './Item'
import { Column }           from './layout'
import { ListInterface }    from './List.interface'

export const List = ({
  items,
  deleteItem,
  importantItem,
  likeItem,
  setPostData,
}: ListInterface): ReactJSXElement => {
  return (
    <Column width='100%' justifyContent='center'>
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
    </Column>
  )
}
