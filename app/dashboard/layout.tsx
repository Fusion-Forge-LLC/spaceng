import React, {ReactNode} from "react";
import {Bell, Gem, LogOutIcon, Menu, Search} from "lucide-react";
import Image from "next/image";

import {Input} from "@/components/ui/input";
import {EmailIcon} from "@/components/Icons/icons";
import Footer from "@/components/footer/footer";

import NavItems from "./_components/nav-items/nav-items";
import {
  AnalyticIcon,
  CommunicationIcon,
  DashboardIcon,
  FinanceIcon,
  HelpIcon,
  ManagementIcon,
  SettingsIcon,
} from "./_components/nav-items/icons/icons";

function DashboardLyout({children}: {children: ReactNode}) {
  return (
    <div className="md:h-screen flex flex-col">
      <header className="flex justify-between items-center py-3 gap-5 px-4 max-md:flex-wrap">
        <span className="text-2xl sm:text-3xl font-black text-blue">Spacefinda</span>

        <button className="md:hidden">
          <Menu />
        </button>
        <div className="relative text-[#A7A7A7]/[95%] max-md:w-full max-sm:shrink-0 md:flex-1 md:max-w-96">
          <Input
            className="border border-grey rounded-xl h-10 sm:h-12 px-4 peer focus-visible:ring-blue"
            placeholder="search"
          />
          <Search className="absolute top-1/2 -translate-y-1/2 right-4 peer-focus:text-blue" />
        </div>

        <div className="hidden md:flex gap-5">
          <button className="dashboard-header-btn">
            <EmailIcon />
          </button>
          <button className="dashboard-header-btn">
            <Bell />
          </button>
          <button className="dashboard-header-btn">
            <Image alt="Profile image" height={40} src={"/user.png"} width={40} />
          </button>
        </div>
      </header>
      <div className="flex-1 flex overflow-hidden">
        <aside className="w-56 h-full hidden lg:flex flex-col p-4 pt-0 gap-5 border-r border-grey-200">
          <ul>
            <NavItems Icon={DashboardIcon} name="Dashboard" path="/dashboard" />
            <NavItems Icon={ManagementIcon} name="Management" path="/dashboard/management" />
            <NavItems Icon={FinanceIcon} name="Finance" path="/dashboard/finance" />
            <NavItems
              Icon={CommunicationIcon}
              name="Communication"
              path="/dashboard/communication"
            />
            <NavItems Icon={AnalyticIcon} name="Analytics" path="/dashboard/analytics" />
            <NavItems Icon={SettingsIcon} name="Settings" path="/dashboard/settings" />
            <NavItems Icon={HelpIcon} name="Help" path="/help" />
            <li className="">
              <button className="dashboard-nav text-red w-full">
                <span className="w-10">
                  <LogOutIcon />
                </span>
                Logout
              </button>
            </li>
          </ul>

          <div className="bg-gradient-to-b from-blue to-grey-300/70 rounded-xl px-3 pt-6 pb-4 mt-auto">
            <span className="h-5 w-5 bg-white grid place-content-center mx-auto">
              <Gem color="#205BF3" size={16} />
            </span>

            <p className="mt-3 mb-5 text-center text-white text-sm">
              Upgrade premium to unlock all features
            </p>

            <button className="bg-blue px-4 py-2 w-full text-white font-medium text-xs rounded-md">
              Upgrade Premium
            </button>
          </div>
        </aside>
        <main className="flex-1 h-full overflow-y-scroll no-scrollbar">{children}</main>
      </div>
      <div className="md:hidden">
        <Footer />
      </div>
    </div>
  );
}

export default DashboardLyout;
