import React from "react";

const Label = (props) => {
  return <label htmlFor={props.htmlFor}>{props.title}</label>;
};

export default Label;
