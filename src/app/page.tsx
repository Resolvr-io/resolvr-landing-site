import Image from "next/image";
import { SectionOne, SectionTwo, SectionThree } from "@/features/sections";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </main>
  );
}
