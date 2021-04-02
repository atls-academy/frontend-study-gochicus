import React            from 'react'
import styled           from '@emotion/styled'
import { useIntl }      from 'react-intl'

import { CommonButton } from '@ui/button'
import { Input }        from '@ui/input'
import { Box, Layout }  from '@ui/layout'

import messages         from '../messages/messages'

const Form = styled('div')(() => ({
  margin: '1rem 0',
  minWidth: '300px',
}))

const PostAddForm = () => {
  const intl = useIntl()
  return (
    <Form>
      <Layout display='flex'>
        <Box>
          <Input placeholder='Ваша запись' display='block' />
        </Box>
        <Box flexBasis='40px' />
        <Box>
          <CommonButton color='black'>{intl.formatMessage(messages.add)}</CommonButton>
        </Box>
      </Layout>
    </Form>
  )
}

export default PostAddForm
