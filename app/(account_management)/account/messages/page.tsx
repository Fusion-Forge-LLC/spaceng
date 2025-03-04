import {X} from "lucide-react";
import React from "react";

import ChatList from "@/components/messages/chat-list/chat-list";

function Page() {
  return (
    <div className="h-full flex ">
      <ChatList className="flex w-full md:w-80 lg:w-96" />
      <div className="flex-1 border border-grey-200 border-b-0 border-l-0 hidden md:block">
        <header className="flex items-center gap-10 justify-end py-5 text-black px-5 border-b border-b-grey-200">
          <span className="font-semibold text-xl">Details</span>
          <button className="chat-header-btn">
            <X size={20} />
          </button>
        </header>
      </div>
    </div>
  );
}

export default Page;
