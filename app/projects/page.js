"use client";
import BoxTitle from "../components/BoxTitle";
import { useState } from "react";

const Projects = () => {
  const uiImages = [
    "/images/miralles1.png",
    "/images/cat.png",
    "/images/fb.png",
    "/images/gmail.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === uiImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? uiImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen p-10">
      <BoxTitle title={"UI/UX Designer Projects"} />
      <div>
        <div className="w-14 h-14 mx-auto">
          <img src="/images/mobileProj.png" alt="mobile" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
