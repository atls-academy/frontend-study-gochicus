import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  postCount: {
    id: `${name}.post_count`,
    defaultMessage: 'записей,',
  },
  likeCount: {
    id: `${name}.like_count`,
    defaultMessage: 'из них понравилось',
  },
})
