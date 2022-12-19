import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.handleClick} type={props.type}>
      <i className={props.icon}>{props.text}</i>
    </button>
  );
};

export default Button;
