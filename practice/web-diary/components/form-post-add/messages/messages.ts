import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  add: {
    id: `${name}.add`,
    defaultMessage: '+',
  },
  yourPost: {
    id: `${name}.your_post`,
    defaultMessage: 'Your message',
  },
})
