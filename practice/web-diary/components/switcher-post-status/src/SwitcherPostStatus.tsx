import React       from 'react'
import { useIntl } from 'react-intl'

import { Button }  from '@ui/button'
import { Row }     from '@ui/layout'

import messages    from '../messages/messages'

export const SwitcherPostStatus = () => {
  const intl = useIntl()
  return (
    <Row minWidth='180px' justifyContent='space-between'>
      <Button color='black'> {intl.formatMessage(messages.all)}</Button>
      <Button color='black'> {intl.formatMessage(messages.like)}</Button>
    </Row>
  )
}
