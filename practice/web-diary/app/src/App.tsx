import React, { useState }       from 'react'
import { useIntl }               from 'react-intl'

import { FormPostAdd }           from '@components/form-post-add'
import { Header }                from '@components/header'
import { SwitcherPostStatus }    from '@components/switcher-post-status'
import { FavouredCountProvider } from '@store/favoured-count'
import { PostDataProvider }      from '@store/post-data'
import { Background }            from '@ui/background'
import { Input }                 from '@ui/input'
import { Box, Column, Layout }   from '@ui/layout'
import { List }                  from '@ui/list'

import messages                  from '../messages/messages'
import {
  deleteItem,
  favouredCounter,
  importantColor,
  importantItem,
  likeColor,
  likeItem,
  postCounter,
} from '../actions'

const App = () => {
  const intl = useIntl()
  const [postData, setPostData] = useState([
    { post: 'yesterday', important: false, like: false, id: 1 },
    { post: 'today', important: false, like: false, id: 2 },
    { post: 'tomorrow', important: false, like: false, id: 3 },
  ])
  const [favoured, setFavoured] = useState(0)
  const [posted, setPosted] = useState(0)
  return (
    <PostDataProvider value={[postData, setPostData]}>
      <FavouredCountProvider value={[favoured, setFavoured]}>
        <Background>
          <Column alignItems='center'>
            <Header />
            <Layout flexBasis='20px' />
            <Box justifyContent='space-between' alignItems='center' minWidth='400px'>
              <Input placeholder={intl.formatMessage(messages.search)} />
              <SwitcherPostStatus />
            </Box>
            <Layout flexBasis='15px' />
            <List
              deleteItem={deleteItem}
              likeItem={likeItem}
              importantItem={importantItem}
              importantColor={importantColor}
              likeColor={likeColor}
              favouredCounter={favouredCounter}
            />
            <Layout flexBasis='20px' />
            <FormPostAdd />
          </Column>
        </Background>
      </FavouredCountProvider>
    </PostDataProvider>
  )
}

export default App
