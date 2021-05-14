import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  all: {
    id: `${name}.all`,
    defaultMessage: 'all',
  },
  like: {
    id: `${name}.like`,
    defaultMessage: 'liked',
  },
  search: {
    id: `${name}.search`,
    defaultMessage: 'Search',
  },
  important: {
    id: `${name}.important`,
    defaultMessage: '!',
  },
})
