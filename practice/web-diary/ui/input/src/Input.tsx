import React  from 'react'
import styled from '@emotion/styled'

const StyledInput = styled('input')(() => ({
  display: 'block',
  width: '100%',
  height: '28px',
  padding: '2px 2px',
  fontSize: '12px',
  color: '#495057',
  backgroundColor: ' #fff',
  backgroundClip: 'padding-box',
  border: '1px solid #ced4da',
  borderRadius: '3px',
}))

export const Input = ({ text }) => {
  return <StyledInput type='text' placeholder={text} />
}
