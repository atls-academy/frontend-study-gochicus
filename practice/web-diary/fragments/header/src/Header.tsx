import React       from 'react'
import { useIntl } from 'react-intl'

import { Box }     from '@ui/layout'
import { Text }    from '@ui/text'

import messages    from './messages'

export const Header = () => {
  const intl = useIntl()
  return (
    <Box width='100%'>
      <Text fontSize='large' fontWeight='bold' fontFamily='primary'>
        {intl.formatMessage(messages.postList)}
      </Text>
    </Box>
  )
}
