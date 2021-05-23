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
      <Row justifyContent='center' maxWidth='328px'>
        <Input
          fontSize='14px'
          padding='6px 10px'
          minWidth='100px'
          placeholder={intl.formatMessage(messages.search)}
          onChange={event => {
            setStatus('search')
            setSearchValue(event.target.value)
          }}
        />
        <Layout flexBasis='5px' />
        <Button
          color={status === 'all' ? 'purple' : 'white'}
          backgroundColor={status === 'all' ? 'white' : 'purple'}
          onClick={() => setStatus('all')}
        >
          <Text marginLeft='2px'>{intl.formatMessage(messages.all)}</Text>
        </Button>
        <Layout flexBasis='5px' />
        <Button
          color={status === 'like' ? 'purple' : 'white'}
          backgroundColor={status === 'like' ? 'white' : 'purple'}
          onClick={() => setStatus('like')}
        >
          <Text paddingLeft='10px'>{intl.formatMessage(messages.like)}</Text>
        </Button>
        <Layout flexBasis='5px' />
        <Button
          color={status === 'important' ? 'purple' : 'white'}
          backgroundColor={status === 'important' ? 'white' : 'purple'}
          onClick={() => setStatus('important')}
        >
          <Text> {intl.formatMessage(messages.important)}</Text>
        </Button>
      </Row>
      <Layout flexBasis='25px' />
      <Row justifyContent='space-between'>
        <Box alignItems='center' minWidth='80px'>
          <Layout flexBasis='5px' />
          <Text padding='0px' fontSize='basic'>
            {intl.formatMessage(messages.messageCount)}
          </Text>
          <Space />
          <Text padding='0px' fontSize='basic'>
            {postData.length}
          </Text>
        </Box>
        <Button
          color='white'
          minWidth='120px'
          minHeight='40px'
          backgroundColor='purple'
          onClick={() => {
            setPostData([])
            setStatus('')
          }}
        >
          <Text margin='5px 20px' fontSize='basic' padding='0px'>
            {intl.formatMessage(messages.clear)}
          </Text>
        </Button>
      </Row>
    </Column>
  )
}
