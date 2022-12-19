import React from "react";
import "./css/topnavbar.css";
import "animate.css";

import Logo from "../../molecules/Logo";
import NavLinks from "../../molecules/NavLinks";

function TopNavbar() {
  return (
    <nav className="top--navbar animate__animated animate__fadeInDown">
      <Logo />
      <NavLinks class="top--navbar--links" />
    </nav>
  );
}

export default TopNavbar;
