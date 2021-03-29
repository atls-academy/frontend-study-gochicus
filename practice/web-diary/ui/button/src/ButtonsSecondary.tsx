import React       from 'react'
import { useIntl } from 'react-intl'

import messages    from '../messages/messages'

export const ButtonSecondary = () => {
  const intl = useIntl()
  return <button type='button'>{intl.formatMessage(messages.like)}</button>
}
