import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import Link from "next/link";
export function Header() {
  return (
    <header className="bg-section-dark w-full">
      <div className="m-auto px-4 py-4 max-w-screen-xl lg:py-[20.5px] lg:px-25 flex justify-between items-center">
        <div>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <nav>
          <a href="mailto:info@resolvr.io">
            <Button
              variant="outline"
              className="hover:bg-orange hover:text-white px-8 py-3 bg-orange border-orange rounded-none uppercase"
            >
              Book a Demo
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
}
