import React, { useState }         from 'react'
import { ThemeProvider }           from '@emotion/react'

import { FormPostAdd }             from '@components/form-post-add'
import { Header }                  from '@components/header'
import { PostList }                from '@components/post-list'
import { SwitcherPostStatus }      from '@components/switcher-post-status'
import { ButtonStatusProvider }    from '@store/button-status'
import { PostDataProvider }        from '@store/post-data'
import { SearchValueProvider }     from '@store/search-status'
import { Background }              from '@ui/background'
import { Column, Layout }          from '@ui/layout'
import { color, indent, minWidth } from '@ui/theme'

const App = () => {
  const [postData, setPostData] = useState([
    { post: 'yesterday', id: 1 },
    { post: 'today', id: 2 },
    { post: 'tomorrow', id: 3 },
  ])
  const [status, setStatus] = useState('all')
  const [searchValue, setSearchValue] = useState('')
  const theme = {
    color,
    indent,
    minWidth,
  }
  return (
    <ThemeProvider theme={theme}>
      <PostDataProvider value={[postData, setPostData]}>
        <ButtonStatusProvider value={[status, setStatus]}>
          <SearchValueProvider value={[searchValue, setSearchValue]}>
            <Background>
              <Column alignItems='center'>
                <Header />
                <Layout flexBasis={indent.normal} />
                <SwitcherPostStatus theme={theme} />
                <Layout flexBasis={indent.small} />
                <PostList theme={theme} />
                <Layout flexBasis={indent.normal} />
                <FormPostAdd theme={theme} />
              </Column>
            </Background>
          </SearchValueProvider>
        </ButtonStatusProvider>
      </PostDataProvider>
    </ThemeProvider>
  )
}

export default App
