import React                from 'react'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Input }            from '@ui/input'
import { Box, Layout, Row } from '@ui/layout'
import { useButtonStatus }  from '@store/button-status'
import { useSearchValue }   from '@store/search-status'

import messages             from '../messages/messages'

export const SwitcherPostStatus = () => {
  const intl = useIntl()
  const [status, setStatus] = useButtonStatus()
  const [, setSearchValue] = useSearchValue()

  return (
    <Box justifyContent='center'>
      <Row maxWidth='450px'>
        <Input
          minWidth='100px'
          placeholder={intl.formatMessage(messages.search)}
          onChange={event => {
            setStatus('search')
            setSearchValue(event.target.value)
          }}
        />
        <Layout flexBasis='10px' />
        <Button
          minWidth='50px'
          minHeight='40px'
          color={status === 'all' ? 'purple' : 'white'}
          fontFamily='primary'
          backgroundColor={status === 'all' ? 'white' : 'purple'}
          onClick={() => setStatus('all')}
        >
          {intl.formatMessage(messages.all)}
        </Button>
        <Layout flexBasis='15px' />
        <Button
          minWidth='50px'
          minHeight='40px'
          color={status === 'like' ? 'purple' : 'white'}
          fontFamily='primary'
          backgroundColor={status === 'like' ? 'white' : 'purple'}
          onClick={() => setStatus('like')}
        >
          {intl.formatMessage(messages.like)}
        </Button>
        <Layout flexBasis='15px' />
        <Button
          minWidth='50px'
          minHeight='40px'
          color={status === 'important' ? 'purple' : 'white'}
          fontFamily='primary'
          backgroundColor={status === 'important' ? 'white' : 'purple'}
          onClick={() => setStatus('important')}
        >
          {intl.formatMessage(messages.important)}
        </Button>
      </Row>
    </Box>
  )
}
