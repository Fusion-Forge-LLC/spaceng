"use client";

import {LogOutIcon} from "lucide-react";
import React from "react";

import {useSignOut} from "@/api/auth/logout";

function Logout() {
  const {logout} = useSignOut();

  return (
    <li className="">
      <button className="dashboard-nav text-red w-full" onClick={() => logout()}>
        <span className="w-10">
          <LogOutIcon />
        </span>
        Logout
      </button>
    </li>
  );
}

export default Logout;
