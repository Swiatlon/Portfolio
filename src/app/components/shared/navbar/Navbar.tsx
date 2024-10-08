"use client";
import React, { useState } from "react";
import LogoLink from "./elements/LogoLink";
import DesktopNav from "./elements/DesktopNav";
import MobileMenuButton from "./elements/MobileMenuButton";
import MobileNav from "./elements/MobileNav";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 z-20 bg-black/90 w-full">
      <div className="max-content mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <LogoLink />
          <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
          <DesktopNav />
          <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </header>
  );
};
