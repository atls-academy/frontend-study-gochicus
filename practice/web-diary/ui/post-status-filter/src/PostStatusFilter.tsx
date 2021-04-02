import React       from 'react'
import styled      from '@emotion/styled'
import { useIntl } from 'react-intl'

import { Button }  from '@ui/button'
import { Box }     from '@ui/layout'

import messages    from '../messages/messages'

const Filter = styled('div')(() => ({
  margin: ' 1rem 0',
  minWidth: '180px',
}))

const PostStatusFilter = () => {
  const intl = useIntl()
  return (
    <Filter>
      <Box justifyContent='space-between'>
        <Button color='black'> {intl.formatMessage(messages.info)}</Button>
        <Button color='black'> {intl.formatMessage(messages.like)}</Button>
      </Box>
    </Filter>
  )
}

export default PostStatusFilter
