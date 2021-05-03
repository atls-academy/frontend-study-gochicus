import React                from 'react'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Input }            from '@ui/input'
import { Box, Layout, Row } from '@ui/layout'
import { useButtonStatus }  from '@store/button-status'
import { useSearchValue }   from '@store/search-status'

import messages             from '../messages/messages'

export const SwitcherPostStatus = ({ theme }) => {
  const intl = useIntl()
  const [, setStatus] = useButtonStatus()
  const [, setSearchValue] = useSearchValue()

  return (
    <Box justifyContent='space-between' alignItems='center' minWidth={theme.minWidth.big}>
      <Row minWidth={theme.minWidth.normalPlus} justifyContent='space-between'>
        <Input
          placeholder={intl.formatMessage(messages.search)}
          onChange={event => {
            setStatus('search')
            setSearchValue(event.target.value)
          }}
        />
        <Layout flexBasis={theme.indent.small} />
        <Button color={theme.color.black} onClick={() => setStatus('all')}>
          {intl.formatMessage(messages.all)}
        </Button>
        <Layout flexBasis={theme.indent.small} />
        <Button color={theme.color.black} onClick={() => setStatus('like')}>
          {intl.formatMessage(messages.like)}
        </Button>
        <Layout flexBasis={theme.indent.small} />
        <Button color={theme.color.black} onClick={() => setStatus('important')}>
          {intl.formatMessage(messages.important)}
        </Button>
      </Row>
    </Box>
  )
}
