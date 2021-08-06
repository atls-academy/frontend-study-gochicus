import React                                 from 'react'
import { IntlProvider }                      from 'react-intl'
import { injectGlobalStyles, ThemeProvider } from '@ui/theme'
import { PostDataProvider }                  from '@store/post-data'
import { ButtonStatusProvider }              from '@store/button-status'
import { SearchValueProvider }               from '@store/search-status'
import { useState }                          from 'react'

const App = ({ Component, pageProps }) => {
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
              <Component {...pageProps} />
            </SearchValueProvider>
          </ButtonStatusProvider>
        </PostDataProvider>
      </ThemeProvider>
    </IntlProvider>
  )
}

export default App
