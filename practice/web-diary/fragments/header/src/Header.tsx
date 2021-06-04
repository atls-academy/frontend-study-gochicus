import React       from 'react'
import { useIntl } from 'react-intl'

import { Row }     from '@ui/layout'
import { Text }    from '@ui/text'

import messages    from './messages'

export const Header = () => {
  const intl = useIntl()
  return (
    <Row>
      <Text paddingLeft='15px' fontSize='large' fontWeight='bold' fontFamily='primary'>
        {intl.formatMessage(messages.postList)}
      </Text>
    </Row>
  )
}
