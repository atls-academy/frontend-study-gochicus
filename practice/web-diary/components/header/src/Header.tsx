import React       from 'react'
import { useIntl } from 'react-intl'

import { Box }     from '@ui/layout'
import { Text }    from '@ui/text'

import messages    from '../messages/messages'

const like = 0
const post = 5

export const Header = () => {
  const intl = useIntl()
  return (
    <Box justifyContent='space-between' alignItems='flex-end'>
      <Text fontSize='25px'>
        {post}
        {intl.formatMessage(messages.postCount)}
        {intl.formatMessage(messages.likeCount)}
        {like}
      </Text>
    </Box>
  )
}
