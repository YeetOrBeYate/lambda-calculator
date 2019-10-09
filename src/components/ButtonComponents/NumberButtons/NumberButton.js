import React from "react";

 export const NumberButton = (props) => {

  const setDisplay = props.function;

  return (
    
    <button className = "number" onClick = {()=>setDisplay(props.button)}>
      {props.button}
    </button>
      
    
  );
};

