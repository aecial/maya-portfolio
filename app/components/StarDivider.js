import Image from "next/image";
const StarDivider = ({ dark, white }) => {
  return (
    <Image
      className={dark ? "dark:invert" : white ? "convert-white" : ""}
      src="/images/Stars.png"
      alt="star"
      width={100}
      height={28}
      priority
    />
  );
};

export default StarDivider;
