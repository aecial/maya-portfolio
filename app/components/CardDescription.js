import React from "react";

const CardDescription = ({ description, white }) => {
  return (
    <p
      className={`text-${
        white ? "white" : "description-dark"
      } text-sm text-center text-wrap`}
    >
      {description}
    </p>
  );
};

export default CardDescription;
