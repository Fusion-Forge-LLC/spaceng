"use client";

import {ChevronDown} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {useSignOut} from "@/api/auth/logout";

const acountManagementNavigation = [
  {
    icon: "/account_management/user.svg",
    title: "Manage account",
    url: "/account/settings",
  },
  {
    icon: "/account_management/messages.svg",
    title: "Message",
    url: "/account/messages",
  },
  {
    icon: "/account_management/notificationcard.svg",
    title: "Notifications",
    url: "/account/notifications",
  },
  {
    icon: "/account_management/calendar.svg",
    title: "Booking",
    url: "/account/bookings",
  },
  {
    icon: "/account_management/heart.svg",
    title: "Wishlist",
    url: "/account/wishlist",
  },
  {
    icon: "/account_management/help.svg",
    title: "Help center",
    url: "/account/help",
  },
  {
    icon: "/account_management/logout.svg",
    title: "Sign out",
    url: "/account/signout",
  },
];

export default function Header() {
  const pathName = usePathname();
  const {logout} = useSignOut();

  return (
    <header
      className=" py-5 px-5 lg:px-24 flex justify-between items-center sticky"
      style={{boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"}}
    >
      <Link href={"/"}>
        <h1 className="text-blue font-bold text-lg">SpaceFinda</h1>
      </Link>
      <div className="flex gap-2 items-center">
        <Image
          alt="avatar"
          className="rounded-full lg:w-10 lg:h-10"
          height={40}
          src="/account_management/Profile.svg"
          width={40}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>
              <ChevronDown className="cursor-pointer" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64">
            <DropdownMenuGroup>
              {acountManagementNavigation.map((item) => {
                if (item.title !== "Sign out") {
                  return (
                    <DropdownMenuItem key={item.url}>
                      <Link
                        className={` ${pathName === item.url ? "bg-[#E8E8E8]" : ""} py-1 rounded w-full flex gap-[14px] items-center`}
                        href={item.url}
                      >
                        <Image
                          alt={item.title}
                          className="rounded-full"
                          height={24}
                          src={item.icon}
                          width={24}
                        />
                        <p className="text-grey-200 text-sm lg:text-base relative top-[1px]">
                          {item.title}
                        </p>
                      </Link>
                    </DropdownMenuItem>
                  );
                } else {
                  return (
                    <DropdownMenuItem key={item.url}>
                      <button
                        className={`py-1 rounded w-full flex gap-[14px] items-center`}
                        onClick={logout}
                      >
                        <Image
                          alt={item.title}
                          className="rounded-full"
                          height={24}
                          src={item.icon}
                          width={24}
                        />
                        <p className="text-grey-200 text-sm lg:text-base relative top-[1px]">
                          {item.title}
                        </p>
                      </button>
                    </DropdownMenuItem>
                  );
                }
              })}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
