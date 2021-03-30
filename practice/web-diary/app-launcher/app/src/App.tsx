import React                from 'react'
import styled               from '@emotion/styled'

import { AppHeader }        from '@ui/app-header'
import { PostStatusFilter } from '@ui/filter'
import { Input }            from '@ui/input'
import { Box, Layout }      from '@ui/layout'
import { PostAddForm }      from '@ui/post-add-form'
import { PostList }         from '@ui/post-list'
import { PostListItem }     from '@ui/post-list-item'

const Background = styled('div')(() => ({
  margin: '50px 0 0 0',
  padding: '0',
  backgroundColor: '#eaf5fc',
  fontFamily: ' -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen"',
}))

const App = () => {
  return (
    <Background>
      <Layout flexDirection='column' alignItems='center' margin='0' maxWidth='800'>
        <AppHeader />
        <Layout margin='1 rem 0' justifyContent='space-between' alignItems='center'>
          <Input text='Поиск' />
          <Box flexBasis='40px' />
          <PostStatusFilter />
        </Layout>
        <PostList>
          <PostListItem />
          <PostListItem />
          <PostListItem />
        </PostList>
        <PostAddForm />
      </Layout>
    </Background>
  )
}

export default App
