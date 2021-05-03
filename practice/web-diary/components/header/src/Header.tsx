import React               from 'react'
import { useIntl }         from 'react-intl'

import { Row }             from '@ui/layout'
import { Space, Text }     from '@ui/text'
import { usePostData }     from '@store/post-data'
import { theme }           from '@ui/theme'

import messages            from '../messages/messages'
import { favouredCounter } from '../actions'

export const Header = () => {
  const intl = useIntl()
  const [postData] = usePostData()
  return (
    <Row justifyContent='space-between' alignItems='flex-end'>
      <Text fontSize={theme.fontSize.standard}>{postData.length}</Text>
      <Space />
      <Text fontSize={theme.fontSize.standard}>{intl.formatMessage(messages.postCount)}</Text>
      <Space />
      <Text fontSize={theme.fontSize.standard}>{favouredCounter(postData)}</Text>
    </Row>
  )
}
