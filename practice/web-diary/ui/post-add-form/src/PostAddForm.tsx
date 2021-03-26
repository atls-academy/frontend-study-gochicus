import React            from 'react'
import styled           from '@emotion/styled'

import { ButtonSubmit } from '@ui/button'
import { Input }        from '@ui/input'
import { Box, Layout }  from '@ui/layout'

const Form = styled.div('margin: 1rem 0;', 'min-width: 400px')
const PostAddForm = () => {
  return (
    <Form>
      <Layout display='flex'>
        <Box>
          <Input />{' '}
        </Box>
        <Box flexBasis='40px' />
        <Box>
          <ButtonSubmit />{' '}
        </Box>
      </Layout>
    </Form>
  )
}

export default PostAddForm
