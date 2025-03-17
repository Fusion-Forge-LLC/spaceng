"use client";

import {Menu, X} from "lucide-react";
import {usePathname} from "next/navigation";
import React, {useEffect, useState} from "react";

import {cn} from "@/lib/utils";

import NavItems from "../nav-items/nav-items";
import {
  AnalyticIcon,
  CommunicationIcon,
  DashboardIcon,
  FinanceIcon,
  ManagementIcon,
  SettingsIcon,
} from "../nav-items/icons/icons";
import Logout from "../logout/logout";

function MobileNav() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const pathName = usePathname();

  function toggleMobileMenu() {
    setShowMobileNav((prevState) => !prevState);
  }

  useEffect(() => {
    setShowMobileNav(false);
  }, [pathName]);

  return (
    <div className="md:hidden">
      <button onClick={toggleMobileMenu}>
        <Menu />
      </button>

      <div
        className={cn(
          "lg:hidden h-screen transition-all w-full fixed top-0 bg-white p-4 sm:p-8 z-50",
          showMobileNav ? "left-0" : "-left-full",
        )}
      >
        <button
          className="absolute right-4 top-4 hover:scale-110 transition-all active:scale-90"
          onClick={toggleMobileMenu}
        >
          <X />
        </button>

        <ul className="pt-12 space-y-2">
          <NavItems Icon={DashboardIcon} name="Dashboard" path="/dashboard/overview" />
          <NavItems Icon={ManagementIcon} name="Management" path="/dashboard/management" />
          <NavItems Icon={FinanceIcon} name="Finance" path="/dashboard/finance" />
          <NavItems Icon={CommunicationIcon} name="Communication" path="/dashboard/communication" />
          <NavItems Icon={AnalyticIcon} name="Analytics" path="/dashboard/analytics" />
          <NavItems Icon={SettingsIcon} name="Settings" path="/dashboard/settings" />
          {/* <NavItems Icon={HelpIcon} name="Help" path="/dashboard/help" /> */}
          <Logout />
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
