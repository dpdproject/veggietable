import React from "react";

const InfoIcon = (props) => {
  return (
    <>
      <i className={props.icon}>
        <p>{props.info}</p>
      </i>
    </>
  );
};

export default InfoIcon;
