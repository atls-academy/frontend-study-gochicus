import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  messageCount: {
    id: `${name}.message_count`,
    defaultMessage: 'Записей:',
  },
})
