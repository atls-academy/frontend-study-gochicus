import React           from 'react'
import { useIntl }     from 'react-intl'

import { Button }      from '@ui/button'
import { Input }       from '@ui/input'
import { Box, Layout } from '@ui/layout'

import messages        from '../messages/messages'

export const FormPostAdd = () => {
  const intl = useIntl()
  return (
    <Box margin='14px 0' minWidth='300px'>
      <Layout>
        <Box>
          <Input placeholder={intl.formatMessage(messages.yourPost)} />
        </Box>
        <Box flexBasis='40px' />
        <Box>
          <Button color='black'>{intl.formatMessage(messages.add)}</Button>
        </Box>
      </Layout>
    </Box>
  )
}
