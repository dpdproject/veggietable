import { createContext, useState } from "react";

// create the context
const FormContext = createContext();

// create the provider
const FormContextProvider = ({ children }) => {
  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...inputs }),
    })
      .then(() => alert("Your message has been sent! Thanks a lot!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <FormContext.Provider value={{ inputs, handleChange, handleSubmit }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormContextProvider };
