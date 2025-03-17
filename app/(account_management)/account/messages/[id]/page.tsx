"use client";

import React, {useEffect} from "react";

import ChatBox from "@/components/messages/chat-box/chat-box";
import ChatList from "@/components/messages/chat-list/chat-list";
import socket from "@/socket";

function Page({params}: {params: {id: string}}) {
  useEffect(() => {
    socket.emit("join-room", params.id);
  }, []);

  return (
    <div className="h-full flex ">
      <ChatList className="hidden md:flex md:w-80 lg:w-96" />
      <ChatBox roomId={params.id} />
    </div>
  );
}

export default Page;
