import React                           from 'react'
import styled                          from '@emotion/styled'

import ButtonInfo, { ButtonSecondary } from '@ui/button'
import { Box }                         from '@ui/layout'

const Filter = styled.div('margin: 1rem 0;', 'min-width: 180px')

const PostStatusFilter = () => {
  return (
    <Filter>
      <Box display='flex' justifyContent='space-between'>
        <Box>
          <ButtonInfo />{' '}
        </Box>
        <Box>
          {' '}
          <ButtonSecondary />
        </Box>
      </Box>
    </Filter>
  )
}

export default PostStatusFilter
