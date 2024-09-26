"use client";
import React from "react";
import NavItems from "./NavItems";

interface MobileMenuButtonProps {
  isOpen: boolean;
}

const MobileNav = ({ isOpen }: MobileMenuButtonProps) => {
  return (
    <nav
      id="mobile-menu"
      className={`fixed top-0 right-0 h-full w-64 bg-black-200 p-5 transition-all duration-300 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } sm:hidden`}
      aria-hidden={!isOpen}
    >
      <NavItems />
    </nav>
  );
};

export default MobileNav;