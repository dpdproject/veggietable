import React from "react";

const Title = (props) => {
  return (
    <>
      <h1 className={props.class}>{props.title}</h1>
    </>
  );
};

export default Title;
