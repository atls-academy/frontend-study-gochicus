import React                           from 'react'

import ButtonInfo, { ButtonSecondary } from '@ui/button'
import { Box }                         from '@ui/layout'

const PostStatusFilter = () => {
  return (
    <Box display='flex' justifyContent='space-between'>
      <ButtonInfo />
      <ButtonSecondary />
    </Box>
  )
}

export default PostStatusFilter
