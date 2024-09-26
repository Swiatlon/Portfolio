import React from "react";

const GreetingMessage = () => {
  return (
    <div className="mt-20 sm:mt-36 text-center z-10">
      <h1 className="text-1xl sm:text-2xl font-medium text-white tracking-wider">
        Hi, I am Przemysław <span className="waving-hand">👋</span>
      </h1>

      <h2
        className="
          text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold !leading-normal tracking-wide
          bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent
        "
      >
        Building Websites & Apps
      </h2>
    </div>
  );
};

export default GreetingMessage;
