import React, { useState }     from 'react'
import { ValueProvider }       from '@context/data-context/src'
import { useIntl }             from 'react-intl'

import { FormPostAdd }         from '@components/form-post-add'
import { Header }              from '@components/header'
import { SwitcherPostStatus }  from '@components/switcher-post-status'
import { Background }          from '@ui/background'
import { Input }               from '@ui/input'
import { Box, Column, Layout } from '@ui/layout'
import { List }                from '@ui/list'

import messages                from '../messages/messages'

// import { idCount } from '../actions/src'

const App = () => {
  const intl = useIntl()
  const [defaultData, setData] = useState([
    // { post: 'yesterday', id: idCount() },
    // { post: 'today', id: idCount() },
    // { post: 'tomorrow', id: idCount() },
  ])
  return (
    <Background>
      <ValueProvider value={[defaultData, setData]}>
        <Column alignItems='center'>
          <Header />
          <Layout flexBasis='20px' />
          <Box justifyContent='space-between' alignItems='center' minWidth='400px'>
            <Input placeholder={intl.formatMessage(messages.search)} />
            <SwitcherPostStatus />
          </Box>
          <Layout flexBasis='15px' />
          <List data='' />
          <Layout flexBasis='20px' />
          <FormPostAdd />
        </Column>
      </ValueProvider>
    </Background>
  )
}

export default App
