import '../../../style/src/app-header.css'

import React from 'react'

import { Layout } from '@ui/layout'

import messages from '../messages/messages'

const AppHeader = (className, { intl }) => {
  let stringOfNames = ''
  className.forEach((name) => {
    stringOfNames += `${name}`
  })
  return (
    <Layout className={stringOfNames}>
      <h2>{intl.formatMessage(messages.header)}</h2>
    </Layout>
  )
}

export default AppHeader
