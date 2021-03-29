import React            from 'react'
import styled           from '@emotion/styled'

import AppHeader        from '@ui/app-header'
import PostStatusFilter from '@ui/filter'
import PostAddForm      from '@ui/post-add-form'
import PostList         from '@ui/post-list'
import SearchPanel      from '@ui/search'
import { Box, Layout }  from '@ui/layout'

const Background = styled.div(
  '  margin: 50px 0 0 0;\n' +
    '  padding: 0;\n' +
    '  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n' +
    '    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n' +
    '    sans-serif;\n' +
    '  -webkit-font-smoothing: antialiased;\n' +
    '  -moz-osx-font-smoothing: grayscale;\n' +
    '  background-color: #eaf5fc;',
)

const App = () => {
  return (
    <Background>
      <Layout display='flex' flexDirection='column' alignItems='center' margin='0' maxWidth='800'>
        <AppHeader />
        <Layout display='flex' margin='1 rem 0' justifyContent='space-between' alignItems='center'>
          <SearchPanel />
          <Box flexBasis='40px' />
          <PostStatusFilter />
        </Layout>
        <PostList />
        <PostAddForm />
      </Layout>
    </Background>
  )
}

export default App
