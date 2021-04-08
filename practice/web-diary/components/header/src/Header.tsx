import React       from 'react'
import { useIntl } from 'react-intl'

import { Box }     from '@ui/layout'
import { Text }    from '@ui/text'

import messages    from '../messages/messages'

export const Header = ({ post, like }) => {
  const intl = useIntl()
  return (
    <Box justifyContent='space-between' alignItems='flex-end' display='flex'>
      <Text fontSize='25px'>
        {post}
        {intl.formatMessage(messages.headerPostCount)}
        {intl.formatMessage(messages.headerLikeCount)}
        {like}
      </Text>
    </Box>
  )
}
