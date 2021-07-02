import React                from 'react'
import { FC }               from 'react'

import { Item as ListItem } from './Item'
import { Column }           from './layout'
import { ListProps }        from './list.interface'

export const List: FC<ListProps> = ({
  items,
  deleteItem,
  importantItem,
  likeItem,
  setPostData,
}) => {
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
