import React from "react";

import Title from "../atoms/Title";
import Input from "../atoms/Input";
import Form from "../organisms/Form";

const ContactsLayout = (props) => {
  return (
    <div className="contacts">
      <div className="contacts--title">
        <Title title={"Contacts"} />
        <p>
          Visit my website and github to see all of my work.
          <br />
          If you want to get in touch with me for advices or new recipes, send
          me a message via the form.
        </p>
        <div>
          <a
            href="https://dpdportfolio.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fi fi-bs-link horizontal"></i>My Portfolio
          </a>
          <a
            href="https://github.com/dpdproject"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fi fi-brands-github"></i>GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/davidpiredda/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fi fi-brands-linkedin"></i>LinkedIn
          </a>
        </div>
      </div>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={props.handleSubmit}
      >
        <Input type={"hidden"} name={"form-name"} inputValue={"contact"} />
        <Form
          handleChange={props.handleChange}
          inputsName={props.inputs.name}
          inputsEmail={props.inputs.email}
          inputsMessage={props.inputs.message}
        />
      </form>
    </div>
  );
};

export default ContactsLayout;
