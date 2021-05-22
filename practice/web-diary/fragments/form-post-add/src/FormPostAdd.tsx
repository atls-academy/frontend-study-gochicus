import React, { useEffect, useState } from 'react'
import { useIntl }                    from 'react-intl'

import { Button }                     from '@ui/button'
import { Input }                      from '@ui/input'
import { Layout, Row }                from '@ui/layout'
import { useButtonStatus }            from '@store/button-status'
import { usePostData }                from '@store/post-data'

import messages                       from './messages'
import { addItem, fetchInitialData }  from './actions'

export const FormPostAdd = () => {
  const intl = useIntl()
  const [, setStatus] = useButtonStatus()
  const [postData, setPostData] = usePostData()
  const [value, setValue] = useState('')
  useEffect(() => {
    setPostData(fetchInitialData())
  }, [])
  return (
    <Row justifyContent='flex-start' minWidth='380px'>
      <Layout flexBasis='25px' />
      <Input
        minWidth='252px'
        placeholder={intl.formatMessage(messages.yourPost)}
        onChange={event => setValue(event.target.value)}
        value={value}
      />
      <Layout flexBasis='5px' />
      <Button
        backgroundColor='purple'
        minWidth='50px'
        fontSize='large'
        fontWeight='bold'
        color='white'
        onClick={() => {
          setPostData(addItem(postData, value))
          setValue('')
          setStatus('all')
        }}
      >
        {intl.formatMessage(messages.add)}
      </Button>
      <Layout flexBasis='15px' />
    </Row>
  )
}
