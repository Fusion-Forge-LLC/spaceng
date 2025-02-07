"use client";

import React, {useEffect, useState} from "react";
import {Playfair_Display_SC} from "next/font/google";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Menu, X} from "lucide-react";

import {cn} from "@/lib/utils";
import {useUser} from "@/context/user";

import {Button} from "../ui/button";
import Wrapper from "../wrapper/wrapper";
import {AboutIcon, HomeIcon, PhoneIcon, ServicesIcon} from "../Icons/icons";

const playfair = Playfair_Display_SC({
  subsets: ["latin"],
  weight: "400",
});

function Header() {
  const {User} = useUser();
  const [showMobileNav, setShowMobileNav] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setShowMobileNav(false);
  }, [pathName]);

  function toggleMobileMenu() {
    setShowMobileNav((prevState) => !prevState);
  }

  return (
    <header className="py-6">
      <Wrapper>
        <div className="flex items-center justify-between">
          <span className={cn(playfair.className, "text-2xl md:text-4xl")}>SPACEFINDA</span>
          <nav className="px-4 py-2.5 hidden lg:block">
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
              <li
                className={cn(
                  "hover:text-blue",
                  pathName === "/contact-us" && "border-b-2 border-b-blue",
                )}
              >
                <Link href={"/contact-us"}>Contact Us</Link>
              </li>
            </ul>
          </nav>

          {!User ? (
            <div className="hidden lg:flex gap-4">
              <Link href={"/auth/client/signin"}>
                <Button className="bg-blue text-white min-w-32">Client</Button>
              </Link>
              <Link href={"/auth/business"}>
                <Button className="border-grey-100 py-2 font-medium min-w-32" variant={"outline"}>
                  Business
                </Button>
              </Link>
            </div>
          ) : (
            <Link
              className="hidden lg:flex gap-4"
              href={User.role === "business" ? "/dashboard/overview" : "/account/bookings"}
            >
              <Button className="bg-blue text-white min-w-32">
                {User.role === "business" ? "Dashboard" : "Account"}
              </Button>
            </Link>
          )}

          <button className="lg:hidden" onClick={toggleMobileMenu}>
            <Menu />
          </button>
        </div>
      </Wrapper>
      <div
        className={cn(
          "lg:hidden h-screen transition-all w-full fixed top-0 bg-white p-4 sm:p-8 z-50",
          showMobileNav ? "left-0" : "-left-full",
        )}
      >
        <button
          className="absolute right-8 top-8 hover:scale-110 transition-all active:scale-90"
          onClick={toggleMobileMenu}
        >
          <X />
        </button>

        <ul className="space-y-8 pt-10">
          <li>
            <Link
              className={cn("mobile-nav-link", pathName === "/" && "underline text-blue")}
              href={"/"}
            >
              <HomeIcon />
              Home
            </Link>
          </li>
          <li>
            <Link
              className={cn("mobile-nav-link", pathName === "/services" && "underline text-blue")}
              href={"/services"}
            >
              <ServicesIcon />
              Services
            </Link>
          </li>
          <li>
            <Link
              className={cn("mobile-nav-link", pathName === "/about-us" && "underline text-blue")}
              href={"/about-us"}
            >
              <AboutIcon />
              About us
            </Link>
          </li>
          <li>
            <Link
              className={cn("mobile-nav-link", pathName === "/contact-us" && "underline text-blue")}
              href={"/contact-us"}
            >
              <PhoneIcon />
              Contact Us
            </Link>
          </li>
          <>
            {!User ? (
              <>
                <li>
                  <Link href={"/auth/client/signin"}>
                    <Button className="bg-blue text-white w-full">Client</Button>
                  </Link>
                </li>
                <li>
                  <Link href={"/auth/business"}>
                    <Button className="border-grey-100 py-2 font-medium w-full" variant={"outline"}>
                      Business
                    </Button>
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  className="hidden lg:flex gap-4"
                  href={User.role === "business" ? "/dashboard/overview" : "/account/bookings"}
                >
                  <Button className="bg-blue text-white min-w-32">
                    {User.role === "business" ? "Dashboard" : "Account"}
                  </Button>
                </Link>
              </li>
            )}
          </>
        </ul>
      </div>
    </header>
  );
}

export default Header;
