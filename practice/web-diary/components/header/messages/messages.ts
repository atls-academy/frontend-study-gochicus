import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  headerPostCount: {
    id: `${name}.headerPostCount`,
    defaultMessage: ' записей, ',
  },
  headerLikeCount: {
    id: `${name}.headerLikeCount`,
    defaultMessage: 'из них понравилось ',
  },
})
