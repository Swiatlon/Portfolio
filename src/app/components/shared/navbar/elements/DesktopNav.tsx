import React from "react";
import NavItems from "./NavItems";

const DesktopNav = () => {
  return (
    <nav className="hidden sm:flex">
      <NavItems />
    </nav>
  );
};

export default DesktopNav;
