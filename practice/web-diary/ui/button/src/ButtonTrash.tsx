import React  from 'react'
import styled from '@emotion/styled'

const TrashButton = styled.button('color: red')
export const ButtonTrash = () => {
  return (
    <TrashButton type='button'>
      <i className='fa fa-trash-o' />
    </TrashButton>
  )
}
