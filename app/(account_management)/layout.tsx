"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

import Footer from "@/components/footer/footer";

import Header from "./_components/header/header";

function AccountManagementLayout({children}: {children: React.ReactNode}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className={`mx-auto relative `}>
        <AccountManagementNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {children}
      </div>
      <Footer />
    </>
  );
}

export default AccountManagementLayout;

function AccountManagementNavigation({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}) {
  const pathName = usePathname();

  return (
    <div
      className={`bg-white ${isMenuOpen ? "md:block" : "hidden"} w-[249px] md:w-[300px] absolute top-1 right-5 lg:right-24 rounded-lg z-50`}
      style={{
        boxShadow: "0px 4px 4px 0 rgba(0, 0, 0, 0.25)",
      }}
    >
      {acountManagementNavigation.map((item) => (
        <Link
          key={item.url}
          className={` ${pathName === item.url ? "bg-[#E8E8E8]" : ""} flex gap-[14px] items-center p-6 w-[249px] md:w-[300px] hover:bg-[#E8E8E8] cursor-pointer`}
          href={item.url}
          onClick={() => setIsMenuOpen(false)}
        >
          <Image alt={item.title} className="rounded-full" height={24} src={item.icon} width={24} />
          <p className="text-grey-200 text-sm lg:text-base relative top-[1px]">{item.title}</p>
        </Link>
      ))}
    </div>
  );
}

const acountManagementNavigation = [
  {
    icon: "/account_management/user.svg",
    title: "Manage account",
    url: "/settings",
  },
  {
    icon: "/account_management/messages.svg",
    title: "Message",
    url: "/messages",
  },
  {
    icon: "/account_management/notificationcard.svg",
    title: "Notifications",
    url: "/notifications",
  },
  {
    icon: "/account_management/calendar.svg",
    title: "Booking",
    url: "/bookings",
  },
  {
    icon: "/account_management/heart.svg",
    title: "Wishlist",
    url: "/wishlist",
  },
  {
    icon: "/account_management/help.svg",
    title: "Help center",
    url: "/help",
  },
  {
    icon: "/account_management/logout.svg",
    title: "Sign out",
    url: "/signout",
  },
];
