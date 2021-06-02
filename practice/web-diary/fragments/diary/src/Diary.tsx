import React                   from 'react'

import { FormPostAdd }         from '@fragments/form-post-add'
import { Header }              from '@fragments/header'
import { PostControls }        from '@fragments/post-controls'
import { PostList }            from '@fragments/post-list'
import { Background }          from '@ui/background'
import { Box, Column, Layout } from '@ui/layout'

export const Diary = () => {
  return (
    <Background gradient='blueAndGreenGradient' height='100vh' width='100vw' overflowY='auto'>
      <Column alignItems='center'>
        <Layout flexBasis='300px' />
        <Box backgroundColor='white' width='auto' minWidth='340px'>
          <Column alignItems='center' width='100%'>
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
        <Layout flexBasis='45px' />
      </Column>
    </Background>
  )
}
