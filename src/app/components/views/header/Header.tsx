import React from "react";
import Attribution from "./elements/Attribution";
import GreetingMessage from "./elements/GreetingMessage";
import HeaderBackground from "./elements/HeaderBackground";

const Header = () => {
  return (
    <section
      className="min-h-screen w-full flex flex-col relative gap-3"
      id="home"
    >
      <GreetingMessage />
      <Attribution />
      <HeaderBackground />
    </section>
  );
};

export default Header;
