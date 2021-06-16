import React                                               from 'react'

import { Column }                                          from '@ui/layout'
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
    <Column
      width='100%'
      justifyContent='center'
      height={[postData.length <= 3 ? '20%' : '100%', '100%', '100%']}
      maxHeight={[postData.length < 5 ? '50%' : '100%', '100%', '100%']}
    >
      <List
        deleteItem={deleteItem}
        likeItem={likeItem}
        importantItem={importantItem}
        items={filterData(postData, status, searchResult)}
        setPostData={setPostData}
      />
    </Column>
  )
}
