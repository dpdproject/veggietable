import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/search.css";

import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    inputValue && navigate("/recipes/search/" + inputValue);
    setInputValue("");
  };

  return (
    <>
      <form className="search" onSubmit={submitForm}>
        <Input
          value={inputValue}
          handleChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Search for your favourite meal..."
          name={"search"}
        />
        <Button type={"submit"} icon={"fi fi-rr-search"} />
      </form>
    </>
  );
};

export default Search;
