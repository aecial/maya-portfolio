import React from "react";

const CardDescription = ({ description, white, highlight, size }) => {
  return (
    <p
      className={`text-${
        white ? "white" : highlight ? "highlight" : "description-dark"
      } text-xs text-center text-wrap`}
    >
      {description}
    </p>
  );
};

export default CardDescription;
