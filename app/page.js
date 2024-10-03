import Image from "next/image";
import Nav from "./components/Nav";
import LandingCard from "./components/LandingCard";
import ImageCard from "./components/ImageCard";
import StarDivider from "./components/StarDivider";
import CardDescription from "./components/CardDescription";

import Link from "next/link";
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
        <h4 className="text-description">Hi! I am</h4>
        <h1 className="text-highlight font-bold text-2xl text-wrap text-center">
          Maureene Mae E. Inovejas
        </h1>
        <StarDivider />
        <p>
          <Image
            src="/images/Logo.png"
            alt="logo"
            width={100}
            height={28}
            priority
          />
        </p>
        <p className="text-description">
          A freelancer graphic artist, UI/UX designer, using Procreate, Ibis
          Paint X and Figma.
        </p>
        <a
          href="#aboutDiv"
          className="btn bg-[#E8F8FC] text-[#0E4A63] border-0 hover:bg-[#E8F8FC] hover:text-[#0E4A63] hover:scale-125"
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
      <div className="p-4 container h-screen md:mx-auto">
        <div className="bg-[#2482aa74] rounded-lg w-full h-full flex flex-col justify-center items-center gap-10 text-center p-2 fur-border">
          <h2 className="text-3xl text-white text-bold">Order a commission?</h2>
          <StarDivider white={true} />
          <CardDescription
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            white={true}
          />
          <button className="btn bg-white border border-[#0E4A63] text-description-dark shadow-lg shadow-white hover:bg-white hover:bored hover:text-description-dark hover:shadow-white hover:scale-125">
            Comission Me
          </button>
        </div>
      </div>
      <div className="p-4 justify-center items-center text-center flex gap-4">
        <Link
          href="https://youtu.be/jJzw1h5CR-I?si=MKrVNBTjRaSQ9yUm"
          className="bg-white rounded-full"
        >
          <Image src="/images/x.png" alt="twitter" width={64} height={64} />
        </Link>
        <Link
          href="https://youtu.be/jJzw1h5CR-I?si=MKrVNBTjRaSQ9yUm"
          className="bg-white rounded-full"
        >
          <Image src="/images/fb.png" alt="fb" width={64} height={64} />
        </Link>
        <Link
          href="https://youtu.be/jJzw1h5CR-I?si=MKrVNBTjRaSQ9yUm"
          className="bg-white rounded-full"
        >
          <Image src="/images/gmail.png" alt="gmail" width={64} height={64} />
        </Link>
      </div>
      {/* <LandingCard id={"aboutDiv"}></LandingCard> */}
    </>
  );
}
