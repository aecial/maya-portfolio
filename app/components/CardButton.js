import React from "react";
import Link from "next/link";
const CardButton = ({ title, link }) => {
  return (
    <Link
      href={link}
      className="btn hover:scale-125 hover:bg-light-blue hover:text-description-dark bg-light-blue text-description-dark border-0 flex justify-center items-center text-center"
    >
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#0E4A63"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </Link>
  );
};

export default CardButton;
