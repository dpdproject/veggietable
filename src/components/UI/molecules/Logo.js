import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/icon.png";

const Logo = () => {
  return (
    <>
      <Link to="/" className="top--navbar--logo">
        <img
          src={logo}
          alt="Salad icons created by Smashicons - Flaticon"
        ></img>
        <h1>
          <span className="veggie">Veggie</span>
          <span className="table">table</span>
        </h1>
      </Link>
    </>
  );
};

export default Logo;
