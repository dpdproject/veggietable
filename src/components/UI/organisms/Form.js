import React from "react";

import Button from "../atoms/Button";
import InputForm from "../molecules/InputForm";
import TextareaForm from "../molecules/TextareaForm";

const Form = (props) => {
  return (
    <>
      <InputForm
        type="text"
        name="name"
        id="name"
        value={props.inputsName}
        placeholder="Mario Rossi"
        onChange={props.handleChange}
        htmlFor={"name"}
      />
      <InputForm
        type="email"
        name="email"
        id="email"
        value={props.inputsEmail}
        placeholder="mariorossi@gmail.com"
        onChange={props.handleChange}
        htmlFor={"email"}
      />
      <TextareaForm
        className="textarea"
        rows="10"
        name="message"
        id="message"
        value={props.inputsMessage}
        placeholder="Write your message here..."
        onChange={props.handleChange}
        htmlFor={"message"}
      />
      <Button type={"submit"} text={"Send Your Message"} />
    </>
  );
};

export default Form;
