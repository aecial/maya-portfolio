import Image from "next/image";
import Nav from "./components/Nav";
import LandingCard from "./components/LandingCard";
import ImageCard from "./components/ImageCard";

export default function Home() {
  // <Image
  //         className="dark:invert"
  //         src="https://nextjs.org/icons/next.svg"
  //         alt="Next.js logo"
  //         width={180}
  //         height={38}
  //         priority
  //       />
  return (
    <>
      <LandingCard>
        <Nav />
        <h4 className="text-[#2481AA]">Hi! I am</h4>
        <h1 className="text-[#51BBE8] font-bold text-2xl text-wrap text-center">
          Maureene Mae E. Inovejas
        </h1>

        <p>
          <Image
            src="/images/Stars.png"
            alt="star"
            width={100}
            height={38}
            priority
          />
        </p>
        <p>
          <Image
            src="/images/Logo.png"
            alt="logo"
            width={100}
            height={28}
            priority
          />
        </p>
        <p className="text-[#51BBE8]">
          A freelancer graphic artist, UI/UX designer, using Procreate, Ibis
          Paint X and Figma.
        </p>
        <a
          href="#aboutDiv"
          className="btn bg-[#E8F8FC] text-[#0E4A63] border-0"
        >
          About me{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </a>
      </LandingCard>
      <ImageCard
        id={"aboutDiv"}
        btnTitle={"Mini Story"}
        imageSrc={["cat.png", "cat.png", "cat.png"]}
        title={"All Eyes on Me!"}
        description={
          "If you want to know me more, why not read my story first before I became a freelancer artist for almost 5 years?"
        }
        link={"/about"}
      />
      <ImageCard
        id={"projectsDiv"}
        btnTitle={"Projects"}
        imageSrc={["cat.png"]}
        title={"Web and Mobile Design"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
        link={"/projects"}
      />
      <ImageCard
        id={"graphicsDiv"}
        btnTitle={"Commissions"}
        imageSrc={["cat.png"]}
        title={"Graphic Design"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
        link={"/projects"}
      />
      {/* <LandingCard id={"aboutDiv"}></LandingCard> */}
    </>
  );
}
