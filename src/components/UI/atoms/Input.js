import React from "react";

const Input = (props) => {
  return (
    <input
      value={props.inputValue}
      onChange={props.handleChange}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
    />
  );
};

export default Input;
