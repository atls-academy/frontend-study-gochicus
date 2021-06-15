import React                        from 'react'

import { FormPostAdd }              from '@fragments/form-post-add'
import { Header }                   from '@fragments/header'
import { PostControls }             from '@fragments/post-controls'
import { PostList }                 from '@fragments/post-list'
import { Background }               from '@ui/background'
import { Box, Column, Layout, Row } from '@ui/layout'

export const Diary = () => {
  return (
    <Background gradient='blueAndGreenGradient' height='100vh' width='100%'>
      <Column alignItems='center'>
        <Layout flexBasis={['0px', '50px', '300px']} />
        <Box backgroundColor='white' width={['100%', '400px', '400px']}>
          <Row justifyContent='center'>
            <Layout flexBasis='15px' />
            <Column alignItems='center' width='100%'>
              <Layout flexBasis='45px' />
              <Header />
              <Layout flexBasis='25px' />
              <FormPostAdd />
              <Layout flexBasis='25px' />
              <PostList />
              <Layout flexBasis='25px' />
              <PostControls />
              <Layout flexBasis='25px' />
            </Column>
            <Layout flexBasis='15px' />
          </Row>
        </Box>
        <Box
          backgroundColor='white'
          width={['100%', '400px', '400px']}
          height={['100%', '0px', '0px']}
        />
        <Layout flexBasis={['0px', '45px', '145px']} />
      </Column>
    </Background>
  )
}
