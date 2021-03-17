import React from 'react'

import messages from '../messages/messages'

export const ButtonInfo = ({ intl }) => {
  return (
    <button type='button' className='btn'>
      {intl.formatMessage(messages.info)}
    </button>
  )
}
