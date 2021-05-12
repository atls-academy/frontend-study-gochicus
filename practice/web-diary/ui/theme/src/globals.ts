import { injectGlobal } from '@emotion/css'

export const injectGlobalStyles = () =>
  injectGlobal({
    '*': {
      padding: 0,
      margin: 0,
      overflow: 'hidden',
    },
    button: {
      cursor: 'pointer',
    },
  })
