
import React, { useState }                     from 'react'
import { useIntl }                             from 'react-intl'

import { FormPostAdd }                         from '@components/form-post-add'
import { Header }                              from '@components/header'
import { SwitcherPostStatus }                  from '@components/switcher-post-status'
import { PostDataProvider }                    from '@store/post-data'
import { Background }                          from '@ui/background'
import { Input }                               from '@ui/input'
import { Box, Column, Layout }                 from '@ui/layout'
import { List }                                from '@ui/list'

import messages                                from '../messages/messages'
import { deleteItem, importantItem, likeItem } from '../actions'

const App = () => {
  const intl = useIntl()
  const [postData, setPostData] = useState([
    { post: 'yesterday', important: false, like: false, id: 1 },
    { post: 'today', important: false, like: false, id: 2 },
    { post: 'tomorrow', important: false, like: false, id: 3 },

  ])
  return (
    <PostDataProvider value={[postData, setPostData]}>
      <Background>
        <Column alignItems='center'>
          <Header />
          <Layout flexBasis='20px' />
          <Box justifyContent='space-between' alignItems='center' minWidth='400px'>
            <Input placeholder={intl.formatMessage(messages.search)} />
            <SwitcherPostStatus />
          </Box>
          <Layout flexBasis='15px' />
          <List deleteItem={deleteItem} likeItem={likeItem} importantItem={importantItem} />

          <Layout flexBasis='20px' />
          <FormPostAdd />
        </Column>
      </Background>
    </PostDataProvider>
  )
}

export default App
