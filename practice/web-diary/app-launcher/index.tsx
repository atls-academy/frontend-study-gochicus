import React            from 'react'
import ReactDOM         from 'react-dom'
import { IntlProvider } from 'react-intl'

import { App }          from '@app-launcher/app'

const locale = 'ru'
ReactDOM.render(
  <IntlProvider locale={locale}>
    <App />
  </IntlProvider>,
  document.getElementById('root'),
)
