import React                   from 'react'

import { FormPostAdd }         from '@fragments/form-post-add'
import { Header }              from '@fragments/header'
import { PostControls }        from '@fragments/post-controls'
import { PostList }            from '@fragments/post-list'
import { Background }          from '@ui/background'
import { Box, Column, Layout } from '@ui/layout'

export const Diary = () => {
  return (
    <Background gradient='blueAndGreenGradient' height='100vh' width='100%'>
      <Column alignItems='center'>
        <Layout flexBasis={['0px', '0px', '300px']} />
        <Box backgroundColor='white' width={['100%', '100%', '400px']}>
          <Layout flexBasis='15px' />
          <Column alignItems='center' width='100%'>
            <Layout flexBasis='25px' />
            <Header />
            <Layout flexBasis='25px' />
            <FormPostAdd />
            <Layout flexBasis='25px' />
            <PostList />
            <Layout flexBasis='25px' />
            <PostControls />
            <Layout flexBasis={['395px', '600px', '25px']} />
          </Column>
          <Layout flexBasis='15px' />
        </Box>
        <Layout flexBasis={['0px', '45px', '45px']} />
      </Column>
    </Background>
  )
}
