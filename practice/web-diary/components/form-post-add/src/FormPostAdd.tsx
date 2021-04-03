import React                                        from 'react'
import styled                                       from '@emotion/styled'
import { useIntl }                                  from 'react-intl'
import { border, color, layout, space, typography } from 'styled-system'

import { Button }                                   from '@ui/button'
import { Input }                                    from '@ui/input'
import { Box, Layout }                              from '@ui/layout'

import messages                                     from '../messages/messages'

const StyledForm = styled<any>('div')(border, color, layout, space, typography)

StyledForm.defaultProps = {
  margin: '1rem 0',
  minWidth: '300px',
}

export const FormPostAdd = () => {
  const intl = useIntl()
  return (
    <StyledForm>
      <Layout display='flex'>
        <Box>
          <Input placeholder='Ваша запись' />
        </Box>
        <Box flexBasis='40px' />
        <Box>
          <Button color='black'>{intl.formatMessage(messages.add)}</Button>
        </Box>
      </Layout>
    </StyledForm>
  )
}
