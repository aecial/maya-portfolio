import React from "react";

const LandingCard = ({ children, id }) => {
  return (
    <div id={id} className="p-4 container h-screen md:mx-auto ">
      <div className="bg-white fur-border w-full h-full flex flex-col gap-7 items-center text-center p-2 ">
        {children}
      </div>
    </div>
  );
};

export default LandingCard;
