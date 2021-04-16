import React           from 'react'
import { useIntl }     from 'react-intl'

import { Row }         from '@ui/layout'
import { Space, Text } from '@ui/text'

import messages        from '../messages/messages'

const like = 0
const post = 5

export const Header = () => {
  const intl = useIntl()
  return (
    <Row justifyContent='space-between' alignItems='flex-end'>
      <Text fontSize='25px'>{post}</Text>
      <Space />
      <Text fontSize='25px'>{intl.formatMessage(messages.postCount)}</Text>
      <Space />
      <Text fontSize='25px'>{like}</Text>
    </Row>
  )
}
