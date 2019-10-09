import React, {useState} from "react";
import {specials} from "../../../data";
import {SpecialButton} from "../SpecialButtons/SpecialButton";
//import any components needed

//Import your array data to from the provided data file

export const Specials = (props) => {
  
const [special, setSpectial] = useState(specials);
const showValue = props.function;
  return (
    <div>

      {special.map((button, index)=>(
        <SpecialButton key = {index} yate = {button} function = {showValue}/>
      ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
