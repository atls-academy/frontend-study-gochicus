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
          <Input
            placeholder='Ваша запись'
            style={{
              height: '28px',
              padding: '2px 2px',
              border: '1px solid #ced4da',
              borderRadius: '3px',
            }}
          />
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
