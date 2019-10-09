import React from "react";

export const SpecialButton = (props) => {
  const showValue = props.function;
  return (
  <button className = "special" onClick = {()=>showValue(0)}>
    {props.yate}
  </button>
  );
};
