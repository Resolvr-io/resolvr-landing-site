import Image from "next/image";

const contentMap = [
  {
    title: "Turbocharge Profits",
    text: "Premiums and commissions cross the finish line as soon as they are green-flagged, boosting investment returns and increasing reserves -  fueling more deals.",
  },
  {
    title: "Shift into High Gear with Real-Time Settlements",
    text: "Keep pace with the breakneck speeds of today’s global financial markets with instant premium settlements in multiple currencies.",
  },
  {
    title: "Leave Outdated Premium Processing in the Dust",
    text: "Optimize performance and reduce delays with a single source of truth, simplified collaboration and approvals, and automated reconciliation and allocation.",
  },
];
export function SectionTwo() {
  return (
    <div className="z-10 relative w-full bg-section-light pt-8 lg:pb-25 lg:pt-25">
      <div className="relative max-w-screen-xl m-auto flex flex-col lg:px-25 px-4">
        <h2 className="text-4xl lg:text-sectionTitle text-section-teal mb-6 lg:mb-20 font-bold">
          Experience the Power of Real-Time Premium Processing
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
        <div className="hidden lg:block absolute right-0 top-60 -z-10">
          <Image
            alt="Engine Background"
            src="/engine.png"
            width={579}
            height={869}
          />
        </div>
      </div>
    </div>
  );
}
