import React            from 'react'
import styled           from '@emotion/styled'

import { CommonButton } from '@ui/button'
import { Box, Layout }  from '@ui/layout'

const Label = styled('span')(() => ({
  display: 'block',
  lineHeight: '35px',
  cursor: 'pointer',
  userSelect: 'none',
  transition: ' 0.5s all',
}))

const ListItem = styled('div')(() => ({
  fontSize: '16px',
  display: 'flex',
}))

const PostListItem = () => {
  return (
    <ListItem>
      <Layout justifyContent='space-around'>
        <Box minWidth='100px'>
          <Label>Hello World</Label>
        </Box>
        <Box justifyContent='space-around' alignItems='center' minWidth='100px'>
          <CommonButton color='red'>
            <i className='fa fa-star' />
          </CommonButton>
          <Box flexBasis='30px' />
          <CommonButton color='yellow'>
            <i className='fa fa-trash-o' />
          </CommonButton>
          <Box flexBasis='30px' />
          <i className='fa fa-heart' />
        </Box>
      </Layout>
    </ListItem>
  )
}

export default PostListItem
