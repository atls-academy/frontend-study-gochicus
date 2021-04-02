import React       from 'react'
import { useIntl } from 'react-intl'

import { Box }     from '@ui/layout'
import { Text }    from '@ui/text'

import messages    from '../messages/messages'

const AppHeader = () => {
  const intl = useIntl()
  return (
    <Box justifyContent='space-between' alignItems='flex-end' display='flex'>
      <Text fontSize='25px'>{intl.formatMessage(messages.header)}</Text>
    </Box>
  )
}

export default AppHeader
