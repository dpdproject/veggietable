import React from "react";

import Label from "../atoms/Label";
import Input from "../atoms/Input";

const InputForm = (props) => {
  return (
    <>
      <Label htmlFor={props.htmlFor} title={props.name} />
      <Input
        inputValue={props.value}
        handleChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        id={props.id}
      />
    </>
  );
};

export default InputForm;
