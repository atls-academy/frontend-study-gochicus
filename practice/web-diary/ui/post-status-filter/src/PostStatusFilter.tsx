import React            from 'react'
import styled           from '@emotion/styled'
import { useIntl }      from 'react-intl'

import { CommonButton } from '@ui/button'
import { Box }          from '@ui/layout'

import messages         from '../../post-add-form/messages/messages'

const Filter = styled.div('margin: 1rem 0;', 'min-width: 180px')

const PostStatusFilter = () => {
  const intl = useIntl()
  return (
    <Filter>
      <Box display='flex' justifyContent='space-between'>
        <CommonButton> {intl.formatMessage(messages.info)}</CommonButton>
        <CommonButton> {intl.formatMessage(messages.like)}</CommonButton>
      </Box>
    </Filter>
  )
}

export default PostStatusFilter
