import React from "react";

export const OperatorButton = (props) => {
  return (
    <button className = "operator">
      {/* after props, you can put whatever you want to name it */}
      {props.yeet.char}
    </button>
  );
};
