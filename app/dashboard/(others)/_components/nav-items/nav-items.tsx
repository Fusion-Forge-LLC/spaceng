"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import React, {FC} from "react";

import {cn} from "@/lib/utils";
import {DashboardIconsProps} from "@/@types/types";

function NavItems({name, path, Icon}: {name: string; path: string; Icon: FC<DashboardIconsProps>}) {
  const pathName = usePathname();

  const isActive = pathName.includes(path);

  return (
    <li className="">
      <Link className={cn("dashboard-nav", isActive ? "text-blue" : "text-grey-300")} href={path}>
        <span className="w-10">
          <Icon fill={isActive ? "#205BF3" : "#9D9D9D"} />
        </span>
        {name}
      </Link>
    </li>
  );
}

export default NavItems;
