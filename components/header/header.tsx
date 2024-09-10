"use client";

import React from "react";
import {Playfair_Display_SC} from "next/font/google";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {cn} from "@/lib/utils";

import {Button} from "../ui/button";
import Wrapper from "../wrapper/wrapper";

const playfair = Playfair_Display_SC({
  subsets: ["latin"],
  weight: "400",
});

function Header() {
  const pathName = usePathname();

  return (
    <header className="py-6">
      <Wrapper>
        <div className="flex items-center justify-between">
          <span className={cn(playfair.className, "text-4xl")}>SPACENG</span>
          <nav className="border border-grey-100 px-4 py-2.5">
            <ul className="flex items-center justify-center gap-12">
              <li className={cn("hover:text-blue", pathName === "/" && "border-b-2 border-b-blue")}>
                <Link href={"/"}>Home</Link>
              </li>
              <li
                className={cn(
                  "hover:text-blue",
                  pathName === "/services" && "border-b-2 border-b-blue",
                )}
              >
                <Link href={"/services"}>Services</Link>
              </li>
              <li
                className={cn(
                  "hover:text-blue",
                  pathName === "/about-us" && "border-b-2 border-b-blue",
                )}
              >
                <Link href={"/about-us"}>About Us</Link>
              </li>
              <li className="hover:text-blue cursor-pointer">Contact Us</li>
              <li>
                <Link href={"/auth/client/signin"}>
                  <Button className="bg-white text-grey shadow-[0px_4px_4px_rgba(0,0,0,0.25)] min-w-32">
                    Client
                  </Button>
                </Link>
              </li>
              <li>
                <Link href={"/auth/business"}>
                  <Button className="bg-blue shadow-[0px_4px_4px_rgba(0,0,0,0.25)] min-w-32">
                    Business
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
