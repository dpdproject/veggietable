import React, { useContext } from "react";
import { Outlet } from "react-router";

import AnimatedPage from "../AnimatedPage";
import TopNavbar from "../UI/organisms/TopNavbar/TopNavbar";
import BottomNavbar from "../UI/organisms/BottomNavbar/BottomNavbar";
import { ResizeContext } from "../../context/ResizeContext";

const RootLayout = () => {
  const sizeWindow = useContext(ResizeContext);

  return (
    <AnimatedPage>
      <TopNavbar />
      <main>
        <Outlet />
      </main>
      {sizeWindow.width < 1200 ? <BottomNavbar /> : null}
    </AnimatedPage>
  );
};

export default RootLayout;
