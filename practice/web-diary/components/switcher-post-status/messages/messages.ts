import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  info: {
    id: `${name}.info`,
    defaultMessage: 'всё',
  },
  like: {
    id: `${name}.like`,
    defaultMessage: 'Понравилось',
  },
  add: {
    id: `${name}.add`,
    defaultMessage: 'Добавить',
  },
})
