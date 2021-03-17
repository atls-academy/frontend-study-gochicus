import '../../web-diary/src/style/src/index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import App from '@app-launcher/app'
import { IntlProvider } from 'react-intl'
const  locale = 'ru'
ReactDOM.render(
  <IntlProvider locale={locale}>
    <App />
  </IntlProvider>,
  document.getElementById('root'),
)
