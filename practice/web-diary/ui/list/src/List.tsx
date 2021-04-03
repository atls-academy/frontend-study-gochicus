import React        from 'react'
import styled       from '@emotion/styled'

import { ListItem } from './ListItem'

const StyledList = styled('div')(() => ({
  marginTop: '10px',
  padding: '20px 35px 10px 35px',
  minWidth: '300px',
}))

export const List: any = ({ data }: any) => {
  const elements = data.map((item: any) => {
    return (
      <StyledList key={item.id}>
        <ListItem content={item.post} />
      </StyledList>
    )
  })
  return elements
}
