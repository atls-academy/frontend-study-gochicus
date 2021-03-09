import React from 'react'
import '../../../style/src/post-list-item.css'
import { ButtonStar, ButtonTrash } from '@ui/button'

const PostListItem = () => {
  return (
    <li className="app-list-item d-flex justify-content-between">
      <span className="app-list-item-label">Hello World</span>
      <div className="d-flex justify-content-center align-items-center">
        <ButtonStar />
        <ButtonTrash />
        <i className="fa fa-heart"></i>
      </div>
    </li>
  )
}

export default PostListItem
