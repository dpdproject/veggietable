import React from "react";
import { Link } from "react-router-dom";

const MyLink = (props) => {
  return (
    <Link to={props.linkTo} className={props.class}>
      {props.span}
      <i className={props.iconClass}></i>
      {props.title}
    </Link>
  );
};

export default MyLink;
