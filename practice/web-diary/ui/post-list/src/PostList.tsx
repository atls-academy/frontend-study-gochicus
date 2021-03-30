import React  from 'react'
import styled from '@emotion/styled'

const List = styled.div`
  margin-top: 10px;
  padding: 20px 35px 10px 35px;
  min-width: 300px;
`

const PostList = ({ children }) => {
  return <List>{children}</List>
}

export default PostList
