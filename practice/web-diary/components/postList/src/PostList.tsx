import React                                               from 'react'

import { List }                                            from '@ui/list'
import { useButtonStatus }                                 from '@store/button-status'
import { usePostData }                                     from '@store/post-data'
import { useSearchValue }                                  from '@store/search-status'

import { deleteItem, filterData, importantItem, likeItem } from '../actions'

export const PostList = () => {
  const [postData] = usePostData()
  const [status] = useButtonStatus()
  const [searchResult] = useSearchValue()
  return (
    <List
      deleteItem={deleteItem}
      likeItem={likeItem}
      importantItem={importantItem}
      items={filterData(postData, status, searchResult)}
    />
  )
}
