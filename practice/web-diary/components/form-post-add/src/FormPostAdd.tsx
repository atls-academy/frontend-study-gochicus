import React           from 'react'
import { useIntl }     from 'react-intl'

import { Button }      from '@ui/button'
import { Input }       from '@ui/input'
import { Box, Layout } from '@ui/layout'

import messages        from '../messages/messages'

export const FormPostAdd = () => {
  const intl = useIntl()
  return (
    <Layout justifyContent='space-between' minWidth='400px'>
      <Box>
        <Input placeholder={intl.formatMessage(messages.yourPost)} />
      </Box>
      <Box>
        <Button color='black'>{intl.formatMessage(messages.add)}</Button>
      </Box>
      <Layout flexBasis='70px' />
    </Layout>
  )
}
