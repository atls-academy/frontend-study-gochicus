import React           from 'react'
import styled          from '@emotion/styled'

import { Button }      from '../../button'
import { Box, Layout } from '../../layout'

const List = styled('div')(() => ({
  marginTop: '10px',
  padding: '20px 35px 10px 35px',
  minWidth: '300px',
}))
const Label = styled('span')(() => ({
  display: 'block',
  lineHeight: '35px',
  cursor: 'pointer',
  userSelect: 'none',
  transition: ' 0.5s all',
}))

const diary: { post: string; id: number }[] = [
  { post: 'yesterday', id: 1 },
  { post: 'today', id: 2 },
  { post: 'tomorrow', id: 3 },
]

const PostList: any = () => {
  const elements = diary.map((item: any) => {
    return (
      <List key={item.id}>
        <Layout justifyContent='space-around'>
          <Box minWidth='100px'>
            <Label> {item.post}</Label>
          </Box>
          <Box justifyContent='space-around' alignItems='center' minWidth='100px'>
            <Button color='red'>
              <i className='fa fa-star' />
            </Button>
            <Box flexBasis='30px' />
            <Button color='yellow'>
              <i className='fa fa-trash-o' />
            </Button>
            <Box flexBasis='30px' />
            <i className='fa fa-heart' />
          </Box>
        </Layout>
      </List>
    )
  })
  return elements
}

export default PostList
