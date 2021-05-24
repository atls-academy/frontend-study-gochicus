import React from "react";
import styled from "@emotion/styled";
import {layout, flexbox, position} from "styled-system";

export  const  Box = styled.div(layout,flexbox,position)

Box.defaultProps = {
  display:'flex',
  boxSizing: 'border-box',
}