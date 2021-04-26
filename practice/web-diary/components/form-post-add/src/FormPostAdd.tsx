import React, { useState }  from 'react'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Input }            from '@ui/input'
import { Box, Layout, Row } from '@ui/layout'

import messages             from '../messages/messages'
// import { idCount } from '../../../app/actions/src'
import { addItem }          from '../actions/src/addItem'

export const FormPostAdd = () => {
  const intl = useIntl()
  const [defaultData, setData] = useState([
    // { post: 'yesterday', id: idCount() },
    // { post: 'today', id: idCount() },
    // { post: 'tomorrow', id: idCount() },
  ])
  const [defaultPost, setPost] = useState('default')
  return (
    <Row justifyContent='space-between' minWidth='400px'>
      <Box>
        <Input
          placeholder={intl.formatMessage(messages.yourPost)}
          onChange={event => setPost(event.target.value)}
          value={defaultPost}
        />
      </Box>
      <Box>
        <Button
          color='black'
          onClick={() => {
            setData(addItem(defaultData, defaultPost))
            setPost('')
          }}
        >
          {intl.formatMessage(messages.add)}
        </Button>
      </Box>
      <Layout flexBasis='70px' />
    </Row>
  )
}
