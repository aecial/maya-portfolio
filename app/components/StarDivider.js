import React from "react";
import Image from "next/image";
const StarDivider = ({ dark }) => {
  return (
    <Image
      className={dark ? "dark:invert" : ""}
      src="/images/Stars.png"
      alt="star"
      width={100}
      height={28}
      priority
    />
  );
};

export default StarDivider;
