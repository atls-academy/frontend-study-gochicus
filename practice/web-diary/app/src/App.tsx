import React, { useState }      from 'react'
import { ThemeProvider }        from '@emotion/react'

import * as theme               from '@ui/theme'
import { FormPostAdd }          from '@components/form-post-add'
import { Header }               from '@components/header'
import { PostList }             from '@components/post-list'
import { SwitcherPostStatus }   from '@components/switcher-post-status'
import { ButtonStatusProvider } from '@store/button-status'
import { PostDataProvider }     from '@store/post-data'
import { SearchValueProvider }  from '@store/search-status'
import { Background }           from '@ui/background'
import { Column, Layout }       from '@ui/layout'

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
            <Background height='100%' width='100%'>
              <Column alignItems='center'>
                <Header />
                <Layout flexBasis='25px' />
                <SwitcherPostStatus />
                <Layout flexBasis='25px' />
                <PostList />
                <Layout flexBasis='25px' />
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
