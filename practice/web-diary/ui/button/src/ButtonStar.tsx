import React  from 'react'
import styled from '@emotion/styled'

const StarButton = styled.button('color: #FFD700')
export const ButtonStar = () => {
  return (
    <StarButton type='button'>
      <i className='fa fa-star' />
    </StarButton>
  )
}
