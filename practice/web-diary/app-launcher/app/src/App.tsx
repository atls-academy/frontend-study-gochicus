import React                from 'react'

import { AppHeader }        from '@components/app-header'
import { PostAddForm }      from '@components/post-add-form'
import { PostList }         from '@components/post-list'
import { Background }       from '@ui/background'
import { PostStatusFilter } from '@ui/filter'
import { Input }            from '@ui/input'
import { Box, Layout }      from '@ui/layout'

const App = () => {
  return (
    <Background>
      <Layout flexDirection='column' alignItems='center' margin='0' maxWidth='800'>
        <AppHeader />
        <Layout margin='1 rem 0' justifyContent='space-between' alignItems='center'>
          <Input placeholder='Поиск' />
          <Box flexBasis='40px' />
          <PostStatusFilter />
        </Layout>
        <PostList
          data={[
            { post: 'yesterday', id: 1 },
            { post: 'today', id: 2 },
            { post: 'tomorrow', id: 3 },
          ]}
        />
        <PostAddForm />
      </Layout>
    </Background>
  )
}

export default App
