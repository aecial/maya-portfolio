import React from "react";

const Nav = () => {
  return (
    <div className="bg-transparent w-full h-12 flex justify-between items-center p-2">
      <span></span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="size-9 bg-[#3DA7D3] rounded-md"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
};

export default Nav;
