import React               from 'react'
import { useTheme }        from '@emotion/react'
import { useIntl }         from 'react-intl'

import { Row }             from '@ui/layout'
import { Space, Text }     from '@ui/text'
import { usePostData }     from '@store/post-data'

import messages            from '../messages/messages'
import { favouredCounter } from '../actions'

export const Header = () => {
  const theme: any = useTheme()
  const intl = useIntl()
  const [postData] = usePostData()
  return (
    <Row justifyContent='space-between' alignItems='flex-end'>
      <Text fontSize={theme.fontSize.basic}>{postData.length}</Text>
      <Space />
      <Text fontSize={theme.fontSize.basic}>{intl.formatMessage(messages.postCount)}</Text>
      <Space />
      <Text fontSize={theme.fontSize.basic}>{favouredCounter(postData)}</Text>
    </Row>
  )
}
