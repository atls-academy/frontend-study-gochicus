import React       from 'react'
import { useIntl } from 'react-intl'

import messages    from '../messages/messages'

export const ButtonInfo = () => {
  const intl = useIntl()
  return (
    <button type='button' className='btn'>
      {intl.formatMessage(messages.info)}
    </button>
  )
}
