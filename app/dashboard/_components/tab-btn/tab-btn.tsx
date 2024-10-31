import React from "react";

import {cn} from "@/lib/utils";

interface Props {
  currentTab: string;
  tab: string;
  isDisabled?: boolean;
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

function TabBtn({currentTab, tab, isDisabled, setTab}: Props) {
  return (
    <button
      className={cn("switch-btn capitalize", currentTab === tab && "border-b-blue text-blue")}
      disabled={isDisabled}
      onClick={() => setTab(tab)}
    >
      {tab}
    </button>
  );
}

export default TabBtn;
