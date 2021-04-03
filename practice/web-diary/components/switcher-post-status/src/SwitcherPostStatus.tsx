import React                                        from 'react'
import styled                                       from '@emotion/styled'
import { useIntl }                                  from 'react-intl'
import { border, color, layout, space, typography } from 'styled-system'

import { Button }                                   from '@ui/button'
import { Box }                                      from '@ui/layout'

import messages                                     from '../messages/messages'

const StyledSwitcher = styled<any>('div')(border, color, layout, space, typography)

StyledSwitcher.defaultProps = {
  margin: ' 1rem 0',
  minWidth: '180px',
}

export const SwitcherPostStatus = () => {
  const intl = useIntl()
  return (
    <StyledSwitcher>
      <Box justifyContent='space-between'>
        <Button color='black'> {intl.formatMessage(messages.info)}</Button>
        <Button color='black'> {intl.formatMessage(messages.like)}</Button>
      </Box>
    </StyledSwitcher>
  )
}

export default SwitcherPostStatus
