import React from "react";

import ChatBox from "@/components/messages/chat-box/chat-box";
import ChatList from "@/components/messages/chat-list/chat-list";

function Page() {
  return (
    <div className="h-full flex ">
      <ChatList />
      <ChatBox />
    </div>
  );
}

export default Page;
