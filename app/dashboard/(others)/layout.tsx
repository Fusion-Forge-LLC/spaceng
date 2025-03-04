"use client";

import React, {ReactNode} from "react";

import Footer from "@/components/footer/footer";
import Header from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";

function DashboardLyout({children}: {children: ReactNode}) {
  return (
    <div className="md:h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <main className="flex-1 h-full overflow-y-scroll no-scrollbar">{children}</main>
      </div>
      <div className="md:hidden">
        <Footer />
      </div>
    </div>
  );
}

export default DashboardLyout;
