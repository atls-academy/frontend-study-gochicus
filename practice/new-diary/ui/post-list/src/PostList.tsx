import '../../../style/src/post-list.css'

import React from 'react'

import PostListItem from '@ui/post-list-item'

const PostList = (className) => {
  return (
    <ul className='app-list list-group'>
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </ul>
  )
}

export default PostList
