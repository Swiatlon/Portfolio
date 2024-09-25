import React from "react";
import { navLinks } from "@/app/constants/constants";
import { scrollToSection } from "@/utils/utils";

const NavItems = () => {
  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative">
      {navLinks.map(({ id, href, name }) => (
        <li
          key={id}
          className="text-neutral-400 hover:text-white max-sm:w-full py-2 max-sm:px-5"
        >
          <a
            href={href}
            className="text-lg md:text-base transition-colors"
            tabIndex={0}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(href);
            }}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
