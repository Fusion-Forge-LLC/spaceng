import {Phone, Search, Video} from "lucide-react";
import Image from "next/image";
import React from "react";

import {useGetChatPeer} from "@/api/chat/get-chat-peer";

function ChatHead({id}: {id: string}) {
  const {data, isLoading} = useGetChatPeer(id);

  if (isLoading) return;

  if (!data) return;

  const user = data.data[0];

  return (
    <header className="flex items-center gap-5 px-5 py-3 border-b border-b-grey-200">
      <div className="h-12 w-12 rounded-full overflow-hidden relative shrink-0">
        <Image fill alt={`${"name"} profile image`} src={user.avatar} />
      </div>
      <span className="font-semibold">{user.fullname}</span>
      <div className="flex gap-2 ml-auto">
        <button className="chat-header-btn">
          <Video size={18} />
        </button>
        <button className="chat-header-btn">
          <Phone size={18} />
        </button>
        <button className="chat-header-btn">
          <Search size={18} />
        </button>
      </div>
    </header>
  );
}

export default ChatHead;
