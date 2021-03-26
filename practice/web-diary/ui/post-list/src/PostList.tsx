import React        from 'react'
import styled       from '@emotion/styled'

import PostListItem from '@ui/post-list-item'

const List = styled.ul(
  ' margin-top: 50px;\n' +
    ' padding: 20px 35px 10px 35px;\n' +
    ' margin-top: 10px;\n' +
    'min-width: 300px',
)
const PostList = () => {
  return (
    <List>
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </List>
  )
}

export default PostList
