import {Gem} from "lucide-react";
import Link from "next/link";
import React from "react";

import Logout from "@/app/dashboard/(others)/_components/logout/logout";
import {
  AnalyticIcon,
  CommunicationIcon,
  DashboardIcon,
  FinanceIcon,
  ManagementIcon,
  SettingsIcon,
} from "@/app/dashboard/(others)/_components/nav-items/icons/icons";
import NavItems from "@/app/dashboard/(others)/_components/nav-items/nav-items";

function Sidebar() {
  return (
    <aside className="w-56 h-full hidden md:flex flex-col p-4 pt-0 gap-5 border-r border-grey-200">
      <ul>
        <NavItems Icon={DashboardIcon} name="Dashboard" path="/dashboard/overview" />
        <NavItems Icon={ManagementIcon} name="Management" path="/dashboard/management" />
        <NavItems Icon={FinanceIcon} name="Finance" path="/dashboard/finance" />
        <NavItems Icon={CommunicationIcon} name="Communication" path="/dashboard/communication" />
        <NavItems Icon={AnalyticIcon} name="Analytics" path="/dashboard/analytics" />
        <NavItems Icon={SettingsIcon} name="Settings" path="/dashboard/settings" />
        {/* <NavItems Icon={HelpIcon} name="Help" path="/dashboard/help" /> */}
        <Logout />
      </ul>

      <div className="bg-gradient-to-b from-blue to-grey-300/70 rounded-xl px-3 pt-6 pb-4 mt-auto">
        <span className="h-5 w-5 bg-white grid place-content-center mx-auto">
          <Gem color="#205BF3" size={16} />
        </span>

        <p className="mt-3 mb-5 text-center text-white text-sm">
          Upgrade premium to unlock all features
        </p>

        <Link
          className="bg-blue px-4 py-2 block text-center w-full text-white font-medium text-xs rounded-md"
          href={"/pricing"}
        >
          Upgrade Premium
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
