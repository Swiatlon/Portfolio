import React from "react";

const Attribution = () => {
  return (
    <div className="text-[8px] text-gray-500 absolute left-0 bottom-0 z-10">
      <strong>Attribution:</strong> 3D Model by{" "}
      <a
        href="https://shorturl.at/9OXzg"
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="3D Model by rivaiamin"
      >
        rivaiamin
      </a>
    </div>
  );
};

export default Attribution;
