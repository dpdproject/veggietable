import React from "react";
import "./css/bottomnavbar.css";

import NavLinks from "../../molecules/NavLinks";

function BottomNavbar() {
  return (
    <nav className="bottom--navbar animate__animated animate__fadeInUp">
      <NavLinks class={"bottom--navbar--links"} />
    </nav>
  );
}

export default BottomNavbar;
