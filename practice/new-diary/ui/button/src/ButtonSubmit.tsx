import React from 'react'

import messages from '../messages/messages'

export const ButtonSubmit = (className, { intl }) => {
  return (
    <button type='submit' className='btn btn-outline-secondary'>
      {intl.formatMessage(messages.add)}
    </button>
  )
}
