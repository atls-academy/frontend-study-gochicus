import '../../../style/src/post-list-item.css'

import React from 'react'

import { ButtonStar, ButtonTrash } from '@ui/button'
import { Box } from '@ui/layout'

const PostListItem = () => {
  return (
    <li className='app-list-item d-flex justify-content-between'>
      <span className='app-list-item-label'>Hello World</span>
      <Box className='d-flex justify-content-center align-items-center'>
        <ButtonStar />
        <ButtonTrash />
        <i className='fa fa-heart' />
      </Box>
    </li>
  )
}

export default PostListItem
