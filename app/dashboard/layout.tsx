import React, {ReactNode} from "react";
import {redirect} from "next/navigation";

import {fetchUser} from "@/api/auth/get-user";

async function DashboardLayout({children}: {children: ReactNode}) {
  const data = await fetchUser();
  const userRole = data?.data?.user?.role;

  if (userRole !== "business" && userRole === "client") {
    redirect("/account/settings");
  }

  return <div>{children}</div>;
}

export default DashboardLayout;
