import {Phone, Search, SendHorizonal, Video} from "lucide-react";
import Image from "next/image";
import React from "react";

import {Input} from "@/components/ui/input";

import MessageArea from "./message-area";

function ChatBox() {
  return (
    <div className="flex-1 border border-grey-200 border-b-0 border-l-0 flex flex-col overflow-hidden">
      <header className="flex items-center gap-5 px-5 py-3 border-b border-b-grey-200">
        <div className="h-12 w-12 rounded-full overflow-hidden relative">
          <Image fill alt={`${"name"} profile image`} src={"/reviews/image1.jpg"} />
        </div>
        <span className="font-semibold">Adaramola Lookman</span>
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
      <div className="flex-1">
        <MessageArea />
      </div>
      <form className="border-t py-2 px-5 border-t-grey-200 flex">
        <Input
          className="shadow-none border-none focus-visible:ring-0"
          placeholder="Enter your message"
        />
        <button className="text-blue">
          <SendHorizonal />
        </button>
      </form>
    </div>
  );
}

export default ChatBox;
