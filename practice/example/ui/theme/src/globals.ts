import { injectGlobal } from '@emotion/css'

export const injectGlobalStyles = () =>
  injectGlobal({
    html: {
      padding: 0,
      margin: 0,
    },
  })
