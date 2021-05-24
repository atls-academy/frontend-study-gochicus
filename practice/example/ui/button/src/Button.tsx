import React from "react";
import styled from "@emotion/styled";
import {baseStyles} from "./Button.styles";
import {ButtonProps} from "./Button.interface";

const  StyledButton = styled.div(baseStyles,)
export  const  Button = (props):ButtonProps => {
  return(
    <StyledButton {...props}></StyledButton>
  )
}