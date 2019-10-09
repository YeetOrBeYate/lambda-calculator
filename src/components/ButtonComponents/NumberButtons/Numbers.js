import React, {useState} from "react";
import {numbers} from "../../../data";
import {NumberButton} from "../NumberButtons/NumberButton";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

export const Numbers = (props) => {
  const setDisplay = props.function;
  const [numberState, setNumberState]= useState(numbers);
  return (
    <div className = "numberContainer">
      {numberState.map((button, index)=>(
        <NumberButton key = {index} button = {button} function = {setDisplay} />
      ))}
    </div>
  );
};


