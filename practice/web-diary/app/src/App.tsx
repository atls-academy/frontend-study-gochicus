import React, { useState }      from 'react'
import { ThemeProvider }        from '@emotion/react'

import { FormPostAdd }          from '@components/form-post-add'
import { Header }               from '@components/header'
import { PostList }             from '@components/post-list'
import { SwitcherPostStatus }   from '@components/switcher-post-status'
import { ButtonStatusProvider } from '@store/button-status'
import { PostDataProvider }     from '@store/post-data'
import { SearchValueProvider }  from '@store/search-status'
import { Background }           from '@ui/background'
import { Column, Layout }       from '@ui/layout'
import { theme }                from '@ui/theme'

const App = () => {
  const [postData, setPostData] = useState([
    { post: 'yesterday', id: 1 },
    { post: 'today', id: 2 },
    { post: 'tomorrow', id: 3 },
  ])
  const [status, setStatus] = useState('all')
  const [searchValue, setSearchValue] = useState('')
  return (
    <ThemeProvider theme={theme}>
      <PostDataProvider value={[postData, setPostData]}>
        <ButtonStatusProvider value={[status, setStatus]}>
          <SearchValueProvider value={[searchValue, setSearchValue]}>
            <Background>
              <Column alignItems='center'>
                <Header />
                <Layout flexBasis={theme.indent.normal} />
                <SwitcherPostStatus />
                <Layout flexBasis={theme.indent.small} />
                <PostList />
                <Layout flexBasis={theme.indent.normal} />
                <FormPostAdd />
              </Column>
            </Background>
          </SearchValueProvider>
        </ButtonStatusProvider>
      </PostDataProvider>
    </ThemeProvider>
  )
}

export default App
