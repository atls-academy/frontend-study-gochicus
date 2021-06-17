import React                                               from 'react'

import { Row }                                             from '@ui/layout'
import { List }                                            from '@ui/list'
import { useButtonStatus }                                 from '@store/button-status'
import { usePostData }                                     from '@store/post-data'
import { useSearchValue }                                  from '@store/search-status'

import { deleteItem, filterData, importantItem, likeItem } from './actions'

export const PostList = () => {
  const [postData, setPostData] = usePostData()
  const [status] = useButtonStatus()
  const [searchResult] = useSearchValue()
  return (
    <Row justifyContent='center'>
      <List
        deleteItem={deleteItem}
        likeItem={likeItem}
        importantItem={importantItem}
        items={filterData(postData, status, searchResult)}
        setPostData={setPostData}
      />
    </Row>
  )
}
