import React from 'react'

import ButtonInfo, { ButtonSecondary } from '@ui/button'

import messages from '../../button/messages/messages'
import { Layout } from '../../layout'

const PostStatusFilter = ({ intl }) => {
  return (
    <Layout className='btn-group'>
      <ButtonInfo {...intl.formatMessage(messages.info)} />
      <ButtonSecondary {...intl.formatMessage(messages.like)} />
    </Layout>
  )
}

export default PostStatusFilter
