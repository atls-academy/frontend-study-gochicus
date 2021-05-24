import styled from "@emotion/styled";
import {flexbox, layout, position} from "styled-system";

export  const  Row = styled.div(layout,flexbox,position)

Row.defaultProps = {
  display:'flex',
  flexDirection:'row'
}
