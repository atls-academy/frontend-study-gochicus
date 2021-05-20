import React, { useState }                 from 'react'
import { IntlProvider }                    from 'react-intl'

import { Diary }                           from '@fragments/diary'
import { ButtonStatusProvider }            from '@store/button-status'
import { PostDataProvider }                from '@store/post-data'
import { SearchValueProvider }             from '@store/search-status'
import { ThemeProvider, injectGlobalStyles } from '@ui/theme'

const App = () => {
  injectGlobalStyles()
  const [postData, setPostData] = useState([])
  const [status, setStatus] = useState('all')
  const [searchValue, setSearchValue] = useState('')
  return (
    <IntlProvider locale='en'>
      <ThemeProvider>
        <PostDataProvider value={[postData, setPostData]}>
          <ButtonStatusProvider value={[status, setStatus]}>
            <SearchValueProvider value={[searchValue, setSearchValue]}>
              <Diary />
            </SearchValueProvider>
          </ButtonStatusProvider>
        </PostDataProvider>
      </ThemeProvider>
    </IntlProvider>
  )
}

export default App
