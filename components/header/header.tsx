import React from "react";
import {Playfair_Display_SC} from "next/font/google";

import {cn} from "@/lib/utils";

import {Button} from "../ui/button";
import Wrapper from "../wrapper/wrapper";

const playfair = Playfair_Display_SC({
  subsets: ["latin"],
  weight: "400",
});

function Header() {
  return (
    <header className="py-6">
      <Wrapper>
        <div className="flex items-center justify-between">
          <span className={cn(playfair.className, "text-4xl")}>SPACENG</span>
          <nav className="border border-grey-100 px-4 py-2.5">
            <ul className="flex items-center justify-center gap-12">
              <li className="hover:underline hover:text-blue cursor-pointer">Home</li>
              <li className="hover:underline hover:text-blue cursor-pointer">Services</li>
              <li className="hover:underline hover:text-blue cursor-pointer">About Us</li>
              <li className="hover:underline hover:text-blue cursor-pointer">Contact Us</li>
              <li>
                <Button className="bg-white text-grey shadow-[0px_4px_4px_rgba(0,0,0,0.25)] min-w-32">
                  Client
                </Button>
              </li>
              <li>
                <Button className="bg-blue shadow-[0px_4px_4px_rgba(0,0,0,0.25)] min-w-32">
                  Business
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
