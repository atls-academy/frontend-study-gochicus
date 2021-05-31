import React      from 'react'

import { Layout } from '../../layout'

export const Condition = ({ match, children }) => {
  return match ? children : <Layout flexBasis='200px' />
}
