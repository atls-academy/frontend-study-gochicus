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
    <Column>
      <Row justifyContent='center' maxWidth='450px'>
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
          padding='5px'
          color={status === 'important' ? 'purple' : 'white'}
          fontFamily='primary'
          backgroundColor={status === 'important' ? 'white' : 'purple'}
          onClick={() => setStatus('important')}
        >
          {intl.formatMessage(messages.important)}
        </Button>
      </Row>
      <Layout flexBasis='25px' />
      <Row justifyContent='space-between'>
        <Box alignItems='center' minWidth='80px'>
          <Layout flexBasis='5px' />
          <Text>{intl.formatMessage(messages.messageCount)}</Text>
          <Space />
          <Text fontSize='small'>{postData.length}</Text>
        </Box>
        <Button
          color='white'
          minWidth='120px'
          minHeight='40px'
          backgroundColor='purple'
          fontFamily='primary'
          onClick={() => {
            setPostData([])
            setStatus('')
          }}
        >
          {intl.formatMessage(messages.clear)}
        </Button>
      </Row>
    </Column>
  )
}
