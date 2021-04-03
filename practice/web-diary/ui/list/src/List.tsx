import React             from 'react'
import styled            from '@emotion/styled'
import { layout, space } from 'styled-system'

import { ListItem }      from './ListItem'

const StyledList = styled<any>('div')(layout, space)

StyledList.defaultProps = {
  marginTop: '10px',
  padding: '20px 35px 10px 35px',
  minWidth: '300px',
  fontFamily: ' -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen"',
}

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
