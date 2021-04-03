import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  info: {
    id: `${name}.switcher`,
    defaultMessage: 'всё',
  },
  like: {
    id: `${name}.switcher`,
    defaultMessage: 'Понравилось',
  },
  add: {
    id: `${name}.switcher`,
    defaultMessage: 'Добавить',
  },
})
