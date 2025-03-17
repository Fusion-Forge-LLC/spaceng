import Image from "next/image";
import Link from "next/link";
import React from "react";
import {Bell} from "lucide-react";

import MobileNav from "@/app/dashboard/(others)/_components/dashboard/mobile-nav";
import {useUser} from "@/context/user";
import {useGetUnreadCount} from "@/api/chat/get-unread-count";

import {EmailIcon} from "../Icons/icons";

function Header() {
  const {User} = useUser();
  const {data, isLoading} = useGetUnreadCount();

  return (
    <header className="flex justify-between items-center py-3 gap-5 px-4 max-md:flex-wrap border-b border-grey-200">
      <Link className="text-xl sm:text-3xl font-bold sm:font-black text-blue sm:px-2.5" href={"/"}>
        Spacefinda
      </Link>

      <MobileNav />
      {/* <div className="relative text-[#A7A7A7]/[95%] max-md:w-full max-sm:shrink-0 md:flex-1 md:max-w-96 hidden md:block">
        <Input
          className="border border-grey rounded-xl h-10 sm:h-12 px-4 peer focus-visible:ring-blue"
          placeholder="search"
        />
        <Search className="absolute top-1/2 -translate-y-1/2 right-4 peer-focus:text-blue" />
      </div> */}

      <div className="hidden md:flex gap-5">
        <Link
          className="dashboard-header-btn bg-blue/20 relative"
          href={"/dashboard/communication"}
        >
          <EmailIcon />
          {data && data.data.length > 0 ? (
            <span className="text-xs font-semibold absolute right-0 top-0 bg-red text-white grid place-content-center h-4 w-4 rounded-full">
              {data?.data[0].totalCount}
            </span>
          ) : null}
        </Link>
        <button className="dashboard-header-btn hidden">
          <Bell />
        </button>
        <Link
          className="dashboard-header-btn h-10 w-10 overflow-hidden"
          href={"/dashboard/settings"}
        >
          <Image
            alt="Profile image"
            className="object-cover object-top"
            height={40}
            src={User?.profile_image!}
            width={40}
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
