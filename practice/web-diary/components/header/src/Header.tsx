import React       from 'react'
import { useIntl } from 'react-intl'

import { Row }     from '@ui/layout'
import { Text }    from '@ui/text'

import messages    from '../messages/messages'

export const Header = () => {
  const intl = useIntl()
  return (
    <Row minWidth='320px'>
      <Text fontSize='large' fontWeight='bold'>
        {intl.formatMessage(messages.postList)}
      </Text>
    </Row>
  )
}
