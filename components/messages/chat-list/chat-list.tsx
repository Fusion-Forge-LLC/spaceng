"use client";

import {ChevronDown, Search, Settings2Icon} from "lucide-react";
import React, {useState} from "react";

import {cn} from "@/lib/utils";

import List from "./list";

function ChatList() {
  const [chatsPreference, setChatPreference] = useState<"all" | "unread">("all");

  return (
    <aside className="h-full w-96 border border-grey-200 border-b-0 text-black">
      <header className="flex items-center gap-8 py-5 px-5">
        <span className="font-semibold text-xl mr-auto">Messages</span>
        <button className="chat-header-btn">
          <Search size={20} />
        </button>
        <button className="chat-header-btn">
          <Settings2Icon size={20} />
        </button>
      </header>
      <div className="flex items-center gap-3 px-5 py-2">
        <button
          className={cn(
            "chat-switch-btn",
            chatsPreference === "all" ? "bg-grey text-white" : "text-black",
          )}
          onClick={() => setChatPreference("all")}
        >
          All
          <ChevronDown size={12} />
        </button>
        <button
          className={cn(
            "chat-switch-btn",
            chatsPreference === "unread" ? "bg-grey text-white" : "text-black",
          )}
          onClick={() => setChatPreference("unread")}
        >
          Unread
        </button>
      </div>
      <div className="py-8 flex flex-col items-center w-full px-5 gap-4">
        <List />
      </div>
    </aside>
  );
}

export default ChatList;
