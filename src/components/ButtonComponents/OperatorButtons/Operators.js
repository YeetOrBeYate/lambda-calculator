import React, {useState} from "react";
import {operators} from "../../../data";
import {OperatorButton} from "../OperatorButtons/OperatorButton";
//import any components needed

//Import your array data to from the provided data file

 export const Operators = () => {
  const [Operators, setOperators] = useState(operators);
  return (
    <div>
      {Operators.map((button, index)=>(
        <OperatorButton key = {index} yeet = {button} />
      ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
