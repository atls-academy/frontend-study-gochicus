import React               from 'react'
import { useIntl }         from 'react-intl'

import { Button }          from '@ui/button'
import { Row }             from '@ui/layout'
import { useButtonStatus } from '@store/button-status'
import { usePostData }     from '@store/post-data'

import messages            from '../messages/messages'
import { clearPost }       from '../actions'

export const ClearPost = () => {
  const intl = useIntl()
  const [postData, setPostData] = usePostData()
  const [, setStatus] = useButtonStatus()
  return (
    <Row justifyContent='center'>
      <Button
        color='white'
        minWidth='120px'
        minHeight='40px'
        backgroundColor='purple'
        fontFamily='primary'
        onClick={() => {
          setPostData(clearPost(postData))
          setStatus('')
        }}
      >
        {intl.formatMessage(messages.clear)}
      </Button>
    </Row>
  )
}
