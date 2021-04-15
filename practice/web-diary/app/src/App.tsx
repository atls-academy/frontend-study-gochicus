import React                   from 'react'
import { useIntl }             from 'react-intl'

import { FormPostAdd }         from '@components/form-post-add'
import { Header }              from '@components/header'
import { SwitcherPostStatus }  from '@components/switcher-post-status'
import { Background }          from '@ui/background'
import { Input }               from '@ui/input'
import { Box, Column, Layout } from '@ui/layout'
import { List }                from '@ui/list'

import messages                from '../messages/messages'

const App = () => {
  const intl = useIntl()
  return (
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
          data={[
            { post: 'yesterday', id: 1 },
            { post: 'today', id: 2 },
            { post: 'tomorrow', id: 3 },
          ]}
        />
        <Layout flexBasis='20px' />
        <FormPostAdd />
      </Column>
    </Background>
  )
}

export default App
