import { injectGlobal } from '@emotion/css'

export const injectGlobalStyles = () =>
  injectGlobal({
    '*': {
      padding: 0,
      margin: 0,
      overflow: 'hidden',
    },
    button: {
      padding: 0,
      outline: 'none',
      color: 'inherit',
      backgroundColor: 'transparent',
    },
  })
