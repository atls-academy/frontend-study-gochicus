import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  headerPostCount: {
    id: `${name}.header`,
    defaultMessage: ' записей, ',
  },
  headerLikeCount: {
    id: `${name}.header`,
    defaultMessage: 'из них понравилось ',
  },
})
