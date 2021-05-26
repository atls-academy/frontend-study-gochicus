import { injectGlobal } from '@emotion/css'

export const injectGlobalStyles = () =>
  injectGlobal({
    'html,body': {
      padding: 0,
      margin: 0,
      display: 'flex',
      height: '100%',
      width: '100%',
    },
    '#root': {
      height: '100%',
      width: '100%',
    },
  })
