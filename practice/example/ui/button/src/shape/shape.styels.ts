import { styleFn }                                          from 'styled-system'
import {ShapeInterface} from "./shape.interface";

export  const  createBaseShape = (size:number|string):styleFn=> () => ({
  height:size
})

export const  createBorderStyles =(borderStyle:string,borderRadius:string|number,borderWeight:string|number):styleFn => () => ({
  borderStyle,
  borderRadius,
  borderWeight
})
export const  creatShapeStyles = ({size,borderStyle,borderRadius,borderWeight}:ShapeInterface):styleFn => ()=> ({
  ...createBaseShape(size)(),
  ...createBorderStyles(borderStyle,borderRadius,borderWeight)()
})