import Image from "next/image";

const contentMap = [
  {
    title: "Engineered for Reinsurance",
    text: "Resolvr’s Reinsurance Premium Manager (RPM) platform was built to handle the complexities of global reinsurance deals, with integrated invoicing collaboration between parties and parallel processing of premium and commission splits.",
  },
  {
    title: "Welcome to the Digital Fast-Lane",
    text: "Other premium processors run on antiquated financial engines with limited geographic range.  Resolvr’s RPM platform leverages the same secure, interoperable, and lightning-fast digital payment networks driving fintech’s revolutions - and extends them to your current banking suite.",
  },
  {
    title: "Experience the Resolvr Advantage",
    text: "Resolvr’s high-performance premium processing enables new products stalled by payment friction and gives your company the competitive edge to stay ahead of the curve on emerging risks.",
  },
];
export function SectionThree() {
  return (
    <div className="z-10 relative w-full bg-section-light pt-8 lg:pb-25 lg:pt-25">
      <div className="relative max-w-screen-xl m-auto flex flex-col lg:px-25 px-4">
        <h2 className="text-4xl lg:text-sectionTitle text-section-teal mb-6 lg:mb-20 font-bold">
          Streamline Outdated Practices with Modern Workflows
        </h2>
        <div className="relative max-w-md">
          {contentMap.map((content, i) => {
            return (
              <div key={i} className="mb-10 last:mb-0">
                <h3 className="mb-2 text-sectionHeading text-section-black font-bold">
                  {content.title}
                </h3>
                <p className="text-sectionContent">{content.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:w-[500px] lg:h-[750px] xl:h-[1200px] xl:w-[800px] hidden lg:block absolute right-24 top-60 -z-10 overflow-hidden">
        <Image
          src={`/carThree-adjusted.png`}
          fill
          style={{ objectFit: "contain" }}
          alt="Car Two Background"
        />
      </div>
    </div>
  );
}
