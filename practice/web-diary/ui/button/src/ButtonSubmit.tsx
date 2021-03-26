import React       from 'react'
import { useIntl } from 'react-intl'

import messages    from '../messages/messages'

export const ButtonSubmit = () => {
  const intl = useIntl()
  return (
    <button type='submit' className='btn btn-outline-secondary'>
      {intl.formatMessage(messages.add)}
    </button>
  )
}
