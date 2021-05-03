import React, { useState }  from 'react'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Input }            from '@ui/input'
import { Box, Layout, Row } from '@ui/layout'
import { usePostData }      from '@store/post-data'

import messages             from '../messages/messages'
import { addItem }          from '../actions'

export const FormPostAdd = ({ theme }) => {
  const intl = useIntl()
  const [postData, setPostData] = usePostData()
  const [value, setValue] = useState('')
  return (
    <Row justifyContent='space-between' minWidth={theme.minWidth.normalPlus}>
      <Box>
        <Input
          placeholder={intl.formatMessage(messages.yourPost)}
          onChange={event => setValue(event.target.value)}
          value={value}
        />
      </Box>
      <Box>
        <Button
          color={theme.color.black}
          onClick={() => {
            setPostData(addItem(postData, value))
            setValue('')
          }}
        >
          {intl.formatMessage(messages.add)}
        </Button>
      </Box>
      <Layout flexBasis={theme.indent.big} />
    </Row>
  )
}
