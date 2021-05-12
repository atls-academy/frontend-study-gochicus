import React, { useState }  from 'react'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Input }            from '@ui/input'
import { Box, Layout, Row } from '@ui/layout'
import { usePostData }      from '@store/post-data'

import messages             from '../messages/messages'
import { addItem }          from '../actions'

export const FormPostAdd = () => {
  const intl = useIntl()
  const [postData, setPostData] = usePostData()
  const [value, setValue] = useState('')
  return (
    <Row justifyContent='flex-start' minWidth='380px'>
      <Layout flexBasis='25px' />
      <Box>
        <Input
          minWidth='252px'
          maxWidth='252px'
          placeholder={intl.formatMessage(messages.yourPost)}
          onChange={event => setValue(event.target.value)}
          value={value}
        />
      </Box>
      <Layout flexBasis='5px' />
      <Box>
        <Button
          backgroundColor='defaultPurple'
          minWidth='50px'
          fontSize='large'
          fontWeight='bold'
          color='white'
          onClick={() => {
            setPostData(addItem(postData, value))
            setValue('')
          }}
        >
          {intl.formatMessage(messages.add)}
        </Button>
      </Box>
      <Layout flexBasis='15px' />
    </Row>
  )
}
