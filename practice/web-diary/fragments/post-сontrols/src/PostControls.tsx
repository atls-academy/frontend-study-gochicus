import React                        from 'react'
import { useIntl }                  from 'react-intl'

import { Button }                   from '@ui/button'
import { Input }                    from '@ui/input'
import { Box, Column, Layout, Row } from '@ui/layout'
import { Space, Text }              from '@ui/text'
import { useButtonStatus }          from '@store/button-status'
import { usePostData }              from '@store/post-data'
import { useSearchValue }           from '@store/search-status'

import messages                     from './messages'

export const PostControls = () => {
  const intl = useIntl()
  const [status, setStatus] = useButtonStatus()
  const [, setSearchValue] = useSearchValue()
  const [postData, setPostData] = usePostData()
  return (
    <Column width={'88%'}>
      <Row justifyContent='center' >
        <Input
          size={30}
          placeholder={intl.formatMessage(messages.search)}
          onChange={event => {
            setStatus('search')
            setSearchValue(event.target.value)
          }}
        />
        <Layout flexBasis='8px' />
        <Button
          color={status === 'all' ? 'purple' : 'white'}
          onClick={() => setStatus('all')}
        >
          <Text >{intl.formatMessage(messages.all)}</Text>
        </Button>
        <Layout flexBasis='8px' />
        <Button
          color={status === 'like' ? 'purple' : 'white'}
          onClick={() => setStatus('like')}
        >
          <Text paddingLeft='10px'>{intl.formatMessage(messages.like)}</Text>
        </Button>
        <Layout flexBasis='8px' />
        <Button
          color={status === 'important' ? 'purple' : 'white'}
          onClick={() => setStatus('important')}
        >
          <Text> {intl.formatMessage(messages.important)}</Text>
        </Button>
      </Row>
      <Layout flexBasis='25px' />
      <Row justifyContent='space-between'>
        <Box alignItems='center' minWidth='80px'>
          <Layout flexBasis='5px' />
          <Text padding='0px' fontSize='small'>
            {intl.formatMessage(messages.messageCount)}
          </Text>
          <Space />
          <Text padding='0px' fontSize='small'>
            {postData.length}
          </Text>
        </Box>
        <Button
          onClick={() => {
            setPostData([])
            setStatus('')
          }}
        >
          <Text color='white' fontSize='small' >
            {intl.formatMessage(messages.clear)}
          </Text>
        </Button>
      </Row>
    </Column>
  )
}
