import React                from 'react'

import { Column }           from '@ui/layout'
import { usePostData }      from '@store/post-data'

import { Item as ListItem } from './Item'

export const List = ({
  deleteItem,
  importantItem,
  likeItem,
  importantColor,
  likeColor,
  favouredCounter,
}) => {
  const [postData] = usePostData()
  return (
    <Column>
      {postData.map((item) => (
        <ListItem
          key={item.id}
          deleteItem={deleteItem}
          importantItem={importantItem}
          importantColor={importantColor}
          likeColor={likeColor}
          likeItem={likeItem}
          content={item.post}
          id={item.id}
          favouredCounter={favouredCounter}
        />
      ))}
    </Column>
  )
}
