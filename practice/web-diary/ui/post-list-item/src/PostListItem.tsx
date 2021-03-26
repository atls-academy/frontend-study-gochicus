import React                       from 'react'
import styled                      from '@emotion/styled'

import { ButtonStar, ButtonTrash } from '@ui/button'
import { Box, Layout }             from '@ui/layout'

const Label = styled.span(
  ' display: block;\n',
  '  line-height: 35px;\n',
  '  cursor: pointer;\n',
  '  user-select: none;\n',
  '  transition: 0.5s all;',
)

const ListItem = styled.li('font-size: 1.25 rem \n', 'display: flex \n', 'justify-content: row')

const PostListItem = () => {
  return (
    <ListItem>
      <Layout display='flex' flexDirection='row' justifyContent='space-around'>
        <Label>Hello World</Label>
        <Box display='flex' justifyContent='space-around' alignItems='center' minWidth='100px'>
          <ButtonStar />
          <ButtonTrash />
          <i className='fa fa-heart' />
        </Box>
      </Layout>
    </ListItem>
  )
}

export default PostListItem
