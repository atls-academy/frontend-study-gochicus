import React      from 'react'

import { Layout } from '@ui/layout'

export const LayoutCondition = ({ match }) => {
  return match ? <Layout flexBasis='20px' /> : <Layout flexBasis='200px' />
}
