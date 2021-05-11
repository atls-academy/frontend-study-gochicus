import React           from 'react'
import { useIntl }     from 'react-intl'

import { Box }         from '@ui/layout'
import { Space, Text } from '@ui/text'
import { usePostData } from '@store/post-data'

import messages        from '../messages/messages'

export const CountPost = () => {
  const [postData] = usePostData()
  const intl = useIntl()
  return (
    <Box alignItems='center'>
      <Text>{intl.formatMessage(messages.messageCount)} </Text>
      <Space />
      <Text fontSize='small'>{postData.length}</Text>
    </Box>
  )
}
