"use client";
import React, { FC } from "react";
import Image from "next/image";

interface MobileMenuButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuButton: FC<MobileMenuButtonProps> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
    <button
      type="button"
      onClick={toggleMenu}
      className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex z-10"
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label="Toggle navigation menu"
    >
      <Image
        src={isOpen ? "assets/icons/close.svg" : "assets/icons/menu.svg"}
        alt={isOpen ? "Close menu" : "Open menu"}
        width={24}
        height={24}
        priority
      />
    </button>
  );
};

export default MobileMenuButton;
