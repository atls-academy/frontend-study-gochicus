import React             from 'react'
import styled            from '@emotion/styled'
import { layout, space } from 'styled-system'

import { ListItem }      from './ListItem'

const StyledList = styled('div')(layout, space)

StyledList.defaultProps = {
  marginTop: '10px',
  padding: '20px 35px 10px 35px',
  minWidth: '300px',
}

export const List: any = ({ data }: any) => {
  return data.map(item => (
    <StyledList key={item.id}>
      <ListItem content={item.post} />
    </StyledList>
  ))
}
