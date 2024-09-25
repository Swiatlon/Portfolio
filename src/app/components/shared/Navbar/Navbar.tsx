"use client";
import React, { useState } from "react";
import LogoLink from "./Elements/LogoLink";
import DesktopNav from "./Elements/DesktopNav";
import MobileMenuButton from "./Elements/MobileMenuButton";
import MobileNav from "./Elements/MobileNav";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 z-10 bg-black/90 w-full">
      <div className="max-content mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <LogoLink />
          <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
          <DesktopNav />
          <MobileNav isOpen={isOpen} />
        </div>
      </div>
    </header>
  );
};
