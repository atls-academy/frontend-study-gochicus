import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  add: {
    id: `${name}.add`,
    defaultMessage: 'Добавить',
  },
  yourPost: {
    id: `${name}.your_post`,
    defaultMessage: 'Ваша запись',
  },
})
