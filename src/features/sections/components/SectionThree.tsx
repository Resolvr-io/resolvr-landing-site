import Image from "next/image";

const contentMap = [
  {
    title: "Engineered for Reinsurance",
    text: "Resolvr’s Reinsurance Premium Management platform (RPM) was built to handle the complexities of global reinsurance deals, with real-time invoicing collaboration between parties and  parallel processing of premium and commission splits.",
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
    <div className="z-10 relative w-full bg-section-light pt-8 lg:pb-40 lg:pt-20 overflow-hidden">
      <div className="relative max-w-screen-xl m-auto flex flex-col lg:px-25 px-4">
        <h2 className="text-4xl lg:text-sectionTitle text-section-teal mb-6 lg:mb-20 font-bold">
          Replace slow, outdated practices with modern streamlined workflows
        </h2>
        <div className="relative max-w-md">
          {contentMap.map((content, i) => {
            return (
              <div key={i} className="mb-10">
                <h3 className="mb-2 text-sectionHeading text-section-black font-bold">
                  {content.title}
                </h3>
                <p className="text-sectionContent">{content.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="md:w-[400px] md:h-[600px] lg:h-[1200px] lg:w-[800px] hidden lg:block absolute right-0 top-60 -z-10 overflow-hidden">
        <Image
          src="/carThree.png"
          // width={900}
          fill
          style={{ objectFit: "contain" }}
          // height={500}
          alt="Car Two Background"
        />
      </div>
    </div>
  );
}
