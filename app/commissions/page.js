import BoxTitle from "../components/BoxTitle";
import CardDescription from "../components/CardDescription";
import CommissionsDivider from "../components/CommissionsDivider";

const commissions = () => {
  const emotePics = [
    "/images/cat.png",
    "/images/cat.png",
    "/images/cat.png",
    "/images/cat.png",
  ];
  const ychPics = [
    "/images/cat.png",
    "/images/cat.png",
    "/images/cat.png",
    "/images/cat.png",
    "/images/cat.png",
    "/images/cat.png",
  ];
  const chibiPics = ["/images/cat.png"];
  return (
    <div className="min-h-screen p-2">
      <div className="min-h-[calc(100vh-1rem)] bg-white border-4 border-spacing-20 border-dashed border-[#D7F3FF] p-4 flex flex-col gap-5">
        <BoxTitle title={"Graphic Artist"} />
        <CardDescription
          size={"xs"}
          description={
            "My art style is best for: Cutesy / Elegant characters Light themes, but I can do mild Dark themes"
          }
          highlight={true}
        />
        <CardDescription
          size={"xs"}
          description={"Commissions:"}
          highlight={true}
        />
        <CardDescription size={"xs"} description={"OPEN"} highlight={true} />
        <img
          src="/images/commissionTypes.png"
          alt="commission types"
          className="w-56 mx-auto"
        />
        <img
          src="/images/gallerySection.png"
          alt="gallery section"
          className="w-32 h-10 mx-auto"
        />
        <CommissionsDivider title={"Emote Package"} />
        <div className="grid grid-cols-2 place-items-center gap-4">
          {emotePics.map((source, index) => {
            return (
              <div
                key={`emote${index}`}
                className="w-full flex justify-center items-center"
              >
                <div className="w-full h-20 lg:h-40">
                  <img
                    src={source}
                    alt={`emote${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <CommissionsDivider title={"YCH Art"} />
        <div className="grid grid-cols-3 place-items-center gap-4">
          {ychPics.map((source, index) => {
            return (
              <div
                key={`ych${index}`}
                className="w-full flex justify-center items-center"
              >
                <div className="w-full h-20 lg:h-40">
                  <img
                    src={source}
                    alt={`ych${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <CommissionsDivider title={"Chibi Art"} />
        <div className="w-full flex justify-center items-center">
          {chibiPics.map((source, index) => {
            return (
              <div
                key={`chibi${index}`}
                className="w-full flex justify-center items-center"
              >
                <div className="w-full h-20 lg:h-40">
                  <img
                    src={source}
                    alt={`chibi${index}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default commissions;
