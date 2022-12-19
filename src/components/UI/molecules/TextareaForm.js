import React from "react";
import Label from "../atoms/Label";
import Textarea from "../atoms/Textarea";

const TextareaForm = (props) => {
  return (
    <>
      <Label htmlFor={props.htmlFor} title={props.name} />
      <Textarea
        class={props.className}
        name={props.name}
        rows={props.rows}
        id={props.id}
        inputValue={props.value}
        handleChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type}
      />
    </>
  );
};

export default TextareaForm;
