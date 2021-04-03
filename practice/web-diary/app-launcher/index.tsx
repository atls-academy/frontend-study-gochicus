import React            from 'react'
import ReactDOM         from 'react-dom'
import { IntlProvider } from 'react-intl'

import { App }          from '@web-diary/app'

const locale = 'ru'
ReactDOM.render(
  <IntlProvider locale={locale}>
    <App />
  </IntlProvider>,
  document.getElementById('root'),
)
