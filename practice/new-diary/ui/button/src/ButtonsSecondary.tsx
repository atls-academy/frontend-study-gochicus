import React from 'react'

import messages from '../messages/messages'

export const ButtonSecondary = ({ intl }) => {
  return (
    <button type='button' className='btn btn-outline-secondary'>
      {intl.formatMessage(messages.like)}
    </button>
  )
}
