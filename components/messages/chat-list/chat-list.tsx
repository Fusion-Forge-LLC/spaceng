"use client";

import {ChevronDown, Search, Settings2Icon} from "lucide-react";
import React, {useState} from "react";

import {cn} from "@/lib/utils";
import {useGetChatList} from "@/api/chat/get-chatlist";
import Loader from "@/components/loader/loader";

import List from "./list";

function ChatList({className}: {className: string}) {
  const [chatsPreference, setChatPreference] = useState<"all" | "unread">("all");
  const {data, isLoading} = useGetChatList();

  return (
    <aside
      className={cn(
        "h-full border border-grey-200 border-b-0 text-black flex-col overflow-hidden",
        className,
      )}
    >
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
      <div className="py-8 flex flex-col items-center w-full px-5 gap-4 flex-1 overflow-hidden">
        {isLoading ? (
          <div className="h-full w-full grid place-content-center">
            <Loader />
          </div>
        ) : (
          <List chatList={data?.data || []} />
        )}
      </div>
    </aside>
  );
}

export default ChatList;
