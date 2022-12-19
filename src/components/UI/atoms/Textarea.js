import React from "react";

const Textarea = (props) => {
  return (
    <textarea
      className={props.class}
      name={props.name}
      rows={props.rows}
      id={props.id}
      input={props.inputValue}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      type={props.type}
    ></textarea>
  );
};

export default Textarea;
