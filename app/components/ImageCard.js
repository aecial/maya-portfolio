import React from "react";
import CardTitle from "./CardTitle";

import CardDescription from "./CardDescription";
import CardButton from "./CardButton";
import StarDivider from "./StarDivider";
const ImageCard = ({ id, imageSrc, title, description, link, btnTitle }) => {
  const imageSize = 100 / imageSrc.length;
  const formattedImageSize = Number.isInteger(imageSize)
    ? imageSize
    : imageSize.toFixed(2);
  return (
    <div id={id} className="p-4 container h-screen md:mx-auto">
      <div className="bg-white rounded-lg w-full h-full flex flex-col gap-10 items-center text-center p-2 opacity-85 fur-border">
        <div className="w-[100%] h-[30%] rounded-t-md overflow-hidden flex gap-1">
          {imageSrc.map((image, index) => {
            return (
              <img
                key={index}
                src={`/images/${image}`}
                alt={`Cat ${index}`}
                style={{ width: `${formattedImageSize}%` }}
                className={`object-cover md:object-contain bg-gray-100`}
              />
            );
          })}
        </div>
        <CardTitle title={title} />
        <StarDivider />
        <CardDescription description={description} />
        <CardButton title={btnTitle} link={link} />
      </div>
    </div>
  );
};

export default ImageCard;
