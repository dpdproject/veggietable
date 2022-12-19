import React, { useContext } from "react";
import "./css/contacts.css";

import { FormContext } from "../../context/FormContext";
import AnimatedPage from "../AnimatedPage";
import ContactsLayout from "../UI/layout/ContactsLayout";

function Contacts() {
  const { inputs, handleChange, handleSubmit } = useContext(FormContext);

  return (
    <AnimatedPage>
      <ContactsLayout
        inputs={inputs}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </AnimatedPage>
  );
}

export default Contacts;
