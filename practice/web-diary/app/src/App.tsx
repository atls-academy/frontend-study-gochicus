import React                   from 'react'

import { FormPostAdd }         from '@fragments/form-post-add'
import { Header }              from '@fragments/header'
import { PostControls }        from '@fragments/post-controls'
import { PostList }            from '@fragments/post-list'
import { Background }          from '@ui/background'
import { Box, Column, Layout } from '@ui/layout'

const App = () => {
  return (
    <Background gradient='blueAndGreenGradient' height='100vh' width='100vw' overflowY='auto'>
      <Column alignItems='center'>
        <Layout flexBasis='300px' />
        <Column alignItems='center'>
          <Box backgroundColor='white' maxWidth='500px'>
            <Column alignItems='center'>
              <Layout flexBasis='25px' />
              <Header />
              <Layout flexBasis='25px' />
              <FormPostAdd />
              <Layout flexBasis='15px' />
              <PostList />
              <Layout flexBasis='25px' />
              <PostControls />
              <Layout flexBasis='25px' />
            </Column>
          </Box>
        </Column>
        <Layout flexBasis='45px' />
      </Column>
    </Background>
  )
}

export default App
