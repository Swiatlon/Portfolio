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
          text-gray_gradient
        "
      >
        Building Websites & Apps
      </h2>
    </div>
  );
};

export default GreetingMessage;
