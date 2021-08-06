import { injectGlobal } from '@emotion/css'

export const injectGlobalStyles = () =>
  injectGlobal({
    'body,html': {
      padding: 0,
      margin: 0,
      overflow: 'hidden',
      fontFamily: 'Gordita, sans-serif',
      height: '100%',
    },
    '#root': {
      height: '100%',
    },
    '#__next': {
      height: '100%',
    },
  })
