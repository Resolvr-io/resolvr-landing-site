import Background from "./Background";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export function Footer() {
  return (
    <footer className="w-full relative z-10">
      <div className="m-auto max-w-screen-xl px-4 py-2 lg:py-[10.3px] lg:px-25">
        <h2 className="text-4xl lg:text-sectionTitle text-section-teal mb-12 mt-8 font-bold">
          Get On The Grid
        </h2>
        <p className="lg:text-1.5xl text-[#292929]">Test Drive Resolvr Today</p>
        <a href="mailto:info@resolvr.io">
          <Button
            variant="outline"
            className="hover:bg-orange mt-8 hover:text-white px-4 py-2 bg-orange border-orange rounded-none uppercase"
          >
            Book a Demo
          </Button>
        </a>
        <div className="flex flex-col lg:flex-row gap-5 text-[#525252] mt-12 lg:mt-32">
          Copyright © 2024 Resolvr.io
          <Link href="/">Legal notice</Link>
          <Link href="/">Privacy policy</Link>
        </div>
      </div>
      <div className="hidden lg:block absolute w-full bottom-0 -z-10">
        <Background />
      </div>
    </footer>
  );
}
