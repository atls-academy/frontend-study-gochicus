import React                  from 'react'

import { Header }          from '@components/header'
import { FormPostAdd }        from '@components/form-post-add'
import { SwitcherPostStatus } from '@components/switcher-post-status'
import { Background }         from '@ui/background'
import { Input }              from '@ui/input'
import {  Layout }        from '@ui/layout'
import { List }               from '@ui/list'

const App = () => {
  return (
    <Background>
      <Layout flexDirection='column' alignItems='center' margin='0' maxWidth='800'>
        <Header post={5} like={0}/>
        <Layout margin='10px 0' justifyContent='space-between' alignItems='center'>
          <Input placeholder='Поиск' />
          <Layout flexBasis='40px' />
          <SwitcherPostStatus />
        </Layout>
        <List
          data={[
            { post: 'yesterday', id: 1 },
            { post: 'today', id: 2 },
            { post: 'tomorrow', id: 3 },
          ]}
        />
        <FormPostAdd />
      </Layout>
    </Background>
  )
}

export default App
