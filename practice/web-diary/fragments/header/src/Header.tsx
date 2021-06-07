import React           from 'react'
import { useIntl }     from 'react-intl'

import { Layout, Row } from '@ui/layout'
import { Text }        from '@ui/text'

import messages        from './messages'

export const Header = () => {
  const intl = useIntl()
  return (
    <Row>
      <Layout flexBasis='20px' />
      <Text fontSize='large' fontWeight='bold' fontFamily='primary'>
        {intl.formatMessage(messages.postList)}
      </Text>
    </Row>
  )
}
