import React            from 'react'
import ReactDOM         from 'react-dom'
import { IntlProvider } from 'react-intl'

import { App }          from './src'

ReactDOM.render(
  <IntlProvider locale='en'>
    <App />
  </IntlProvider>,
  document.getElementById('root'),
)
