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
    <Column width='100%'>
      <Row justifyContent='center'>
        <Box width='60%'>
          <Input
            size='big'
            placeholder={intl.formatMessage(messages.search)}
            onChange={event => {
              setStatus('search')
              setSearchValue(event.target.value)
            }}
          />
        </Box>
        <Layout flexBasis='8px' />
        <Button
          width='50px'
          color={status === 'all' ? 'white' : 'purple'}
          onClick={() => setStatus('all')}
        >
          <Text>{intl.formatMessage(messages.all)}</Text>
        </Button>
        <Layout flexBasis='3px' />
        <Button
          width='50px'
          color={status === 'like' ? 'white' : 'purple'}
          onClick={() => setStatus('like')}
        >
          <Text>{intl.formatMessage(messages.like)}</Text>
        </Button>
        <Layout flexBasis='3px' />
        <Button
          width='50px'
          color={status === 'important' ? 'white' : 'purple'}
          onClick={() => setStatus('important')}
        >
          <Text> {intl.formatMessage(messages.important)}</Text>
        </Button>
      </Row>
      <Layout flexBasis='25px' />
      <Row justifyContent='space-between'>
        <Box alignItems='center'>
          <Layout flexBasis='5px' />
          <Text fontSize='small'>{intl.formatMessage(messages.messageCount)}</Text>
          <Space />
          <Text fontSize='small'>{postData.length}</Text>
        </Box>
        <Box>
          <Button
            width='80px'
            onClick={() => {
              setPostData([])
              setStatus('')
            }}
          >
            <Text color='white' fontSize='small'>
              {intl.formatMessage(messages.clear)}
            </Text>
          </Button>
        </Box>
      </Row>
    </Column>
  )
}
