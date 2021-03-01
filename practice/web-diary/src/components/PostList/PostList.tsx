import React from 'react'
import '../../style/post-list.css'
import PostListItem from '../post-list-item/PostListItem'

const PostList = () => {
  return (
    <ul className="app-list list-group">
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </ul>
  )
}

export default PostList
