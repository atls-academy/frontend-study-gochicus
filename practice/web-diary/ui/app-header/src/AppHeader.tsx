import React       from 'react'
import { useIntl } from 'react-intl'

import { Box }     from '@ui/layout'

import messages    from '../messages/messages'

const AppHeader = () => {
  const intl = useIntl()
  return (
    <Box justifyContent='space-between' alignItems='flex-end' display='flex'>
      <h2>{intl.formatMessage(messages.header)}</h2>
    </Box>
  )
}

export default AppHeader
