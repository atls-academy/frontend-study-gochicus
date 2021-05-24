import { styleFn } from 'styled-system'

export  const createBaseStyles = ():styleFn => () => ({
  cursor:'pointer',
  width:'100%',
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
})