"use client";

import React, {ReactNode} from "react";

import Header from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";

import ChatList from "../(others)/_components/chat/list";

function DashboardLyout({children}: {children: ReactNode}) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <main className="flex-1 h-full overflow-y-scroll no-scrollbar">
          <div className="h-full overflow-hidden flex no-scrollbar">
            <ChatList />
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLyout;
