import Link from "next/link";
import React from "react";

import Wrapper from "@/components/wrapper/wrapper";

function Header() {
  return (
    <header className="py-6 shadow-[0px_1px_4px_1px_#F9F9F9]">
      <Wrapper className="flex items-center justify-between">
        <span className="text-lg font-medium">SpacesNG</span>

        <nav className="text-[#707070] flex gap-8">
          <Link href={"/"}>Home</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/about-us"}>About Us</Link>
          <Link href={"/contact-us"}>Contact us</Link>
        </nav>

        <div className="font-medium flex gap-5 text-center">
          <Link
            className="font-medium rounded-[11px] w-28 py-2 px-3 border border-blue bg-blue text-white hover:bg-transparent hover:text-blue"
            href={"/"}
          >
            Business
          </Link>
          <Link
            className="rounded-[11px] w-28 py-2 px-3 border border-[#505050] hover:bg-[#505050] hover:text-white"
            href={"/auth/client/signin"}
          >
            Client
          </Link>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
