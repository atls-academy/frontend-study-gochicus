import React                   from 'react'

import { ClearPost }           from '@components/clear-post'
import { CountPost }           from '@components/count-post'
import { FormPostAdd }         from '@components/form-post-add'
import { Header }              from '@components/header'
import { PostList }            from '@components/post-list'
import { SwitcherPostStatus }  from '@components/switcher-post-status'
import { Background }          from '@ui/background'
import { Column, Layout, Row } from '@ui/layout'

const App = () => {
  return (
    <Background gradient='blueAndGreenGradient' height='100vh' width='100vw' overflowY='auto'>
      <Column alignItems='center'>
        <Layout flexBasis='300px' />
        <Column alignItems='center'>
          <Background backgroundColor='white' maxWidth='500px'>
            <Column alignItems='center'>
              <Layout flexBasis='25px' />
              <Header />
              <Layout flexBasis='25px' />
              <FormPostAdd />
              <Layout flexBasis='15px' />
              <PostList />
              <Layout flexBasis='25px' />
              <SwitcherPostStatus />
              <Layout flexBasis='25px' />
              <Row justifyContent='space-between' minWidth='300px'>
                <CountPost />
                <ClearPost />
              </Row>
              <Layout flexBasis='25px' />
            </Column>
          </Background>
        </Column>
        <Layout flexBasis='45px' />
      </Column>
    </Background>
  )
}

export default App
