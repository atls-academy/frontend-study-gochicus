import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  postCount: {
    id: `${name}.post_count`,
    defaultMessage: 'записей, из них понравилось',
  },
})
