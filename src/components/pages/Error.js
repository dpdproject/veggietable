import React from "react";
import { Link } from "react-router-dom";
import "./css/error.css";

function Error() {
  return (
    <div className="error">
      <h1>Sorry, an error occured</h1>
      <Link to="/">back to the homepage</Link>
    </div>
  );
}

export default Error;
