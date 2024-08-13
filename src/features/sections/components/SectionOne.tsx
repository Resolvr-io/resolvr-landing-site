import { Button } from "@/components/ui/button";
import Image from "next/image";

export function SectionOne() {
  return (
    <div className="overflow-hidden z-10 relative w-full bg-section-dark pb-8 pt-8 lg:pb-40 lg:pt-20">
      <div className="z-10 relative max-w-screen-xl m-auto flex flex-col lg:px-25 px-4">
        <h1 className="text-orange text-5xl lg:text-7.5xl font-bold mt-3">
          Accelerated Premium Processing for Reinsurance
        </h1>
        <p className="mt-6 text-section-light max-w-sm lg:max-w-md text-lg lg:text-1.5xl">
          Take pole position with Resolvr&apos;s Reinsurance Premium Manager —
          the industry&apos;s first global, real-time settlement solution.
        </p>
        <a href="https://calendly.com/aaron-resolvr/discovery-meeting" className="self-start">
          <Button
            variant="outline"
            className="uppercase px-8 py-3 rounded-none text-section-light hover:text-section-dark hover:bg-section-light bg-transparent border-section-light mt-12 self-start"
          >
            Book A Demo
          </Button>
        </a>
      </div>
      <div className="-z-10">
        <Image
          src={`/car-adjusted2.png`}
          alt="Car One Background"
          // width={1200}
          // height={500}
          objectFit="cover"
          fill
        />
      </div>
    </div>
  );
}
