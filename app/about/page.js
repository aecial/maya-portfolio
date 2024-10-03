import AboutTitle from "../components/AboutTitle";
import CardDescription from "../components/CardDescription";
import CardTitle from "../components/CardTitle";
import StarDivider from "../components/StarDivider";

const About = () => {
  return (
    <div className="min-h-screen p-2">
      <div className="flex flex-col">
        <div className="h-5 bg-transparent w-full">
          <img src="/images/cloudPattern.png" alt="cloud" className="mx-auto" />
        </div>
        <div className="p-4 container flex flex-col text-center items-center gap-5 cloud-border bg-transparent mx-auto bg-white rounded-lg border-4 border-spacing-20 border-dashed border-[#D7F3FF]">
          <CardTitle title={"About Me"} />
          <StarDivider dark={true} />
          <AboutTitle title={"Graphic Artist"} />
          <CardDescription
            description={
              "Hi! you can call me Mae, I create character designs, Vtuber Chibi Art, Emotes and Illustrations from scratch!"
            }
            highlight={true}
            size={"xs"}
          />
          <CardDescription
            description={
              "I've worked with Indie Content Creators, Vtubers and Streamers. I aspire to work with more creative teams and projects to gain more experience."
            }
            highlight={true}
            size={"xs"}
          />
          <StarDivider dark={true} />
          <AboutTitle title={"UI and UX Designer"} />
          <CardDescription
            size={"xs"}
            description={
              " I started practicing doing UI and UX design when I was in my 3rd year of college (2022), and that's where my 'artsy' was applied. Then my professors noticed that they saw potential in me in creating websites and mobile design. I studied even more so that I could hone my skills in using Figma and other tools to make it easier to use."
            }
            highlight={true}
          />
          <StarDivider dark={true} />
          <AboutTitle title={"Mini Story"} />
          <CardDescription
            size={"xs"}
            highlight={true}
            description={
              " I just want to share my short story journey of how I got here in becoming a freelancer artist. It started in 2019 and it was during the pandemic. Actually I was a fine arts student who became an IT student. During that time it was an online class, I thought of practicing digital art for the first time. At first I had a hard time because I didn't know how to use the art tools in the digital software because I was only used to pencil and paper. In short, until I watched on Youtube how to use it, and I learned every tutorials. After 2 years of studying digital art, I started opening art commissions on Twitter (2021). I didn't expect clients to order my art commissions. I had more than 20 streamers and Vtubers and I will never forget that day. Up until now, my clients still come back to order a commission to me to this day. I am also a streamer and I do this as a sideline work."
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4 mt-5">
        <div className="border border-solid border-[#51BBE8] w-full flex justify-center items-center">
          <div className="w-full h-44">
            <img
              src="/images/cat.png"
              alt="pic1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="border border-solid border-[#51BBE8] w-full flex justify-center items-center">
          <div className="w-full h-44 ">
            <img
              src="/images/cat.png"
              alt="pic2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="border border-solid border-[#51BBE8] w-full flex justify-center items-center">
          <div className="w-full h-44 ">
            <img
              src="/images/cat.png"
              alt="pic3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="border border-solid border-[#51BBE8] w-full flex justify-center items-center">
          <div className="w-full h-44 ">
            <img
              src="/images/cat.png"
              alt="pic4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
