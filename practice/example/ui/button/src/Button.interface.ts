import {ButtonHTMLAttributes} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<any>{
  backgroundColor:string,
  borderColor?:string
}