import React from "react";
import {Button} from "@ex-ui/button";

const colors = []
export const ColorPicker = ()=>colors.forEach(item=><Button backgroundColor={item}></Button>)