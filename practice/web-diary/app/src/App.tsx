import React              from 'react'

import { Controls }       from '@fragments/controls'
import { FormPostAdd }    from '@fragments/form-post-add'
import { Header }         from '@fragments/header'
import { PostList }       from '@fragments/post-list'
import { Background }     from '@ui/background'
import { Column, Layout } from '@ui/layout'

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
              <Controls />
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
